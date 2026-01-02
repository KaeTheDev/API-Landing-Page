export default function Hero() {
  return (
    <section>
      <div className="max-w-7xl mx-auto my-4 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0">
            <h1 className="font-bold text-3xl md:text-5xl mt-3">
              More than just shorter links
            </h1>
            <p className="text-gray-500 mt-4">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="mt-6 px-6 py-3 border bg-teal-400 hover:bg-teal-600 hover:text-white text-white font-bold rounded transition">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
            <img
              src="images/illustration-working.svg"
              className="max-w-full h-auto"
              alt="Person working on computer illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}