import Image from "next/image"
export default function Trading() {
    const tradingCards = [
        {
          image: "/assets/images/book.avif",
          traders: 49,
          question: "India and the EU to sign a Free Trade Agreement (FTA) by end of March?",
          yesPrice: 0.3,
          noPrice: 0.7,
        },
        {
          image: "/assets/images/shirt1.avif",
          traders: 869,
          question: "Arshdeep Singh to be the highest wicket taker in the 2025 T20I series between India and England?",
          yesPrice: 0.25,
          noPrice: 0.75,
        },
        {
            image: "/assets/images/book.avif",
            traders: 33,
            question: "Rules for Four Labour Codes to be notified and implemented by the Central government by end of June?",
            yesPrice: 0.15,
            noPrice: 0.85,
          },
          {
            image: "/assets/images/shirt1.avif",
            traders: 623,
            question: "Jos Buttler to be the highest run scorer in the 2025 T20I series between India and England?",
            yesPrice: 0.35,
            noPrice: 0.65,
          },
            
      ]
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Trade when you like,<br/>on what you like.
            </h1>
          </div>
          
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {tradingCards.map((card, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition">
                <Image 
                  src={card.image}
                  alt="Trading icon"
                  width={32}
                  height={32}
                  className="mb-2"
                />
                <span className="text-gray-600 text-sm mb-2 block">
                  {card.traders} traders
                </span>
                <p className="text-gray-800 mb-4 text-base">
                  {card.question}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-100 transition">
                    Yes ₹{card.yesPrice}
                  </button>
                  <button className="flex-1 bg-red-50 text-red-600 py-2 px-4 rounded-md hover:bg-red-100 transition">
                    No ₹{card.noPrice}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }