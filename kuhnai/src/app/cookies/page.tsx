import type { Metadata } from "next";
import AnimatedNavbar from "@/components/animated-navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Cookie Policy | KuhnAI",
  description: "Cookie Policy for KuhnAI - Learn about how we use cookies.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedNavbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when 
              you visit our website. They are widely used to make websites work more efficiently 
              and provide a better personalized experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Authentication and security</li>
              <li>Preferences and features</li>
              <li>Analytics and performance</li>
              <li>Advertising and targeting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p>Required for the website to function properly. Cannot be disabled.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
                <p>Enable personalized features and remember your preferences.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                <p>Used to track visitors across websites for advertising purposes.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>View cookies stored on your computer</li>
              <li>Allow, block, or delete cookies</li>
              <li>Set preferences for certain websites</li>
              <li>Use private browsing mode</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
            <p>
              Some of our pages display content from external providers, such as YouTube, Facebook, 
              and Twitter. To view this content, you may need to accept their specific terms and 
              cookies policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on 
              this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
              <br />
              Email: privacy@kuhnai.com
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