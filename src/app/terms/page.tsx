import PageContainer from '@/components/ui/PageContainer';

export const metadata = {
  title: 'Terms of Service - CODESCAPE',
  description: 'Terms and conditions for using our services',
};

export default function TermsPage() {
  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: March 2024</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using CODESCAPE&apos;s services, you agree to be bound by these Terms of Service
          and all applicable laws and regulations.
        </p>

        <h2>Use of Services</h2>
        <p>
          You may use our services only for lawful purposes and in accordance with these Terms.
          You agree not to use our services in any way that could damage, disable, or impair our
          systems or interfere with any other party's use of our services.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, features, and functionality of our services are owned by CODESCAPE and are
          protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>Service Availability</h2>
        <p>
          We strive to maintain high availability of our services but do not guarantee uninterrupted
          access. We reserve the right to modify or discontinue services at any time.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          CODESCAPE shall not be liable for any indirect, incidental, special, consequential, or
          punitive damages resulting from your use of or inability to use our services.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of our services
          after changes constitutes acceptance of the modified terms.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact us at legal@codescape.com
        </p>
      </div>
    </PageContainer>
  );
}
