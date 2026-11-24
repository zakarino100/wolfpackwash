# Production deploys

A push or merge to `main` runs [`.github/workflows/deploy-production.yml`](.github/workflows/deploy-production.yml). The same workflow can be started by hand with **workflow_dispatch**, and only when that run’s ref is `main`. This pull request does not deploy anything.

1. GitHub Actions checks out the commit in the `production` environment.
2. It installs with `npm ci` on Node 20 (the `nodejs-20` module in `.replit`; the repo has no `engines` field and no `.nvmrc`), runs `npx tsc --noEmit`, then `npm run build`.
3. It deploys with Railway CLI **5.75.0**: `railway up --ci --service web --environment production --project fb119744-3668-4244-aeb8-d41a4ca192b1 --message "main $GITHUB_SHA"`. The project id is passed with `--project`, which that CLI version supports. Auth is `RAILWAY_TOKEN` from the `production` environment.
4. After `railway up --ci` exits, the smoke job checks `https://www.wolfpackwashnc.com`.

`railway up --ci` streams the build log and exits when the **build** finishes. It does not wait until the new container is serving. The smoke job waits 20 seconds, then retries every 10 seconds for up to about four minutes. These URLs must return HTTP 200:

- `/`
- `/blog`
- the newest blog post
- `/sitemap.xml`
- `/api/health`

The newest post is read from `/feed.xml` when that feed returns 200 (first `<item>` link). The feed is not on `main` today. It is added as `/feed.xml` in unmerged [PR #3](https://github.com/zakarino100/wolfpackwash/pull/3), and a **404** is allowed until then. Any other non-200 fails the job. Once `/`, `/blog`, `/sitemap.xml`, `/api/health`, and a blog post are all 200, three straight 404s on `/feed.xml` end the wait early. If the feed is missing, the post URL comes from `/sitemap.xml` when that file lists a `/blog/<slug>` URL, and otherwise from the first `/blog/<slug>` link on `/blog`.

`npm run lint` is not a gate. It fails on `main` in existing files this workflow does not change (`src/app/confirm/page.tsx`, `src/app/reviews/page.tsx`, `src/components/funnel/funnel-context.tsx`, `src/components/sections/content-sections.tsx`, `src/components/sections/service-gallery.tsx`, `src/components/sections/service-grid.tsx`, `src/components/ui/page-builder.tsx`, `src/components/ui/page-template.tsx`). `npx tsc --noEmit` passes, so typecheck stays in the workflow.

`npm run build` in Actions is the CI gate. `railway up` still uploads the repo, and Railway builds that upload with the service’s existing Railpack settings. `.railwayignore` is unchanged.

## One-time setup

Do these steps once. This pull request does not create the token, the GitHub environment, or any Railway setting.

1. In Railway project `fb119744-3668-4244-aeb8-d41a4ca192b1`, open **Settings → Tokens** and create a **project token** for the **production** environment. A project token is scoped to one environment. The CLI reads it from `RAILWAY_TOKEN`.
   - [Project token](https://docs.railway.com/integrations/api#project-token)
   - [Using project tokens](https://docs.railway.com/cli/deploying#using-project-tokens)
   - [`RAILWAY_TOKEN`](https://docs.railway.com/cli/login#environment-variables)
2. On GitHub, open **Settings → Environments** for this repo and create an environment named `production`.
3. Add a secret named `RAILWAY_TOKEN` **on that environment**. The deploy job sets `environment: production`, so a repository secret with the same name is not what the job reads.
4. Optional: add [required reviewers](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#required-reviewers) on the `production` environment if someone should approve each deploy before the job starts.
5. On the Railway **web** service, turn off GitHub autodeploy so a push to `main` is not deployed twice (once by Railway’s GitHub connection, and once by this workflow). In the service settings, click **Disable** under automatic deployments. Leave the repo connection in place if you still want it for manual deploys. This file only documents that click. Do not enable **Wait for CI** as a substitute: that still deploys from Railway after Actions succeeds, which stacks on top of `railway up`.
   - [Disable automatic deployments](https://docs.railway.com/deployments/github-autodeploys#disable-automatic-deployments)

## CDN

Confirm these on the **web** service’s Edge settings. This pull request does not change them. Both are the documented defaults.

- **HTML caching: Auto.** HTML is cached only when the response includes a `Cache-Control` `max-age` or `s-maxage`. Static assets are cached regardless of that setting. [HTML caching](https://docs.railway.com/networking/cdn#html-caching)
- **Purge cache on deploy: Purge HTML on each successful deploy.** A successful deploy clears cached HTML and leaves static assets cached, so a new page is not stuck pointing at old asset URLs. [Purge on deploy](https://docs.railway.com/networking/cdn#purge-on-deploy)

`/api/health` sends `Cache-Control: no-store`. The CDN does not cache a response with that header. [When a response isn’t cached](https://docs.railway.com/networking/cdn#when-a-response-isnt-cached)

## Canonical host

The public host is `https://www.wolfpackwashnc.com`. `https://wolfpackwashnc.com` should keep redirecting to `www`.

Railway does not document a switch that redirects the apex hostname to `www`. Each name is its own custom domain. [Custom domains](https://docs.railway.com/networking/domains/working-with-domains#custom-domains)

Railway’s Cloudflare write-up redirects `www` **to the apex**, which is the opposite of this site. Do not apply that recipe. [Adding a root domain with www](https://docs.railway.com/networking/domains/working-with-domains#adding-a-root-domain-with-www-subdomain-to-cloudflare)

Leave the existing apex → `www` redirect where it is (DNS / Cloudflare). This pull request does not change it.

## `railway.json`

`railway.json` sets only the deploy healthcheck: path `/api/health`, timeout 300 seconds. It does not set a builder, build command, or start command. There is no `railway.toml`, `Dockerfile`, or Nixpacks file in the repo, so nothing already in git is replaced.

Railway reads a root `railway.json` during deploy and overrides dashboard values for the keys in the file. Other service settings stay as they are. [How config as code is combined](https://docs.railway.com/config-as-code/reference#how-does-it-work) and [healthcheck timeout](https://docs.railway.com/config-as-code/reference#healthcheck-timeout)

Config as Code is deprecated. A root `railway.json` is still read for an existing service, including when no config-file path is set, and those files stop being read on **2026-12-01**. [IaC vs Config as Code](https://docs.railway.com/infrastructure-as-code#iac-vs-config-as-code)

## Vercel

`vercel.json` sets `git.deploymentEnabled.main` to `false`, so Vercel does not deploy `main`. Preview deployments for other branches are unchanged. There was no existing `vercel.json` to merge.
