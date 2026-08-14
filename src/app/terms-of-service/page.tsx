import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

export const metadata: Metadata = {
  title: "Terms of Service | Wolf Pack Wash",
  description: "Terms of service for Wolf Pack Wash exterior cleaning services in Raleigh, NC.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://wolfpackwashnc.com/terms-of-service" },
};

const LAST_UPDATED = "April 19, 2026";
const COMPANY = "Wolf Pack Wash";
const DOMAIN = "wolfpackwashnc.com";
const EMAIL = "info@wolfpackwashnc.com";
const PHONE = siteConfig.phoneDisplay;

export default function TermsOfServicePage() {
  return (
    <section className="bg-[#07111b] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold">Terms of Service</h1>
        <p className="mt-3 text-sm text-white/50">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10 text-sm leading-8 text-white/75">

          <div>
            <h2 className="text-lg font-semibold text-white">1. Agreement to Terms</h2>
            <p className="mt-3">
              By accessing <a href={`https://${DOMAIN}`} className="text-amber-300 hover:text-amber-200 underline underline-offset-2">{DOMAIN}</a> or
              using any services provided by {COMPANY} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. Services</h2>
            <p className="mt-3">
              {COMPANY} provides residential and commercial exterior cleaning services including but not limited to:
              house washing, soft washing, window cleaning, gutter cleaning, pressure washing, deck and fence cleaning,
              roof washing, concrete and driveway cleaning, holiday light installation, and permanent lighting installation
              in the Raleigh, Cary, Apex, Holly Springs, and surrounding Triangle area of North Carolina.
            </p>
            <p className="mt-3">
              Quotes provided through our website or over the phone are estimates and may be adjusted after an on-site assessment
              if conditions differ materially from the information provided. We will communicate any pricing changes before beginning work.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. Quote Requests & Scheduling</h2>
            <p className="mt-3">
              Submitting a quote request through our website does not constitute a binding service agreement.
              A service agreement is formed only when both parties confirm the scope, pricing, and scheduled date.
              We reserve the right to decline any service request at our discretion.
            </p>
            <p className="mt-3">
              We aim to respond to all quote requests within one business day. Response times may vary based on volume and season.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. Payment</h2>
            <p className="mt-3">
              Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, check, and major credit cards.
              For recurring service plans, payment terms will be outlined in your service agreement.
            </p>
            <p className="mt-3">
              Returned checks are subject to a $35 returned check fee. Overdue balances may be subject to a 1.5% monthly finance charge.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. Cancellations & Rescheduling</h2>
            <p className="mt-3">
              We ask for at least 24 hours&rsquo; notice for cancellations or rescheduling. We reserve the right to reschedule
              due to weather, equipment issues, or other circumstances beyond our control. We will notify you promptly and
              work to reschedule at your earliest convenience.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6. Customer Responsibilities</h2>
            <p className="mt-3">You agree to:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Provide accurate property information when requesting a quote</li>
              <li>Ensure safe access to the property on the scheduled service date</li>
              <li>Remove or secure fragile items, vehicles, or obstacles in the work area</li>
              <li>Close windows, doors, and vents prior to exterior washing services</li>
              <li>Inform us of any known property conditions (fragile surfaces, previous damage, etc.) before service begins</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7. Satisfaction Guarantee</h2>
            <p className="mt-3">
              We stand behind our work. If you are not satisfied with the results of a completed service, notify us within 48 hours
              and we will return to address any issues at no additional charge. This guarantee applies to the specific areas serviced
              and does not cover pre-existing damage, staining that cannot be removed by standard cleaning methods, or conditions
              not disclosed prior to service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8. Limitation of Liability</h2>
            <p className="mt-3">
              {COMPANY} is fully licensed and insured. In the event of damage caused directly by our crew during service,
              we will work with you and our insurance carrier to address it promptly.
            </p>
            <p className="mt-3">
              Our liability is limited to the amount paid for the specific service that caused the damage.
              We are not liable for pre-existing damage, damage resulting from undisclosed conditions,
              or consequential, indirect, or incidental damages of any kind.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">9. SMS Communications</h2>
            <p className="mt-3">
              By providing your phone number and submitting a quote request, you consent to receive SMS messages from {COMPANY}
              regarding your service inquiry, appointment scheduling, confirmations, and follow-up.
              You may opt out at any time by replying <strong className="text-white">STOP</strong>. Message and data rates may apply.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">10. Intellectual Property</h2>
            <p className="mt-3">
              All content on this website — including text, images, logos, and design — is the property of {COMPANY} and
              may not be reproduced, copied, or used without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">11. Governing Law</h2>
            <p className="mt-3">
              These Terms of Service are governed by the laws of the State of North Carolina.
              Any disputes arising from these terms or our services shall be resolved in the courts of Wake County, North Carolina.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">12. Changes to These Terms</h2>
            <p className="mt-3">
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page
              with an updated &ldquo;Last updated&rdquo; date. Continued use of our website or services after changes
              constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">13. Contact Us</h2>
            <p className="mt-3">Questions about these terms? Contact us:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Phone: <a href={siteConfig.phoneHref} className="text-amber-300 hover:text-amber-200">{PHONE}</a></li>
              <li>Email: <a href={`mailto:${EMAIL}`} className="text-amber-300 hover:text-amber-200">{EMAIL}</a></li>
              <li>Website: <Link href="/contact" className="text-amber-300 hover:text-amber-200">wolfpackwashnc.com/contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex gap-6 text-sm text-white/40">
          <Link href="/privacy-policy" className="hover:text-white/70 transition">Privacy Policy</Link>
          <Link href="/" className="hover:text-white/70 transition">Home</Link>
        </div>
      </div>
    </section>
  );
}
