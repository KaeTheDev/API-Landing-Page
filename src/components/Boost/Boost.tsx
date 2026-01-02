export default function Boost() {
  return (
    <section
      className="py-16 text-center bg-[hsl(257,27%,26%)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-boost-desktop.svg')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="mb-4 text-white text-2xl md:text-3xl font-bold">
          Boost your links today
        </h3>
        <button className="bg-teal-400 text-white font-bold px-6 py-3 rounded hover:bg-teal-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}