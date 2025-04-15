import Image from "next/image";
import React from "react";
import img from "./assets/unnamed.png";
import img2 from "./assets/unnamed (1).png";
import img3 from "./assets/unnamed (2).png";
import img4 from "./assets/unnamed (3).png";
import img5 from "./assets/unnamed (4).png";
import Link from "next/link";
import Head from "next/head";

const AstrologyComponent = () => {
  return (
    <>
      <Head>
        <title> Don’t Bargain with Planets, Appeal! - Blog</title>
        <meta
          name="description"
          content="Learn why planets respond to sincere appeals, not bargains. Discover
instant answers to your burning questions with divine Prashna Kundali at
Prashnasiddhi.com — starting at ₹199."
        />
        <meta
          property="og:title"
          content="Don’t Bargain with Planets – Appeal Gracefully through Prashna Astrology"
        />

        <meta
          property="og:description"
          content="Learn why planets respond to sincere appeals, not bargains. Discover
instant answers to your burning questions with divine Prashna Kundali at
Prashnasiddhi.com — starting at ₹199."
        />
        <meta property="og:image" content="/images/blogone.png" />
        <meta
          property="og:url"
          content={`https://prashnasiddhi.com/blog/dont-bargain-with-planets-appeal`}
        />
      </Head>
      <div className="max-w-6xl mx-auto p-6 bg-white shadowg rounded-lg">
        <div
          className=" top-0 left-0 w-full h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/blogone.png')" }}
        >
          <div className="w-full h-full bg-[#0000005d] bg-opacity-50 flex items-center justify-center">
            <h1 className="text-[48px] font-salernomi font-bold text-white">
              Don’t Bargain with Planets, Appeal!
            </h1>
          </div>
        </div>

        <section className="my-20 text-[20px]">
          <h2 className="text-[32px] text-center font-semibold font-salernomi mt-3">
            The Common Misconception
          </h2>
          <p className="mt-2 text-gray-700 font-poppins text-center">
            Many seekers believe that they can buy their way out of astrological
            problems. Donations, rituals, and elaborate remedies are often
            marketed as guaranteed solutions. But astrology is not a
            marketplace. It is a divine science rooted in Karma and Grace.
          </p>
        </section>

        <section className="my-20 text-[20px]">
          <h2 className="text-[32px] text-center mb-10 font-semibold font-salernomi mt-3">
            Why Bargaining Doesn’t Work in Astrology
          </h2>
          <div className="flex gap-4 items-center max-md:flex-wrap ">
            <div className="w-[100%]">
              <Image
                className="w-[90%]"
                src={img}
                alt="Prashna Kundali diagram showing instant astrology without birth
