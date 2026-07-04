export default function Contact() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Get In Touch
      </h2>

      <form className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Company Name"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg h-32"
        />

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
