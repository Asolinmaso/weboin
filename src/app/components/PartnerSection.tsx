import Image from 'next/image';

export default function PartnersSection() {
    const partners = [
      { name: 'Airbnb', logo: '/assets/img/airbnb.png' },
      { name: 'Grabyo', logo: '/assets/img/grabyo.png' },
      { name: 'LifeGroups', logo: '/assets/img/Lifegroups.png' },
      { name: 'MYOB', logo: '/assets/img/myob.png' },
      { name: 'Tailus', logo: '/assets/img/tailus.png' },
      { name: 'Microsoft', logo: '/assets/img/microsoft.png' },
      { name: 'COTY', logo: '/assets/img/coty.png' },
      { name: 'Lilly', logo: '/assets/img/lilly.png' },
    ];

    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
            Our Placement Partners
          </h2>
  
          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-20">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={170}
                  height={110}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
  
          <div className="flex justify-center mt-12">
            <button className="bg-lime-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-lime-400 transition-colors">
              and, more companies
            </button>
          </div>
        </div>
      </section>
    )
}
