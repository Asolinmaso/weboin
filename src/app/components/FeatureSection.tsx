import Image from 'next/image'

export default function FeaturesSection() {
    return (
      <section className="text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Headings */}
          <div className="mb-10 max-w-xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wide font-semibold text-[#7DD3FCFF]">
              Open Source Theme and UI Components
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Geaux Astro helps you craft beautiful websites efficiently
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-8 md:col-span-1">
              <div className="flex items-start space-x-4">
                <div className="text-lime-400">
                  <Image src="/assets/img/medal.svg" alt="Icon 1" width={32} height={32} />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">Certificate Distribution</h3>
                  <p className="text-gray-300">
                    We offer certificates to validate and recognize your achievement.
                  </p>
                </div>
              </div>
  
              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="text-lime-400">
                <Image src="/assets/img/thought.png" alt="Icon 1" width={32} height={32} />

                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Knowledge</h3>
                  <p className="text-gray-300">
                    We deliver transformative knowledge that empowers and inspires.
                  </p>
                </div>
              </div>
  
              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="text-lime-400">
                <Image src="/assets/img/training.png" alt="Icon 1" width={32} height={32} />

                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Hands-on Experience</h3>
                  <p className="text-gray-300">
                    We provide hands-on experience for real-world learning. 
                    You learn best by doing.
                  </p>
                </div>
              </div>
            </div>
  
            <div className="flex justify-center md:col-span-2">
              <img
                src="/assets/img/AboutDashboard.png"
                alt="Graphboard UI"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
