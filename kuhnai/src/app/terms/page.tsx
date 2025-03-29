import type { Metadata } from "next";
import AnimatedNavbar from "@/components/animated-navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | KuhnAI",
  description: "Terms of Service for KuhnAI - Understanding our service agreement.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedNavbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using KuhnAI&apos;s services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access and use our services for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
            <p>
              KuhnAI provides AI-powered business solutions including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process automation</li>
              <li>Business intelligence</li>
              <li>Workflow optimization</li>
              <li>Document processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Use the services legally and responsibly</li>
              <li>Not misuse or attempt to exploit our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p>
              For paid services, you agree to pay all fees according to the pricing terms presented 
              to you at the time of purchase. You are responsible for providing complete and accurate 
              billing information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              KuhnAI shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes via email or through our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
              <br />
              Email: legal@kuhnai.com
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}