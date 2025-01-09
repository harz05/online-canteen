export default function HeroSection() {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fresh, Delicious, On-Time!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience the best campus dining with our diverse menu
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
            Order Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}