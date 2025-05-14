"use client";

import React, { useState } from "react";

const Quote = ({
  setStep,
  setFormData,
}: {
  setStep: (step: number) => void;
  setFormData: (data: any) => void;
}) => {
  const [formDataLocal, setFormDataLocal] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDataLocal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendQuote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataLocal),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        setSubmitted(true);
        setFormData(formDataLocal); // Pass data to RepairWizard
      } else {
        alert("Failed to send email: " + data.error);
      }
    } catch (error) {
      console.error("❌ Submission failed", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[#f9f9f9] flex items-center justify-center px-4 py-6">
      <div className="w-full">
        <div className="bg-white p-6 sm:p-8 rounded-xl w-full shadow-md">
          {submitted ? (
            <div className="text-center mb-6">
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
                ✅ Your quote request has been sent Successfully!
              </div>
              <button
                onClick={() => setStep(5)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow transition"
              >
                View Your Quote
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6">
                Get Free Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formDataLocal.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone"
                  value={formDataLocal.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formDataLocal.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
                  required
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="Your zip code"
                  value={formDataLocal.zip}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formDataLocal.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-blue-50 rounded-md focus:outline-none focus:border-red-700 border-2 border-transparent"
                  rows={3}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-400 text-black p-3 rounded-md hover:bg-green-600 transition"
                >
                  Get A Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;