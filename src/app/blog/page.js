"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Don’t Bargain with Planets, Appeal!",
    date: "April 1, 2025",
    image: "/images/blogone.png",
    link: "/blog/dont-bargain-with-planets-appeal",
    desc: " Many seekers believe that they can buy their way out of astrologicalproblems.",
  },
  // {
  //   id: 2,
  //   title: "Invest In Your Skin, Not Just Products",
  //   date: "March 5, 2025",
  //   image: "/images/blog2.jpg",
  //   link: "/blog/invest-in-your-skin",
  // },
  // {
  //   id: 3,
  //   title: "Medical vs Regular Facials: A Guide to Skin Care",
  //   date: "March 5, 2025",
  //   image: "/images/blog3.jpg",
  //   link: "/blog/medical-vs-regular-facials",
  // },
];

export default function BlogSection() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-[48px] font-salernomi font-semibold mb-8">
        Explore our blogs to learn more
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-start items-start"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex items-start  flex-col">
                <Link
                  href={blog.link}
                  className="text-[24px] text-left font-salernomi font-semibold mb-2"
                >
                  {blog.title}
                </Link>

                <p className="text-gray-500 text-left text-sm mb-4">
                  {blog.date}
                </p>
                <p className="text-gray-500 text-left text-sm mb-4">
                  {blog.desc}
                </p>
                <Link
                  href={blog.link}
                  className="bg-[#101010] w-full text-[16px] font-salernomi text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
