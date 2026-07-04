export default function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold">
        Professional Websites That Help Businesses Grow
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        We design modern, fast, SEO-friendly websites that help businesses
        generate more leads and build trust online.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          View Portfolio
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
          Get Free Quote
        </button>
      </div>
    </section>
  );
}
