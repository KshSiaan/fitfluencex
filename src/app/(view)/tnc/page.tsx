import React from "react";

export default function Page() {
  return (
    <main className="!py-12 !px-4 md:!px-12 !space-y-6">
      <h1 className="!mb-12 text-center text-6xl font-bold">
        Terms & Conditions
      </h1>
      <p>
        Effective Date: [Insert Date] Welcome to [Your Website Name]
        (&quot;Platform&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;). These Terms and Conditions (“Terms”) govern your use
        of our platform located at [yourwebsite.com] and any related services.
        By registering, accessing, or using the Platform in any manner, you
        agree to be legally bound by these Terms. If you do not agree, you may
        not use the Platform.
      </p>

      <h1 className="text-xl font-bold">1. Eligibility</h1>
      <p>
        You must be at least 13 years of age to use our platform. If you are
        under the age of 18, you must have the consent of your parent or legal
        guardian to use this Platform. By using our service, you represent and
        warrant that you meet these requirements.
      </p>

      <h1 className="text-xl font-bold">2. User Accounts</h1>
      {/* Moved ul outside of p tag */}
      <div>
        <ul className="list-disc list-inside">
          <li>You must create an account to access certain features.</li>
          <li>
            You agree to provide accurate, current, and complete information
            during registration.
          </li>
          <li>
            You are responsible for safeguarding your password and account
            details.
          </li>
          <li>
            You are responsible for all activity that occurs under your account.
          </li>
        </ul>
        <p>
          We reserve the right to terminate or suspend your account at any time,
          with or without notice, for behavior that violates these Terms.
        </p>
      </div>

      <h1 className="text-xl font-bold">3. Creator Content</h1>
      {/* Moved ul outside of p tag */}
      <div>
        <ul className="list-disc list-inside">
          <li>
            Creators are solely responsible for the content they publish (text,
            images, videos, audio, files, links, etc.).
          </li>
          <li>
            You retain ownership of your content but grant us a non-exclusive,
            worldwide, royalty-free license to use, display, and distribute it
            on the platform.
          </li>
          <li>You must not post any content that:</li>
          <li>Is unlawful, abusive, hateful, or harassing</li>
          <li>
            Contains explicit adult content (unless categorized and permitted)
          </li>
          <li>Infringes upon copyrights, trademarks, or other rights</li>
          <li>Contains spam, malware, or scams</li>
        </ul>
        <p>
          We reserve the right to remove or restrict content at our discretion.
        </p>
      </div>

      <h1 className="text-xl font-bold">4. Fan Support and Payments</h1>
      {/* Moved ul outside of p tag */}
      <div>
        <ul className="list-disc list-inside">
          <li>
            Fans can support creators through subscriptions, tips, or one-time
            payments.
          </li>
          <li>
            We use third-party payment providers. We are not responsible for any
            payment issues that arise outside our control.
          </li>
          <li>
            Creators determine their pricing and offer exclusive content to
            paying supporters.
          </li>
          <li>
            Refunds are subject to our Refund Policy, which may vary based on
            circumstances.
          </li>
          <li>
            All payment transactions are processed via [Insert Payment Provider]
          </li>
        </ul>
      </div>

      <h1 className="text-xl font-bold">5. Commission & Fees</h1>
      {/* Moved ul outside of p tag */}
      <div>
        <ul className="list-disc list-inside">
          <li>
            We may charge a percentage fee from creator earnings as part of our
            service agreement. Fee structures are detailed separately on [Insert
            Fees Page].
          </li>
          <li>
            All applicable transaction and processing fees (e.g., Stripe,
            PayPal) may apply.
          </li>
        </ul>
      </div>

      <h1 className="text-xl font-bold">6. Intellectual Property Rights</h1>
      {/* Moved ul outside of p tag */}
      <div>
        <ul className="list-disc list-inside">
          <li>
            All Platform content, features, design, trademarks, and code are the
            property of [Your Website Name] or its licensors and are protected
            by copyright and other intellectual property laws.
          </li>
          <li>
            You may not copy, modify, distribute, or create derivative works
            from the platform or its content without explicit permission.
          </li>
        </ul>
      </div>

      <h1 className="text-xl font-bold">7. Community Guidelines</h1>
      {/* Moved ul outside of p tag, and adjusted surrounding text */}
      <div>
        <p>By using our platform, you agree to follow our community rules:</p>
        <ul className="list-disc list-inside">
          <li>No illegal activities or content.</li>
          <li>No harassment, hate speech, or discrimination.</li>
          <li>No impersonation or misleading representation.</li>
          <li>No spamming or deceptive marketing practices.</li>
        </ul>
        <p>
          Violation of these rules may result in warning, suspension, or
          permanent ban.
        </p>
      </div>

      <h1 className="text-xl font-bold">8. Termination of Use</h1>
      {/* Moved ul outside of p tag, and adjusted surrounding text */}
      <div>
        <p>We reserve the right to:</p>
        <ul className="list-disc list-inside">
          <li>Terminate or discontinue any account without prior notice.</li>
          <li>
            Remove any content or user-generated material if it violates these
            Terms.
          </li>
          <li>Refuse service to anyone at any time.</li>
        </ul>
        <p>
          If your account is terminated, you lose access to all content and
          earnings.
        </p>
      </div>

      <h1 className="text-xl font-bold">9. Privacy and Data Usage</h1>
      <p>
        We care about your privacy. Please review our [Privacy Policy] to
        understand how we collect, use, and share your personal data. By using
        the Platform, you consent to our data practices as outlined in the
        Privacy Policy.
      </p>

      <h1 className="text-xl font-bold">10. Third-Party Links</h1>
      <p>
        The Platform may contain links to third-party websites or services. We
        are not responsible for the content, policies, or practices of these
        external sites. Use them at your own risk.
      </p>
    </main>
  );
}
