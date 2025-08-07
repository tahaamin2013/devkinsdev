"use client";

import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  role: string;
  image: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Amin Ahsan",
    role: "CEO & Founder, Accountant",
    image: "/company/team/Amin Ahsan.jpg",
  },
  {
    id: 2,
    name: "Shahnila Amin",
    role: "Director, Digital Marketer",
    image: "/company/team/Shahnila Amin.png",
  },
  {
    id: 3,
    name: "Muhammad Husnain",
    role: "Web Developer, Graphic Designer, App Developer, UI/UX Designer",
    image: "/company/team/Husnain.jpg",
  },
  {
    id: 4,
    name: "Taha Amin",
    role: "Web Developer, Shopify Developer, Video Editor",
    image: "/company/team/Taha Amin.jpg",
  },
];

export default function TeamSection() {
  return (
    <div
      className="w-full mt-[100px] px-6 pb-10 overflow-x-hidden text-gray-900 dark:text-white"
    >
      
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <div className="w-[300px] md:w-[1000px] left-[-100px] mt-[30px] h-[50px] rotate-12 bg-cyan-400/60 dark:bg-cyan-400/60 absolute rounded-full blur-3xl" />

        <h2 className="text-2xl items-center justify-center flex flex-col font-bold md:text-4xl">
          <div className="bg-white dark:bg-white px-1 mb-2 rounded-lg">
            <Image
              src="/devkins_short_logo.svg"
              alt="Devkins Logo"
              width={40}
              height={40}
            />
          </div>
          We bring a wealth of skills and experience <br /> from a wide range of
          backgrounds.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Our philosophy is simple: hire great people and give them the
          resources and support to <br /> do their best work.
        </p>
      </div>
      <div className="mt-16 grid mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="relative flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-cover"
              />
              {/* Overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent bottom-0 flex flex-col justify-end text-white p-4">
                <p className="text-lg font-semibold">{partner.name}</p>
                <p className="text-sm">{partner.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}