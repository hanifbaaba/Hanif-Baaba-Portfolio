export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      <form className="flex flex-col gap-4">
        <input className="border p-3 rounded-md" placeholder="Full Name" />
        <input className="border p-3 rounded-md" placeholder="Email" />
        <textarea
          className="border p-3 rounded-md h-32"
          placeholder="Your message..."
        ></textarea>

        <button className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
          Send Message
        </button>
      </form>

      <div className="flex gap-4 mt-6">
        <button className="border px-4 py-2 rounded-md">Github</button>
        <button className="border px-4 py-2 rounded-md">LinkedIn</button>
        <button className="border px-4 py-2 rounded-md">Mail</button>
      </div>
    </section>
  );
}
