import Image from "next/image"
import Link from "next/link"
export default function Features() {
    const features = [
      {
        title: "Bartr Cares",
        description: "Be it loss protection or data security, Bartr is user first always. Check out the latest on responsible trading.",
      },
      {
        title: "Exiting trades is your choice",
        description: "The 'Exit' feature gives the user an opportunity to exit from the current trade and helps in controlling your losses and maximising the profit.",
      },
      {
        title:"Market Orders and Instant Exit",
        description:"Market orders are a fast and reliable method to buy or exit a trade in a fast-moving market. With market orders, quantities are matched almost instantly after placing an order at the best available price. Come test drive."
      },
      {
        title:"The Power of Prediction Markets",
        description:"Check out case studies, research articles and the utility of Bartr events."
      },
    ]
    
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid gap-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white text-black p-8 h-96 flex flex-col justify-between transform hover:-translate-y-1 transition">
          <h2 className="text-3xl font-bold">What's new in Bartr?</h2>
          <Image src="/assets/images/arrow black.png" alt="" width={24} height={24} />
        </article>
        
        {features.slice(0,2).map((feature, index) => (
          <article key={index} className="bg-[#1C1C1C] text-white p-8 h-96 flex flex-col justify-between transform hover:-translate-y-1 transition shadow-lg">
            <div>
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
            <Link href="#" className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2">
              Read more
              <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
            </Link>
          </article>
        ))}
        </div>
        <div className="hidden lg:block md: grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.slice(2,4).map((feature, index) => (
          <article key={index} className="bg-[#1C1C1C] text-white p-8 h-96 flex flex-col justify-between transform hover:-translate-y-1 transition shadow-lg">
            <div>
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
            <Link href="#" className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2">
              Read more
              <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
            </Link>
          </article>
        ))}
      </div>
      </div>
    </section>

    )
  }