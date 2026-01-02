export default function Features() {
    return(
        <section className="features py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold">Advanced Statistics</h2>
    <p className="mt-4 text-gray-600">
      Track how your links are performing across the web with our advanced statistics dashboard.
    </p>

    {/* Features Grid */}
    <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-start relative">
      
      {/* Feature 1 */}
      <div className="flex justify-center">
        <div className="relative bg-white rounded-lg p-6 pt-16 shadow-md w-full max-w-sm text-center">
          {/* Icon Circle */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-950 p-4 rounded-full flex items-center justify-center">
            <img src="images/icon-brand-recognition.svg" alt="Brand Recognition" className="w-8 h-8" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Brand Recognition</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex justify-center">
        <div className="relative bg-white rounded-lg p-6 pt-16 shadow-md w-full max-w-sm text-center">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-950 p-4 rounded-full flex items-center justify-center">
            <img src="images/icon-detailed-records.svg" alt="Records" className="w-8 h-8" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Detailed Records</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex justify-center">
        <div className="relative bg-white rounded-lg p-6 pt-16 shadow-md w-full max-w-sm text-center">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-950 p-4 rounded-full flex items-center justify-center">
            <img src="images/icon-fully-customizable.svg" alt="Customizable" className="w-8 h-8" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Fully Customizable</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    )
}