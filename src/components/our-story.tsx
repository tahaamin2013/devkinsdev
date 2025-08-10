import Image from "next/image"
import { ArrowDownRight } from "lucide-react"

export default function OurStory() {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Profiles and Circular Text */}
        <div className=" flex items-center lg:items-start gap-8">
          <div >
            <Image
              src="/company/team/Taha Amin.png"
              alt="Orest Bolonnyy"
              width={1100}
              height={1100}
              className="w-[300px] h-[340px] object-cover bg-gradient-to-r from-[#d8eff2] to-[#d8eff2] transform -scale-x-100"
            />
            <div className="mt-4 text-center lg:text-left">
              <h3 className="text-xl font-bold">Taha Amin</h3>
              <p className="text-[#00B8DB] text-sm">God of Development</p>
            </div>
          </div>

          <div className="mt-[100px]">
            <Image
              src="/images/Amin.png"
              alt="Nazariy Teplyy"
              width={200}
              height={300}
              className="w-[300px] h-[340px] object-cover  bg-gradient-to-r from-[#d8eff2] to-[#d8eff2]
    "
            />
            <div className="mt-4 text-center lg:text-left">
              <h3 className="text-xl font-bold">Amin Ahsan</h3>
              <p className="text-[#00B8DB] text-sm">Owner & Founder</p>
            </div>
          </div>
        </div>

        {/* Right Column: Our Story */}
        <div className="space-y-6 dark:text-white text-gray-700">
          <h2 className="text-4xl font-bold flex items-center gap-2 dark:text-white text-gray-900">
            Our story <ArrowDownRight className="w-8 h-8 text-[#00B8DB]" />
          </h2>
          <p>
            What started as a vision to provide reliable transportation services has evolved into a thriving business
            built on trust, long-lasting relationships, and a commitment to excellence. Many of our partners have worked
            with us for years, relying on our dedication to meet their logistics needs. Our company continues to grow,
            expanding both our fleet and the services we offer.
          </p>
          <div className="border-l-4 border-[#00B8DB] pl-4 py-1">
            <p className="font-semibold dark:text-white text-gray-800">
              As we evolve, we remain committed to doing things the right way – prioritizing people, adhering to all
              regulations, and ensuring every step is handled with care and professionalism.
            </p>
          </div>
          <p>
            At N-Trans, reputation matters. It&apos;s not just about delivering goods – it&apos;s about delivering
            trust, every time. We look forward to driving new opportunities and continuing to build strong partnerships
            for years to come.
          </p>
        </div>
      </div>
    </section>
  )
}
