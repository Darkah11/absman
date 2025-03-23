"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <nav className=" absolute top-0 z-50 px-5 py-3 flex justify-between w-full items-center">
        <Link href={"/"}>
          <img src="/absman-logo.png" alt="" className=" w-16 rotating" />
        </Link>
        <div className=" flex items-center justify-center gap-x-2">
          <Link href={"/"}>
            <button className=" hover:bg-black w-8 bg-white p-2 rounded-full border-2 border-lightRed ">
              <img src="/tel.svg" alt="" />
            </button>
          </Link>
          <Link href={"/"}>
            <button className=" hover:bg-black w-8 bg-white p-2 rounded-full border-2 border-lightRed">
              <img src="/xtwitter.svg" alt="" />
            </button>
          </Link>
          <Link href={"/"}>
            <button className=" hover:bg-black w-8 bg-white p-2 rounded-full border-2 border-lightRed">
              <img src="/instagram.svg" alt="" />
            </button>
          </Link>
          {/* <Link href={"/"}>
            <button className="  bg-white text-lightRed font-bold w-[80px] py-2 rounded-md uppercase text-sm">
              Buy
            </button>
          </Link> */}
        </div>
      </nav>
      <section className=" relative text-white px-5 py-16 pt-32 pb-40 ">
        <div className=" absolute w-full h-full top-0 left-0">
          <div className=" absolute w-full bg-black  h-full opacity-50" />
          <img
            src="/absman-bg.jpg"
            alt="absman background image"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" relative">
          <div className=" text-center">
            <h1 className=" text-lightGreen text-transparent font-bold text-6xl">
              ABSMAN
            </h1>
            <div className=" mt-3">
              <img
                src="/absman.jpeg"
                alt="absman"
                className=" mx-auto rounded-lg max-w-[240px]"
              />
            </div>
            <p className=" mt-10">
              In a world where trust is a rare commodity and chaos reigns,
              Absman rises from the shadows —a relentless force protecting the
              Abstract blockchain from the villains who would see it burn .
            </p>
            <div className=" flex items-center justify-center gap-x-3 mt-5">
              <button className=" bg-lightGreen font-bold w-[180px] py-4 rounded-full uppercase text-sm btn">
                Buy Now
              </button>
            </div>
          </div>
          {/* <div className=" mt-10">
            <img
              src="/absman.jpeg"
              alt="absman"
              className=" mx-auto rounded-lg"
            />
          </div> */}
        </div>
      </section>
      <section className=" bg-lightGreen px-5 py-16 text-white relative">
        <div className=" px-3 py-3 text-black bg-white border-4 border-lightRed h-[170px] rounded-2xl relative -top-[72px] -mt-[72px] flex flex-col justify-center items-center gap-y-3">
          <h3 className=" text-center text-2xl font-medium">Token Address</h3>
          <div className=" border-2 border-black py-3 px-2 rounded-full">
            <p className=" text-xs font-medium">
              0x532f27101965dd16442E59d40670FaF5eBB142E4
            </p>
          </div>
          <button className=" flex items-center gap-1 justify-center text-sm uppercase w-[100px] bg-lightRed text-white py-2 rounded-full">
            <p>copy</p>
            <img src="/copy.png" alt="" className=" w-6" />
          </button>
        </div>

        <h2 className=" uppercase text-center text-white text-5xl abt relative w-fit mx-auto">
          About
        </h2>
        <div className=" mt-10">
          <div className=" border p-3 rounded-md">
            <img src="about.jpeg" alt="about image" className=" rounded-md" />
          </div>
          <div className=" mt-5 about-text text-lg">
            <p>
              Once a brilliant developer, he was betrayed by the very system he
              sought to safeguard. A catastrophic breach fused him with the
              Abstract code, turning him into something more—a silent sentinel
              for a digital age. The Ruggers, merciless thieves of the crypto
              world, thrive in the dark corners of the decentralized web. They
              exploit, they destroy, leaving only ruin in their wake. But Absman
              fights back, not as a hero, but as a necessary evil.
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <div className=" border p-3 rounded-md">
            <img src="about-2.jpg" alt="about image" className=" rounded-md" />
          </div>
          <div className=" mt-5 about-text text-lg">
            <p>
              He strikes from the void, dismantling their schemes with cold
              precision, leaving nothing but fear in his wake. He doesn’t wear
              the Abstract logo as a symbol of hope—it’s a warning. To the
              criminals lurking in the code, to those who prey on the innocent,
              it means one thing: Your time is running out. Absman knows the
              truth: In this world, there are no second chances. Only the strong
              survive, and the strong do what’s necessary. He will protect the
              network—no matter the cost.
            </p>
          </div>
        </div>
      </section>
      <section className=" text-darkGreen  px-5 py-16  relative">
        <h2 className=" text-center text-4xl  uppercase">Tokenimics</h2>
        <div className=" mt-10 flex flex-col gap-y-5">
          <div className=" relative flex justify-center items-center">
            <img src="/frame.png" alt="" />
            <div className=" text-center absolute top-0 left-0 bottom-0 right-0 m-auto w-fit h-fit">
              <h3 className=" uppercase text-xl font-bold text-lightRed">
                Locked liquidity
              </h3>
              <p className=" text-darkGreen capitalize font-medium mt-1">
                273 million tokens
              </p>
            </div>
          </div>
          <div className=" relative flex justify-center items-center">
            <img src="/frame.png" alt="" />
            <div className=" text-center absolute top-0 left-0 bottom-0 right-0 m-auto max-w-[200px] h-fit ">
              <h3 className=" uppercase text-xl font-bold text-lightRed">
                Donated to liquidity pool
              </h3>
              <p className=" text-darkGreen capitalize font-medium mt-1">
                113 million tokens
              </p>
            </div>
          </div>
          <div className=" relative flex justify-center items-center">
            <img src="/frame.png" alt="" />
            <div className=" text-center absolute top-0 left-0 bottom-0 right-0 m-auto w-fit h-fit">
              <h3 className=" uppercase text-xl font-bold text-lightRed">
                Tax
              </h3>
              <p className=" text-darkGreen capitalize font-medium mt-1">0%</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-darkGreen px-5 py-16 pb-24  relative text-white">
        <h2 className=" text-center text-4xl  uppercase">How To Buy?</h2>
        <div className=" mt-10">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className={" relative"}
            forceRenderTabPanel={false}
          >
            <TabList
              className={[
                ` absolute -bottom-16 left-0 z-50 gap-x-3 flex items-center
                 justify-center w-full`,
              ]}
            >
              <Tab
                className={[
                  " outline-none cursor-pointer w-[50px] h-[50px] border-2 border-white flex justify-center items-center rounded-full",
                  tabIndex == 0 ? " bg-white text-darkGreen" : "",
                ]}
              >
                <p className=" text-xl font-semibold">1</p>
              </Tab>
              <Tab
                className={[
                  " outline-none cursor-pointer w-[50px] h-[50px] border-2 border-white flex justify-center items-center rounded-full",
                  tabIndex == 1 ? " bg-white text-darkGreen" : "",
                ]}
              >
                <p className=" text-xl font-semibold">2</p>
              </Tab>
              <Tab
                className={[
                  " outline-none cursor-pointer w-[50px] h-[50px] border-2 border-white flex justify-center items-center rounded-full",
                  tabIndex == 2 ? " bg-white text-darkGreen" : "",
                ]}
              >
                <p className=" text-xl font-semibold">3</p>
              </Tab>
              <Tab
                className={[
                  " outline-none cursor-pointer w-[50px] h-[50px] border-2 border-white flex justify-center items-center rounded-full",
                  tabIndex == 3 ? " bg-white text-darkGreen" : "",
                ]}
              >
                <p className=" text-xl font-semibold">4</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div
                className={
                  " bg-white text-darkGreen py-8 pb-16 px-5 rounded-2xl relative"
                }
              >
                <h2 className=" text-2xl font-medium">
                  CHOOSE A CRYPTO-CURRENCY EXCHANGE:
                </h2>
                <p className=" text-gray-600 mt-3">
                  Select a reputable exchange known for its security measures,
                  user-friendly interface, and support for your specific
                  cryptocurrency. Consider factors such as trading fees,
                  available trading pairs, and customer support options to
                  ensure the exchange meets your needs.
                </p>
                <h3 className=" text-lightRed absolute bottom-5 right-5 text-3xl font-bold">
                  01
                </h3>
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className={
                  " bg-white text-darkGreen py-8 pb-16 px-5 rounded-2xl relative"
                }
              >
                <h2 className=" text-2xl font-medium">SIGN UP AND VERIFY:</h2>
                <p className=" text-gray-600 mt-3">
                  Register for an account on the chosen exchange by providing
                  basic information such as your name, email address, and
                  password. Complete any required verification steps, which may
                  include providing identification documents and proof of
                  address. This verification process helps ensure compliance
                  with regulations and enhances account security.
                </p>
                <h3 className=" text-lightRed absolute bottom-5 right-5 text-3xl font-bold">
                  02
                </h3>
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className={
                  " bg-white text-darkGreen py-8 pb-16 px-5 rounded-2xl relative"
                }
              >
                <h2 className=" text-2xl font-medium">DEPOSIT FUNDS:</h2>
                <p className=" text-gray-600 mt-3">
                  Once your account is set up, deposit funds into it using one
                  of the supported payment methods. This can include bank
                  transfers, credit/debit cards, or other payment options
                  offered by the exchange. Follow the instructions provided by
                  the exchange to complete the deposit process, and be aware of
                  any associated fees or processing times.
                </p>
                <h3 className=" text-lightRed absolute bottom-5 right-5 text-3xl font-bold">
                  03
                </h3>
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className={
                  " bg-white text-darkGreen py-8 pb-16 px-5 rounded-2xl relative transition-all"
                }
              >
                <h2 className=" text-2xl font-medium">PLACE YOUR ORDER:</h2>
                <p className=" text-gray-600 mt-3">
                  Navigate to the exchange's trading section and locate the
                  trading pair for your cryptocurrency and dollars (e.g.,
                  MEME/USD). Choose whether to place a market order, which
                  executes immediately at the current market price, or a limit
                  order, where you specify the price at which you want to buy.
                  Enter the amount of cryptocurrency you wish to purchase and
                  review the order details before confirming.
                </p>
                <h3 className=" text-lightRed absolute bottom-5 right-5 text-3xl font-bold">
                  04
                </h3>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <footer className=" bg-black py-16 text-white">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className=" flex flex-col justify-center items-center"
        >
          <img src="absman-logo.png" alt="" className=" w-28" />
          
          <div className=" flex items-center justify-center gap-x-3 mt-5">
            <button className=" bg-lightGreen font-bold w-[180px] py-4 rounded-full uppercase text-sm btn">
              Buy Now
            </button>
          </div>

          <div className=" flex items-center justify-center gap-x-2 mt-10">
            <Link href={"/"}>
              <button className=" hover:bg-black w-8 bg-white p-2 rounded-full ">
                <img src="/tel.svg" alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button className=" hover:bg-black w-8 bg-white p-2 rounded-full ">
                <img src="/xtwitter.svg" alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button className=" hover:bg-black w-8 bg-white p-2 rounded-full">
                <img src="/instagram.svg" alt="" />
              </button>
            </Link>
            {/* <Link href={"/"}>
            <button className="  bg-white text-lightRed font-bold w-[80px] py-2 rounded-md uppercase text-sm">
              Buy
            </button>
          </Link> */}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className=" mt-10"
        >
          <div className=" flex gap-x-3 items-center justify-center">
            <Link href={"https://t.me/absolutecinemaABS"}>
              <img src="/telegram.svg" alt="" />
            </Link>
            <Link href={"https://x.com/absolutecineABS"}>
              <img src="/x.svg" alt="" />
            </Link>
          </div>
          <p className=" text-center text-sm mt-3">
            &copy; 2025 ABSMAN. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </>
  );
}
