import React from "react";
import Head from 'next/head';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Head>
        <title>Terms and Conditions - Picgent</title>
        <meta name="description" content="Terms and Conditions for Picgent, the AI-powered photo searching app." />
      </Head>

      <main className="max-w-5xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Last Updated: 01/11/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Picgent website, mobile application, or related services (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please discontinue use of the Service immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p>
            Picgent provides an AI-powered photo searching tool that allows users to locate and organize images within their personal galleries. Features include:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>AI search for photos by objects, people, events, or locations.</li>
            <li>Automatic categorization of photos.</li>
            <li>Voice-powered search functionality.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
          <p>
            To use Picgent, you must:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Be at least 13 years old or the age of majority in your jurisdiction.</li>
            <li>Agree to these Terms and our Privacy Policy.</li>
            <li>Provide accurate and truthful information during registration.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
          <p>
            When using Picgent, you agree to:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Use the Service solely for personal and lawful purposes.</li>
            <li>Ensure that any content you upload does not violate intellectual property rights, privacy laws, or applicable regulations.</li>
            <li>Refrain from uploading harmful, illegal, or inappropriate content.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Privacy</h2>
          <p>
            Your privacy is important to us. Please refer to our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> to understand how we collect, store, and protect your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p>
            Picgent retains all rights to the Service, including its design, features, and software. You retain ownership of photos you upload but grant Picgent a limited license to process and display content for the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Prohibited Conduct</h2>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Reverse-engineer or modify the Service.</li>
            <li>Transmit harmful or malicious code.</li>
            <li>Violate laws or regulations while using the Service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Service Availability</h2>
          <p>
            Picgent may experience downtime for maintenance or updates. We strive for reliability but cannot guarantee uninterrupted access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we disclaim all warranties, including fitness for a particular purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
          <p>
            Picgent is not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount you paid to use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
          <p>
            You agree to indemnify Picgent from claims or damages resulting from your use of the Service or violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved exclusively in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will be effective upon posting, and continued use of the Service constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Email: support@picgent.com</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;