details"
              />
            </div>
            <div className="w-[100%]">
              <p className="mt-2 text-gray-700">
                The planets are not vendors. They are divine agents reflecting
                your past actions and current karmic situation. Bargaining
                implies a transaction, but the real path is through appeal,
                humility, and acceptance.{" "}
                <span className="text-[#111] font-semibold">
                  Remedies work not by force, but by invoking grace and aligning
                  with cosmic laws.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="my-20 text-[20px]">
          <h2 className="text-[32px] text-center mb-10 font-semibold font-salernomi mt-3">
            What is Vedic Prashna Astrology or Prashna Kundali?
          </h2>
          <div className="flex gap-10 items-center max-md:flex-wrap ">
            <p className="mt-2 text-gray-700">
              Prashna Shastra is a powerful branch of Vedic Astrology that gives
              precise answers to pressing questions without even requiring birth
              details. It works on the principle that the moment a question
              arises is cosmically significant and carries the answer.
            </p>
            <Image
              className="w-[100%]"
              src={img2}
              alt="Vedic Prashna Kundali birth chart illustration"
            />
          </div>
        </section>

        <section className="my-20 text-[20px]">
          <h2 className="text-[32px]  text-center mb-10 font-semibold font-salernomi mt-3">
            Divine Grace vs. Material Remedies
          </h2>
          <div className="flex gap-10 items-center max-md:flex-wrap ">
            <Image
              className="w-[100%]"
              src={img3}
              alt="Devotee praying to Navagrahas seeking divine guidance"
            />
            <p className="mt-2 text-gray-700">
              No ritual or gemstone can change your karmic pattern unless grace
              permits. True remedies are internal — sincerity, good conduct,
              prayer, and appeal. The planets listen when the seeker is genuine,
              not transactional.
            </p>
          </div>
        </section>

        <section className="my-20 text-[20px]">
          <h2 className="text-[32px] text-center mb-10 font-semibold font-salernomi mt-3">
            Real-Life Insights{" "}
          </h2>
          <div className="flex gap-10 items-center max-md:flex-wrap ">
            <p className="mt-2 text-gray-700">
              Many clients of Prashnasiddhi.com have experienced the power of
              sincere appeal. Without costly remedies, they have found timely
              guidance and clarity. What works is not bargaining but opening
              oneself to divine insight.{" "}
            </p>
            <Image
              className="w-[100%]"
              src={img4}
              alt="Screenshot of Prashnasiddhi.com affordable consultation page"
            />
          </div>
        </section>

        {/* <section className="mb-6">
          <h2 className="text-[24px] font-semibold font-salernomi mt-3">
            Real-Life Insights
          </h2>
          <p className="mt-2 text-gray-700">
            Many clients of Prashnasiddhi.com have experienced the power of
            sincere appeal. Without costly remedies, they have found timely
            guidance and clarity. What works is not bargaining but opening
            oneself to divine insight.
          </p>
        </section> */}

        <section className="my-20 text-[20px]">
          <h2 className="text-[32px]  text-center mb-10 font-semibold font-salernomi mt-3">
            How{" "}
            <Link className="underline text-blue-700" href="/">
              Prashnasiddhi.com
            </Link>{" "}
            Helps You
          </h2>
          <div className="flex gap-10 items-center max-md:flex-wrap ">
            <Image loading="lazy" className="w-[100%]" src={img5} alt="l" />
            <p className="mt-2 text-gray-700">
              At Prashnasiddhi.com, you receive authentic Prashna Kundali-based
              guidance within minutes. Whether it is a burning question about
              career, health, or relationships, you get answers that are
              practical, divine-inspired, and remedy-free unless truly
              warranted.
            </p>
          </div>
        </section>

        {/* <section className="mb-6">
          <h2 className="text-[24px] font-semibold font-salernomi mt-3">
            How Prashnasiddhi.com Helps You
          </h2>
          <p className="mt-2 text-gray-700">
            At Prashnasiddhi.com, you receive authentic Prashna Kundali-based
            guidance within minutes. Whether it is a burning question about
            career, health, or relationships, you get answers that are
            practical, divine-inspired, and remedy-free unless truly warranted.
          </p>
        </section> */}

        <section className="my-20 text-[20px]">
          <h2 className="text-[32px] text-center font-semibold font-salernomi mt-3">
            Conclusion
          </h2>

          <li className=" text-[20px] list-disc">Don’t bargain with planet</li>
          <p className="mt-2 text-gray-700">
            So and so planet in so and so house and you ought to have got …xyz
            results and you were confident of this and why it happened like this
            etc.
          </p>
          <li className=" text-[20px] list-disc">Appeal to them </li>
          <p className="mt-2 text-gray-700">
            Prayer - Make your mind pure by following the best moral code of
            conduct. Let no bad thoughts cross your mind at any time. Practice
            meditation.
          </p>
          <li className=" text-[20px] list-disc">Seek guidance </li>
          <p className="mt-2 text-gray-700">
            Understand your situation – let the logic you find as absolutely
            right and you “should have got it any cost” be low, and instead pray
            for Divine grace.
          </p>
        </section>
      </div>
    </>
  );
};

export default AstrologyComponent;
