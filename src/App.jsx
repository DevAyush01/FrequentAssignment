import React from "react";

// Images Import
import bulb from "./assets/bulb.png";
import firstIcon from "./assets/firstIcon.png";
import secondIcon from "./assets/secondIcon.png";
import thirdIcon from "./assets/thirdIcon.png";
import heart from "./assets/heart.png";
import hand from "./assets/hand.png";
import pencil from "./assets/pencil.png";
import handShake from "./assets/handShake.png";
import target from "./assets/target.png";
import FirstPartBg from "./assets/bg.png";
import SecondPartBg from "./assets/bg1.png";

// Icons Import
import { IoArrowForwardCircleSharp } from "react-icons/io5";

export default function App() {
  document.title = "Frequent Task | Home";
  return (
    <>
      {/* first Part  */}
      <div
        className=""
        style={{
          backgroundImage: `url(${FirstPartBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Why Section */}
        <div className="flex  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-18 w-0.5 bg-secondary" />
          <div className="flex flex-col mt-18">
            <div className="w-12 h-0.5 bg-secondary" />
          </div>
          <div className="px-3 py-1 mt-14 font-cookie   border-2 border-secondary rounded-full text-secondary font-semibold italic text-base">
            Why
          </div>
        </div>

        {/* Bulb Section */}
        <div className="flex flex-col sm:flex-row items-center max-w-7xl mx-auto mt-2 px-4 sm:px-6 lg:px-8 gap-2 sm:gap-4">
          <img src={bulb} alt="Bulb" className="h-16" />
          <p className="text-primary text-4xl sm:text-5xl font-playfair font-bold">
            Choose us
          </p>
          <p className="text-2xl sm:text-5xl font-cookie text-gray-400 mt-2 sm:mt-5">
            ...Let's work together
          </p>
        </div>

        {/* Vintage + Hippo Section */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-6 gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl font-bold font-playfair">
              vintage{" "}
              <span className="italic text-gray-400 font-light text-base">
                adj_
              </span>
            </p>
            <p className="font-playfair text-sm sm:text-base">
              of old, recognized and enduring interest, importance or quality:
              classic
            </p>
          </div>

          <div className="flex-1">
            <p className="text-2xl sm:text-3xl font-bold font-playfair">
              hippo <span className="italic text-gray-400 text-base">n_</span>
            </p>
            <p className="text-sm sm:text-base">
              meaning versatile, strong, friendly, assertive, caring, quirky and
              supportive
            </p>
          </div>
        </div>

        {/* Cards Section  */}
        <section className="py-8 px-4 ">
          <div className="max-w-6xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="flex flex-col items-center ">
                <div className="w-52 h-52 border-4 border-secondary rounded-full flex items-center justify-center mb-6">
                  <img
                    src={firstIcon}
                    alt="unique Image"
                    className="w-64 h-64  object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-5xl font-cookie  text-gray-700">
                    Why{" "}
                    <span className="font-playfair font-bold text-3xl text-secondary">
                      We're unique
                    </span>
                  </h3>
                  <span className="w-26 h-1 bg-gray-300"></span>
                  <p className=" text-gray-600 text-sm mt-2 max-w-xs mx-auto">
                    We believe in support, customer service and being available
                    to our clients 24/7. We answer our phones, emails and texts.
                    We're unique that way! We provide our clients with the best
                    service and care.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center">
                <div className="w-52 h-52 border-4 border-green-500 rounded-full flex items-center justify-center mb-6">
                  <img
                    src={secondIcon}
                    alt="Traditional image"
                    className="w-64 h-64  object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-5xl font-cookie  text-gray-700">
                    Why{" "}
                    <span className="font-bold font-playfair text-green-600 text-3xl">
                      We're traditional
                    </span>
                  </h3>
                  <span className="w-26 h-1 bg-gray-300"></span>
                  <p className=" text-gray-600 text-sm mt-2 max-w-xs mx-auto">
                    Our values are traditional, but our approach is not. Our
                    clients are people we want to work with. We enjoy the work
                    we do, the people and businesses we do it with and for. Get
                    in touch…you’ll see the difference.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center">
                <div className="w-52 h-52 border-4 border-red-500 rounded-full flex items-center justify-center mb-6">
                  <img
                    src={thirdIcon}
                    alt="Special image"
                    className="w-64 h-64  object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-5xl font-cookie  text-gray-700">
                    Why{" "}
                    <span className="font-bold font-playfair text-3xl text-red-600">
                      We’re special
                    </span>
                  </h3>
                  <span className="w-26 h-1 bg-gray-300"></span>
                  <p className=" text-gray-600 text-sm mt-2 max-w-xs mx-auto">
                    We enjoy what we do and who we do it with! Our passion is
                    very apparent. Get in touch…you’ll see the difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Button Section  */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6 pb-14 px-4">
          <button className="flex flex-row items-center uppercase justify-center bg-gray-800 text-white py-2 px-6 gap-2 rounded-full text-sm sm:text-base">
            Learn more <IoArrowForwardCircleSharp />
          </button>

          <button className="flex flex-row items-center uppercase justify-center bg-secondary text-white py-2 px-6 gap-2 rounded-full text-sm sm:text-base">
            Contact us <IoArrowForwardCircleSharp />
          </button>
        </div>
      </div>

      {/* Second Part */}
      <div
        className=""
        style={{
          backgroundImage: `url(${SecondPartBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Golden rule section  */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-6 px-4">
          {/* Heart icon */}
          <div className="w-full lg:w-1/5 flex justify-center">
            <img src={heart} alt="Heart Icon" className="w-32 h-32" />
          </div>

          {/* Golden rule */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <p className="text-xl">We live and work by the</p>
            <p className="text-5xl lg:text-6xl text-[#f39c12] font-playfair font-bold">
              GOLDEN RULE
            </p>
            <p className="font-cookie text-3xl lg:text-4xl">
              “Do unto others as you would have them do unto you”
            </p>
          </div>
        </div>

        <span className="block bg-primary h-2 max-w-7xl mx-auto"></span>
        {/* Who Section */}
        <div className="flex  max-w-7xl mx-auto lg:mx-auto ml-4">
          <div className="h-24 w-0.5 bg-secondary" />
          <div className="flex flex-col mt-24">
            <div className="w-12 h-0.5 bg-secondary" />
          </div>
          <div className="px-3 py-1 mt-20 font-cookie  border-2 border-secondary rounded-full text-secondary font-semibold italic text-base">
            Who
          </div>
        </div>

        {/* We Are Section  */}
        <div className="flex flex-col sm:flex-row items-center max-w-7xl mx-auto ">
          <img src={hand} alt="Hand Image" className="h-18" />
          <p className="text-primary text-4xl sm:text-3xl font-playfair font-extrabold">
            We are
          </p>
          <p className="text-2xl ml-2 sm:text-4xl font-cookie text-gray-400 mt-5 sm:mt-3">
            Frequent Research
          </p>
        </div>

        {/* Cards Section  */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="shadow-xl">
    <div className="flex items-center justify-center border-b-2 border-b-gray-200">
      <img src={pencil} alt="Pencil in Hand" className="h-64 object-contain" />
    </div>
    <div className="flex flex-col gap-1 items-center justify-center p-4 text-center">
      <p className="font-cookie text-4xl sm:text-3xl lg:text-5xl">We are a group of...</p>
      <p className="font-abril text-secondary text-3xl sm:text-3xl lg:text-4xl">
        dedicated, creative people
      </p>
      <p className="mt-2 text-sm sm:text-base">
        We love print. We love graphics and design. <br />
        We love our team. Come check us out.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="shadow-xl">
    <div className="flex items-center justify-center border-b-2 border-b-gray-200">
      <img src={handShake} alt="Hand Shake" className="h-64 object-contain" />
    </div>
    <div className="flex flex-col gap-1 items-center justify-center p-4 text-center">
      <p className="font-cookie text-2xl sm:text-4xl lg:text-4xl font-playfair font-extrabold">
        Our
        <span className="text-3xl sm:text-2xl lg:text-4xl ml-2 font-playfair text-green-400 mt-2 sm:mt-0">
          bread & butter
        </span>
      </p>
      <p className="mt-2 text-sm sm:text-base w-full max-w-[280px]">
        Trusted long lasting relationships are the b & b of VHM. We value &
        build relationships with our clients, vendors, friends, family and each
        other. It is important for a healthy & happy work environment.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="shadow-xl">
    <div className="flex items-center justify-center border-b-2 border-b-gray-200">
      <img src={target} alt="Target" className="h-64 object-contain" />
    </div>
    <div className="flex flex-col gap-1 items-center justify-center p-4 text-center">
      <p className="font-cookie text-4xl sm:text-5xl">Got an idea?</p>
      <p className="font-abril text-red-500 text-3xl sm:text-4xl">Let's talk</p>
      <p className="mt-2 text-xs sm:text-sm lg:text-base">
        We know that listening is an invaluable skill. <br />
        We like to listen. Run your ideas by us and <br />
        we'll give you our honest opinion. Call, <br /> email or text.
      </p>
    </div>
  </div>
</div>

      </div>
    </>
  );
}
