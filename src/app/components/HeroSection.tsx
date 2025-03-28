export default function HeroSection() {
  return (
    <div className="flex flex-col flex-1  items-center text-center px-4 pt-12 mt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
        Learn from the best, be your best..
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-8 lead-8 opacity-50">
        Give yourself an upgrade with our inspiring online courses
        and join a global community of learners
      </p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-colors">
        Get Started
      </button>
    </div>
  )
}