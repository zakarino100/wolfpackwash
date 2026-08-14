import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Wolf Pack Wash",
  description: "Privacy policy for Wolf Pack Wash exterior cleaning services in Raleigh, NC.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://wolfpackwashnc.com/privacy-policy" },
};

const LAST_UPDATED = "April 19, 2026";
const COMPANY = "Wolf Pack Wash";
const DOMAIN = "wolfpackwashnc.com";
const EMAIL = "info@wolfpackwashnc.com";
const PHONE = siteConfig.phoneDisplay;

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#07111b] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-white/50">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10 text-sm leading-8 text-white/75">

          <div>
            <h2 className="text-lg font-semibold text-white">1. Who We Are</h2>
            <p className="mt-3">
              {COMPANY} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
              <a href={`https://${DOMAIN}`} className="text-amber-300 hover:text-amber-200 underline underline-offset-2">{DOMAIN}</a>{" "}
              and provides exterior cleaning services across Raleigh, Cary, Apex, Holly Springs, and the broader Triangle area of North Carolina.
              This Privacy Policy explains how we collect, use, and protect your personal information when you visit our site or request a quote.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. Information We Collect</h2>
            <p className="mt-3">We collect information you provide directly to us, including:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li><strong className="text-white">Contact information</strong> — name, phone number, email address</li>
              <li><strong className="text-white">Property information</strong> — service address and details about your property</li>
              <li><strong className="text-white">Service preferences</strong> — services requested, frequency, and notes</li>
              <li><strong className="text-white">Communication records</strong> — messages or calls made through our site or phone number</li>
            </ul>
            <p className="mt-4">We also automatically collect certain technical data when you visit our site:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URL (where you came from before reaching our site)</li>
              <li>UTM parameters from advertising campaigns</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Respond to quote requests and schedule services</li>
              <li>Send appointment confirmations and service reminders via SMS or email</li>
              <li>Follow up on submitted quotes or inquiries</li>
              <li>Improve our website and marketing based on usage data</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. SMS / Text Message Communications</h2>
            <p className="mt-3">
              By submitting a quote request or providing your phone number on our website, you consent to receive SMS messages from {COMPANY}
              related to your service inquiry, appointment scheduling, and follow-up communications.
            </p>
            <p className="mt-3">
              Message frequency varies. Standard message and data rates may apply. You may opt out at any time by replying <strong className="text-white">STOP</strong> to
              any text message from us. For help, reply <strong className="text-white">HELP</strong> or contact us directly at {PHONE}.
            </p>
            <p className="mt-3">
              We do not sell or share your phone number with third parties for their own marketing purposes.
              Your mobile number will only be used to communicate with you about your service inquiry or active job.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. Sharing Your Information</h2>
            <p className="mt-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li><strong className="text-white">Service providers</strong> — third-party tools we use to operate our business (CRM software, SMS platforms, scheduling tools) under confidentiality agreements</li>
              <li><strong className="text-white">Legal authorities</strong> — if required by law, court order, or to protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6. Cookies & Tracking</h2>
            <p className="mt-3">
              Our website may use cookies and similar tracking technologies to improve your browsing experience and understand how visitors use our site.
              You can control cookie settings through your browser. Disabling cookies may affect some functionality of the site.
            </p>
            <p className="mt-3">
              We may use Meta Pixel (Facebook), Google Analytics, or similar tools to measure the effectiveness of our advertising campaigns.
              These tools may collect anonymized usage data. Their use is governed by Meta&rsquo;s and Google&rsquo;s respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7. Data Retention</h2>
            <p className="mt-3">
              We retain your personal information for as long as necessary to fulfill the purposes described in this policy,
              or as required by law. If you would like us to delete your data, contact us using the information below.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8. Your Rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of SMS communications at any time by replying STOP</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`} className="text-amber-300 hover:text-amber-200 underline underline-offset-2">{EMAIL}</a>.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">9. Children&rsquo;s Privacy</h2>
            <p className="mt-3">
              Our website and services are not directed at children under 13. We do not knowingly collect personal information from children.
              If you believe we have inadvertently collected such information, contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">10. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page.
              Continued use of our site after changes constitutes your acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">11. Contact Us</h2>
            <p className="mt-3">If you have any questions about this Privacy Policy, contact us:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Phone: <a href={siteConfig.phoneHref} className="text-amber-300 hover:text-amber-200">{PHONE}</a></li>
              <li>Email: <a href={`mailto:${EMAIL}`} className="text-amber-300 hover:text-amber-200">{EMAIL}</a></li>
              <li>Website: <Link href="/contact" className="text-amber-300 hover:text-amber-200">wolfpackwashnc.com/contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex gap-6 text-sm text-white/40">
          <Link href="/terms-of-service" className="hover:text-white/70 transition">Terms of Service</Link>
          <Link href="/" className="hover:text-white/70 transition">Home</Link>
        </div>
      </div>
    </section>
  );
}
