"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border p-3 rounded-md"
          placeholder="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="border p-3 rounded-md"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="border p-3 rounded-md h-32"
          placeholder="Your message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          type="submit"
        >
          Send Message
        </button>
      </form>

      <div className="flex gap-4 mt-6">
        <Link href="https://github.com/hanifbaaba">
          <button className="border px-4 py-2 rounded-md">Github</button>
        </Link>
        <Link href="https://www.linkedin.com/in/hanif-baaba-4b9591262/">
          <button className="border px-4 py-2 rounded-md">LinkedIn</button>
        </Link>

        <Link href="mailto:baabahanif@gmail.com">
          <button className="border px-4 py-2 rounded-md">Mail</button>
        </Link>
      </div>
    </section>
  );
}
