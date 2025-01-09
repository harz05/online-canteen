'use client';

import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const contactReasons = [
  'General Inquiry',
  'Order Issue',
  'Food Quality',
  'Delivery Problem',
  'Payment Issue',
  'Partnership Request',
  'Feedback & Suggestions'
];

const faqs = [
  {
    question: 'How do I track my order?',
    answer: 'You can track your order in real-time through the Orders section in your account dashboard.'
  },
  {
    question: 'What are your delivery hours?',
    answer: 'We deliver from 9:00 AM to 9:00 PM daily. Late night delivery is available in select areas.'
  },
  {
    question: 'How can I cancel my order?',
    answer: 'You can cancel your order within 5 minutes of placing it through the Orders section. After that, please contact our support team.'
  }
];

export default function ContactPage() {
  const [selectedReason, setSelectedReason] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Contact
                </label>
                <div className="flex flex-wrap gap-2">
                  {contactReasons.map((reason) => (
                    <button
                      key={reason}
                      type="button"
                      onClick={() => setSelectedReason(reason)}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        selectedReason === reason
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {reason}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Number (if applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </Card>
        </div>

        {/* Contact Information & FAQs */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <Card>
            <h2 className="text-lg font-semibold mb-4">Quick Contact</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Customer Support</h3>
                <p className="text-gray-600">1800-123-4567</p>
                <p className="text-gray-600">support@canteenhub.com</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Sunday</p>
                <p className="text-gray-600">9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </Card>

          {/* FAQs */}
          <Card>
            <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="list-none flex justify-between items-center cursor-pointer">
                    <span className="font-medium">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}