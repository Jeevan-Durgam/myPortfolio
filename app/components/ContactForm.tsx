"use client";

import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post("https://formspree.io/f/mgebgywy", {
        name,
        email,
        message,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
        <p className="text-gray-600">
          Your message has been submitted successfully. We'll get back to you
          soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-16 py-8 px-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 bg-transparent"
            rows={6}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
