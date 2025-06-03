"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 12,
    title: "Divine Timing vs Muhurta: Is There.... ",
    date: "june 03, 2025",
    image: "/images/blog12.png",
    link: "/blog/divine-timing-vs-muhurta",
    desc: "Beyond Calculations — When Destiny Overrules the Clock.....",
  },
  {
    id: 11,
    title: "Why Rahu & Ketu, Though Shadows.... ",
    date: "june 02, 2025",
    image: "/images/blog11.png",
    link: "/blog/why-rahu-ketu-though-shadows",
    desc: "Whether or not we believe in the Doctrine of Karma, truth stands .....",
  },
  {
    id: 10,
    title: "Mystery of the Zodiac Sign.... ",
    date: "April 28, 2025",
    image: "/images/blog10.png",
    link: "/blog/mystery-of-the-zodiac-sign",
    desc: "Beyond Predictions and Ambitions: Libra and the Silent Law of .....",
  },
  {
    id: 9,
    title: "Child Birth — A Spiritual.... ",
    date: "April 17, 2025",
    image: "/images/blog9.png",
    link: "/blog/how-to-predict-child-birth-from-astrology",
    desc: "The topic of childbirth in astrology is both thrilling and deeply.....",
  },
  {
    id: 8,
    title: "Marriage in Astrology.... ",
    date: "April 16, 2025",
    image: "/images/blog8.png",
    link: "/blog/marriage-in-astrology",
    desc: "Marriage marks one of the most important transitions in.....",
  },
  {
    id: 7,
    title: "The Gap Between Hopes and... ",
    date: "April 15, 2025",
    image: "/images/Image-06.png",
    link: "/blog/the-gap-between-hopes-and-reality",
    desc: "You’ve landed at the right place and a positive spot.....",
  },
  {
    id: 6,
    title: "The Divine Logic Behind... ",
    date: "April 14, 2025",
    image: "/images/Image-01 copy.png",
    link: "/blog/the-divine-logic-behind-planetary-dual-rulership",
    desc: "The Zodiac, far from being a mere astrological construct.....",
  },
  {
    id: 5,
    title: "The Special Aspects of Planets... ",
    date: "April 12, 2025",
    image: "/images/Image-01.png",
    link: "/blog/the-special-aspects-of-planets",
    desc: "Across all spiritual traditions, there is one common.....",
  },
  {
    id: 4,
    title: "Rediscovering the Truth Behind... ",
    date: "April 10, 2025",
    image: "/images/Image-07.png",
    link: "/blog/truth-behind-planetary-exaltation-and-debilitation",
    desc: "In the vast and ancient tradition of Vedic Astrology.....",
  },
  {
    id: 1,
    title: "Are Planets Watching Us?... ",
    date: "April 6, 2025",
    image: "/images/blog3.png",
    link: "/blog/are-planets-watching-us",
    desc: " The grand architecture of the Zodiac is deeply fascinating. Unfortunately.....",
  },
  {
    id: 2,
    title: "Can You Change Your Destiny?",
    date: "April 4, 2025",
    image: "/images/blog2.png",
    link: "/blog/can-you-change-your-destiny",
    desc: "Is our fate predetermined, or do we have the power to shape it? Destiny is ....",
  },
  {
    id: 3,
    title: "Don’t Bargain with Planets, Appeal!",
    date: "April 1, 2025",
    image: "/images/blogone.png",
    link: "/blog/dont-bargain-with-planets-appeal",
    desc: " Many seekers believe that they can buy their way out of astrologicalproblems.....",
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
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-start"
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
                  className="text-[24px] blog-heading text-left font-salernomi font-semibold mb-2"
                >
                  {blog.title}
                </Link>

                <p className="text-gray-500 text-left text-[16px] mb-4">
                  {blog.date}
                </p>
                <p className="text-gray-500 text-left  text-[16px] mb-4">
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
