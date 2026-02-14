import PageContainer from '@/components/ui/PageContainer';

export const metadata = {
  title: 'Privacy Policy - CODESCAPE',
  description: 'Our privacy policy and data practices',
};

export default function PrivacyPage() {
  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: March 2024</p>

        <h2>Introduction</h2>
        <p>
          At CODESCAPE, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, including name, email address,
          company information, and any other information you choose to provide when contacting us
          or using our services.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>Send you technical notices and support messages</li>
          <li>Communicate with you about products, services, and events</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security
          of your personal information. However, no method of transmission over the Internet is
          100% secure.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information at any time.
          Please contact us if you wish to exercise these rights.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at privacy@codescape.com
        </p>
      </div>
    </PageContainer>
  );
}
