import { FC } from 'react'

const App: FC = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">Web3Verse</div>
        <div className="flex gap-12">
          <a href="#features" className="hover:text-purple-400 transition-all duration-300 text-gray-300 hover:scale-105">Features</a>
          <a href="#about" className="hover:text-purple-400 transition-all duration-300 text-gray-300 hover:scale-105">About</a>
          <a href="#join" className="hover:text-purple-400 transition-all duration-300 text-gray-300 hover:scale-105">Join</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 text-center py-32">
        <h1 className="text-7xl font-bold mb-6 leading-tight tracking-tight">
          Own the Future
          <br />
          with <span className="gradient-text">Web3</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Empowering creators, users, and communities
          with decentralized technologies.
        </p>
        <button className="button-gradient px-10 py-4 rounded-full text-lg font-semibold shadow-lg">
          Get Started
        </button>
      </section>

      {/* Why Web3 Section */}
      <section className="container mx-auto px-6 text-center py-32">
        <h2 className="text-6xl font-bold mb-10 tracking-tight">Why Web3?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Web3 is not just a trend –it's a paradigm shift. It represents a
          decentralized internet where users own their data, creators earn directly from their communities, and trust is built
          on code, not corporations.
        </p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-32">
        <h2 className="text-6xl font-bold text-center mb-20 tracking-tight">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card-gradient p-10 rounded-2xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-6">Decentralized Identity</h3>
            <p className="text-gray-300 leading-relaxed">Own your identity, everywhere online.</p>
          </div>
          <div className="card-gradient p-10 rounded-2xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-6">Tokenized Access</h3>
            <p className="text-gray-300 leading-relaxed">Access content and services with tokens.</p>
          </div>
          <div className="card-gradient p-10 rounded-2xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-6">Community Governance</h3>
            <p className="text-gray-300 leading-relaxed">Shape the future with DAO-powered votes.</p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="container mx-auto px-6 text-center py-32">
        <div className="card-gradient rounded-3xl p-16 transform hover:scale-[1.02] transition-all duration-500">
          <h2 className="text-6xl font-bold mb-6 tracking-tight">Join the Web3 Revolution</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of the community that is reshaping the web.
          </p>
          <button className="button-gradient px-10 py-4 rounded-full text-lg font-semibold shadow-lg">
            Join Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
