import { PERSONAL_INFO } from "@/constants";

export default function LuminaPrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10 bg-black rounded-lg shadow text-white">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy for Lumina</h1>
      <p className="text-gray-400 mb-6">Last Updated: Jan 7, 2026</p>

      <h2 className="text-xl font-semibold mb-2 mt-8">1. Introduction</h2>
      <p className="mb-4">
        Welcome to Lumina (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
        We are committed to protecting your privacy and providing a secure
        environment for your thoughts. This Privacy Policy explains how we
        collect, use, and safeguard your information when you use our mobile
        application (the &quot;App&quot;).
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8">
        2. The Core Principle: Zero-Knowledge Encryption
      </h2>
      <p className="mb-4">
        Lumina is designed as a &quot;Zero-Knowledge&quot; application for your
        private journals.
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>Private Vault:</strong> Your personal entries are encrypted on
          your device using a key derived from your password. We do not possess
          this key. Consequently, we cannot decrypt, read, or access your
          private entries, even if compelled by legal authorities.
        </li>
        <li>
          <strong>Data Recovery:</strong> Because we cannot decrypt your private
          data, if you lose your password and your recovery key, we cannot
          restore your private data.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-8">
        3. Information We Collect
      </h2>
      <h3 className="text-lg font-medium mb-2">A. Information You Provide</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>Account Information:</strong> We collect your email address to
          create your account and manage subscriptions.
        </li>
        <li>
          <strong>User Content (The Void):</strong> Content you voluntarily post
          to &quot;The Void&quot; (Public Mode) is stored on our servers in
          readable text to enable moderation and community features. This
          content is stripped of your email identity before being displayed
          publicly.
        </li>
        <li>
          <strong>User Content (Shared Journals):</strong> Entries in Shared
          Journals are encrypted so that only you and your invited partner(s)
          can read them.
        </li>
      </ul>

      <h3 className="text-lg font-medium mb-2">
        B. Information Collected Automatically
      </h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>Device Information:</strong> We may collect device model,
          operating system version, and unique device identifiers to assist with
          crash reporting and bug fixes.
        </li>
        <li>
          <strong>Usage Data:</strong> We collect anonymous data on how you
          interact with the app (e.g., &quot;User switched to Dark Mode&quot;)
          to improve the user experience. We do not track what you write, only
          that you are using features.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-8">
        4. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the collected information for the following purposes:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          To provide and maintain the App&apos;s functionality (e.g., syncing
          encrypted blobs between devices).
        </li>
        <li>
          To moderate &quot;The Void&quot; and prevent hate speech or toxic
          content (using automated and manual checks).
        </li>
        <li>
          To process payments for Premium subscriptions (processed securely via
          Google Play Billing; we do not store your credit card details).
        </li>
        <li>To notify you about updates or security alerts.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-8">
        5. Data Sharing and Disclosure
      </h2>
      <p className="mb-4">
        We do not sell your personal data. We only share information in the
        following ways:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>With Your Consent:</strong> When you post to &quot;The
          Void,&quot; you consent to that specific content being public. When
          you invite a user to a &quot;Shared Journal,&quot; you consent to
          sharing that specific book&apos;s content with them.
        </li>
        <li>
          <strong>Service Providers:</strong> We may use third-party services
          (e.g., database hosting, analytics) that process data on our behalf.
          These providers are bound by confidentiality agreements.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your Account
          Information (Email) if required by law. However, we cannot disclose
          your Private Journal Content as it is mathematically impossible for us
          to decrypt it.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-8">
        6. Data Retention and Deletion
      </h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>Retention:</strong> We retain your encrypted data as long as
          your account is active.
        </li>
        <li>
          <strong>Deletion:</strong> You may request account deletion at any
          time within the App settings. Upon deletion, your encryption keys and
          data blobs are permanently removed from our servers.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-8">7. Children’s Privacy</h2>
      <p className="mb-6">
        Lumina is not intended for children under the age of 13. We do not
        knowingly collect personal information from children. If we become aware
        that a child has provided us with personal information, we will take
        steps to delete such information.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8">
        8. Changes to This Privacy Policy
      </h2>
      <p className="mb-6">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the &quot;Last Updated&quot; date.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p className="mb-2">
        Email:&nbsp;
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-blue-400 underline"
        >
          {PERSONAL_INFO.email}
        </a>
      </p>
      <p className="font-medium text-slate-300">
        Developer: {PERSONAL_INFO.name}
      </p>
    </main>
  );
}
