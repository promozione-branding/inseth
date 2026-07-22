"use client";

import { FiAward, FiUsers, FiMapPin } from "react-icons/fi";
import { BsGear, BsTools } from "react-icons/bs";

const stats = [
  {
    number: "25+",
    title: "Years Experience",
    icon: <FiAward />,
  },
  {
    number: "5000+",
    title: "Installations",
    icon: <BsGear />,
  },
  {
    number: "1000+",
    title: "Happy Clients",
    icon: <FiUsers />,
  },
  {
    number: "Pan India",
    title: "Supply Network",
    icon: <FiMapPin />,
  },
  {
    number: "Technical",
    title: "Support",
    icon: <BsTools />,
  },
];

export default function SustainabilityStrip() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full ">
        <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-4 p-7 ${
                  index !== stats.length - 1
                    ? "lg:border-r border-gray-200"
                    : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl text-[#ff8c1a]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#ff8c1a]">
                    {item.number}
                  </h3>

                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}