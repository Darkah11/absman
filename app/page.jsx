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
      <nav className=" nav border-4 border-darkGreen bg-white rounded-full fixed top-5 z-50 px-5 py-3 flex justify-between w-[350px] md:w-[550px] left-0 right-0 mx-auto items-center">
        <Link href={"/"}>
          <img
            src="/absman-logo.png"
            alt=""
            className=" w-16 lg:w-20 rotating"
          />
        </Link>

        <div className=" flex items-center justify-center gap-x-2">
          <Link href={"/"}>
            <button className=" w-8 ">
              <img src="/tel.png" alt="" />
            </button>
          </Link>
          <Link href={"/"}>
            <button className=" w-8 ">
              <img src="/xtwitter.png" alt="" />
            </button>
          </Link>
          <button className=" text-white bg-lightGreen font-bold w-[100px] py-3 rounded-full uppercase text-sm btn ">
            Buy
          </button>
          {/* <Link href={"/"}>
            <button className=" w-10">
              <img src="/instagram.svg" alt="" />
            </button>
          </Link> */}
        </div>
      </nav>
      <section className=" relative text-white px-5 py-16 lg:px-12 pt-32 md:pt-44 pb-52 ">
        <div className=" absolute w-full h-full top-0 left-0">
          <div className=" absolute w-full bg-black  h-full opacity-50" />
          <img
            src="/absman-bg.jpg"
            alt="absman background image"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" relative ">
          <div className=" text-center ">
            <p>INTRODUCING</p>
            <h1 className=" text-lightGreen text-transparent font-bold text-6xl lg:text-[120px]">
              ABSMAN
            </h1>
            {/* <div className=" mt-3 md:hidden">
              <img
                src="/absman.jpeg"
                alt="absman"
                className=" mx-auto rounded-lg max-w-[240px]"
              />
            </div> */}
            <p className=" mt-4 max-w-[450px] md:mt-3 mx-auto lg:max-w-[1000px]  lg:text-lg">
              Absman rises from the shadows —a relentless force protecting the
              Abstract blockchain .
            </p>
            <div className=" flex items-center justify-center gap-x-3 mt-5">
              <button className=" bg-lightGreen font-bold w-[140px] py-4 rounded-full uppercase text-sm btn">
                Buy
              </button>
            </div>
          </div>
          <div className="  mt-10 w-[280px] lg:w-[350px] mx-auto">
            <img
              src="/hero.JPG"
              alt="absman"
              className=" mx-auto rounded-lg "
            />
          </div>
        </div>
      </section>
      <section className=" bg-lightGreen px-5 py-16 md:px-12 xl:px-24 text-white relative">
        <div className=" text-black bg-white border-4 overflow-hidden border-lightRed h-[230px] mx-auto max-w-[500px] rounded-2xl relative -top-[115px] -mt-[72px]  gap-y-3">
          <div className=" cursor-pointer text-white text-[10px] md:text-base bg-lightGreen flex items-center justify-center gap-1 py-2 border-b-4 border-lightRed ">
            <div className=" flex items-center">
              <img src="/copy.png" alt="" className=" w-4" />
              <p>Token address:</p>
            </div>
            <p>{""}0x532f27101965dd16442E59d40670FaF5e</p>
          </div>
          <div className=" px-5  md:items-center h-fit md:py-7 py-3 md:flex md:flex-col md:justify-center">
            <h3 className=" text-5xl md:text-center font-medium uppercase text-darkGreen">
              Coming <br className=" md:hidden" />
              Soon!!!
            </h3>

            <button className=" mx-auto mt-3 text-white bg-lightGreen font-bold w-[100px] py-3 rounded-full uppercase text-sm btn ">
              Buy
            </button>
          </div>
        </div>

        <h2 className=" uppercase text-white text-5xl relative text-center md:text-6xl lg:text-7xl xl:text-8xl">
          What is <br className=" md:hidden" />
          This About?
        </h2>
        <div className=" border-[3px] xl:mx-auto border-black xl:border-0 mx-auto max-w-[390px] md:max-w-full xl:max-w-fit md:mx-0 rounded-[40px] overflow-hidden mt-10">
          <div className=" px-5 py-7 bg-white xl:hidden">
            <h3 className=" uppercase text-darkGreen text-4xl md:text-5xl  font-medium">
              Origins of <br className=" hidden md:block" /> absman
            </h3>
          </div>
          <div className=" md:flex xl:items-center">
            <div className=" hidden xl:block w-[400px] h-[570px] border-y-4 border-l-4 border-black rounded-l-[40px] px-5 py-40 bg-white">
              <h3 className=" uppercase text-darkGreen text-6xl text-center">
                Origins of <br /> absman
              </h3>
            </div>
            <div className=" md:max-w-[50%] xl:max-w-[400px] bg-darkGreen px-5 py-8 flex flex-col gap-y-5 border-t-[3px] xl:border-4 xl:rounded-[40px] border-black xl:py-12 xl:text-lg">
              <p>
                Once a brilliant developer, he was betrayed by the very system
                he sought to safeguard. A catastrophic breach fused him with the
                Abstract code, turning him into something more—a silent sentinel
                for a digital age. The Ruggers, merciless thieves of the crypto
                world, thrive in the dark corners of the decentralized web.
              </p>
              <p>
                They exploit, they destroy, leaving only ruin in their wake. But
                Absman fights back, not as a hero, but as a necessary evil. He
                strikes from the void, dismantling their schemes with cold
                precision, leaving nothing but fear in his wake.
              </p>
              <p>
                He doesn’t wear the Abstract logo as a symbol of hope—it’s a
                warning. To the criminals lurking in the code, to those who prey
                on the innocent, it means one thing: Your time is running out.
                Absman knows the truth: In this world, there are no second
                chances. Only the strong survive, and the strong do what’s
                necessary. He will protect the network—no matter the cost.
              </p>
            </div>
            <div className=" border-t-[3px]  xl:w-[400px] xl:h-[570px] xl:border-y-4 xl:border-r-4 border-black xl:rounded-r-[40px] overflow-hidden">
              <img
                src="absman.jpeg"
                alt=""
                className=" md:h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className=" mt-10 md:flex md:gap-x-10 md:items-center md:justify-between lg:gap-x-16 lg:justify-center">
          <div className=" border p-3 rounded-md max-w-[350px] mx-auto md:max-w-[40%] lg:max-w-[320px] md:mx-0">
            <img src="about.jpeg" alt="about image" className=" rounded-md" />
          </div>
          <div className=" mt-5 md:mt-0 about-text text-lg max-w-[500px] mx-auto md:mx-0 md:max-w-[60%] lg:max-w-[500px]">
            <p>
              Once a brilliant developer, he was betrayed by the very system he
              sought to safeguard. A catastrophic breach fused him with the
              Abstract code, turning him into something more—a silent sentinel
              for a digital age. The Ruggers, merciless thieves of the crypto
              world, thrive in the dark corners of the decentralized web.
            </p>
          </div>
        </div>
        <div className=" mt-10 md:flex md:gap-x-10 md:items-center md:justify-between lg:gap-x-16 lg:justify-center">
          <div className=" order-2 border p-3 rounded-md max-w-[350px] mx-auto md:max-w-[40%] lg:max-w-[320px] md:mx-0">
            <img src="about-2.jpg" alt="about image" className=" rounded-md" />
          </div>
          <div className=" order-1 mt-5 md:mt-0 about-text text-lg max-w-[500px] mx-auto md:mx-0 md:max-w-[60%] lg:max-w-[500px]">
            <p>
              They exploit, they destroy, leaving only ruin in their wake. But
              Absman fights back, not as a hero, but as a necessary evil. He
              strikes from the void, dismantling their schemes with cold
              precision, leaving nothing but fear in his wake.
            </p>
          </div>
        </div>
        <div className=" mt-10 md:flex md:gap-x-10 md:items-center md:justify-between lg:gap-x-16 lg:justify-center">
          <div className="  border p-3 rounded-md max-w-[350px] mx-auto md:max-w-[40%] lg:max-w-[320px] md:mx-0">
            <img src="save.jpg" alt="about image" className=" rounded-md" />
          </div>
          <div className=" mt-5 md:mt-0 about-text text-lg max-w-[500px] mx-auto md:mx-0 md:max-w-[60%] lg:max-w-[500px]">
            <p>
              He doesn’t wear the Abstract logo as a symbol of hope—it’s a
              warning. To the criminals lurking in the code, to those who prey
              on the innocent, it means one thing: Your time is running out.
              Absman knows the truth: In this world, there are no second
              chances. Only the strong survive, and the strong do what’s
              necessary. He will protect the network—no matter the cost.
            </p>
          </div>
        </div> */}
      </section>
      <section className=" bg-darkGreen px-5 py-16 md:px-12 xl:px-24 text-white relative">
        <div className=" text-center">
          <p>We got really</p>
          <h2 className=" lg:text-6xl mt-2 text-lightGreen uppercase text-center  text-5xl  relative w-fit mx-auto">
            Strong foundation
          </h2>
        </div>

        <div className=" mt-12 flex flex-col md:flex-row md:justify-between xl:gap-x-16 xl:justify-center gap-y-12">
          <div className=" rounded-2xl max-w-[350px] mx-auto md:max-w-[32%] md:mx-0 xl:max-w-[320px]">
            <div className=" bg-white px-5 pt-10 rounded-t-full overflow-hidden h-[330px] flex justify-center items-center ">
              <img src="partners.jpg" className=" w-full" alt="" />
            </div>
            <div className=" mt-8">
              <h3 className=" text-lightGreen font-semibold text-2xl">
                Strategic Partnerships
              </h3>
              <p className=" mt-3">
                Absman has forged strategic partnerships with leading players in
                the cryptocurrency industry, as well as with key influencers and
                platforms in the community.
              </p>
            </div>
          </div>
          <div className=" rounded-2xl max-w-[350px] mx-auto md:max-w-[32%] md:mx-0 xl:max-w-[320px]">
            <div className=" bg-white px-5 pt-10 rounded-t-full overflow-hidden h-[330px] flex justify-center items-center ">
              <img src="community.jpg" className=" w-full" alt="" />
            </div>
            <div className=" mt-8">
              <h3 className=" text-lightGreen font-semibold text-2xl">
                Community Support
              </h3>
              <p className=" mt-3">
                Through active engagement, open communication, and collaborative
                initiatives, Absman fosters a strong sense of community spirit
                among its members.
              </p>
            </div>
          </div>
          <div className=" rounded-2xl max-w-[350px] mx-auto md:max-w-[32%] md:mx-0 xl:max-w-[320px]">
            <div className=" bg-white px-5 pt-10 rounded-t-full overflow-hidden h-[330px] flex justify-center items-center ">
              <img src="ecosystem.png" className=" w-full" alt="" />
            </div>
            <div className=" mt-8">
              <h3 className=" text-lightGreen font-semibold text-2xl">
                Growing Ecosystem
              </h3>
              <p className=" mt-3">
                With a growing network of users, developers, and investors,
                Absman offers unparalleled opportunities for collaboration,
                networking, and mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white text-darkGreen  px-5 py-16 md:px-12 xl:px-24  relative">
        <h2 className=" text-center text-4xl lg:text-6xl  uppercase">
          Tokenomics
        </h2>
        <div className=" mt-10 flex flex-col gap-y-5 md:flex-wrap md:flex-row">
          <div className=" relative flex justify-center items-center max-w-[350px] mx-auto lg:max-w-[31%]">
            <img src="/frame3.jpg" alt="" />
            <div className=" text-center absolute top-0 left-0 bottom-0 right-0 m-auto w-fit h-fit">
              <h3 className=" uppercase text-xl font-bold text-lightGreen">
                Locked liquidity
              </h3>
              <p className=" text-white capitalize font-medium mt-1">
                273 million tokens
              </p>
            </div>
          </div>
          <div className=" relative flex justify-center items-center max-w-[350px] mx-auto lg:max-w-[31%]">
            <img src="/frame3.jpg" alt="" />
            <div className=" text-center absolute top-0 left-0 bottom-0 right-0 m-auto max-w-[200px] h-fit ">
              <h3 className=" uppercase text-xl font-bold text-lightGreen">
                Donated to liquidity pool
              </h3>
              <p className=" text-white capitalize font-medium mt-1">
                113 million tokens
              </p>
            </div>
          </div>
          <div className=" relative flex justify-center items-center max-w-[350px] mx-auto lg:max-w-[31%]">
            <img src="/frame3.jpg" alt="" />
            <div className=" text-center absolute top-0 left-0 bottom-0 right-0 m-auto w-fit h-fit">
              <h3 className=" uppercase text-xl font-bold text-lightGreen">
                Tax
              </h3>
              <p className=" text-white capitalize font-medium mt-1">0%</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-lightGreen px-5 py-16 pb-24 md:px-12 xl:px-24  relative text-white">
        <h2 className=" text-center text-4xl  uppercase">How To Buy?</h2>
        <div className=" mt-10 lg:flex lg:justify-center  lg:gap-x-12">
          <div className=" order-2 ">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
              className={" relative"}
              forceRenderTabPanel={false}
            >
              <TabList
                className={[
                  ` absolute bottom-4 left-0 z-50 gap-x-3 flex items-center
                 justify-center w-full md:justify-start md:left-12`,
                ]}
              >
                <Tab
                  className={[
                    " outline-none cursor-pointer w-[40px] h-[15px] border-2 border-gray-500  flex justify-center items-center rounded-full",
                    tabIndex == 0
                      ? " bg-lightGreen border-lightGreen"
                      : " bg-gray-500",
                  ]}
                ></Tab>
                <Tab
                  className={[
                    " outline-none cursor-pointer w-[40px] h-[15px] border-2 border-gray-500  flex justify-center items-center rounded-full",
                    tabIndex == 1
                      ? " bg-lightGreen border-lightGreen"
                      : " bg-gray-500",
                  ]}
                ></Tab>
                <Tab
                  className={[
                    " outline-none cursor-pointer w-[40px] h-[15px] border-2 border-gray-500  flex justify-center items-center rounded-full",
                    tabIndex == 2
                      ? " bg-lightGreen border-lightGreen"
                      : " bg-gray-500",
                  ]}
                ></Tab>
                <Tab
                  className={[
                    " outline-none cursor-pointer w-[40px] h-[15px] border-2 border-gray-500  flex justify-center items-center rounded-full",
                    tabIndex == 3
                      ? " bg-lightGreen border-lightGreen"
                      : " bg-gray-500",
                  ]}
                ></Tab>

                {/* <Tab
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
              </Tab> */}
              </TabList>

              <TabPanel>
                <div
                  className={
                    " overflow-hidden max-w-[400px] lg:w-[600px] xl:py-20 xl:h-[400px] xl:w-[900px] md:px-12 mx-auto md:max-w-full h-[290px] bg-darkGreen text-white py-8 pb-16 px-5 rounded-2xl relative"
                  }
                >
                  <img
                    src="/card-bg.png"
                    alt=""
                    className=" absolute -bottom-1 -left-2 w-[80px] xl:w-[200px]
                  object-cover"
                  />
                  <div className=" max-w-[400px]">
                    <p className=" uppercase font-bold mb-4 md:text-xl">
                      step 1:
                    </p>
                    <h2 className=" text-2xl md:text-3xl text-lightGreen font-medium relative uppercase">
                      create your crypto wallet:
                    </h2>
                    <p className=" text-white mt-3 relative">
                      Sign up directly at uniswap and create your wallet, or
                      import abstract network into MetaMask/wallet of your
                      choice
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  className={
                    " overflow-hidden max-w-[400px] xl:py-20 xl:h-[400px] xl:w-[900px] lg:w-[600px] xl:w-[700px]  md:px-12 mx-auto md:max-w-full h-[290px] bg-darkGreen text-white py-8 pb-16 px-5 rounded-2xl relative"
                  }
                >
                  <img
                    src="/card-bg.png"
                    alt=""
                    className=" absolute -bottom-1 -left-2 w-[80px] xl:w-[200px]
                  object-cover"
                  />
                  <div className=" max-w-[400px]">
                    <p className=" uppercase font-bold mb-4 md:text-xl">
                      step 2:
                    </p>
                    <h2 className="  uppercase md:text-3xl text-lightGreen text-2xl font-medium relative">
                      deposit some eth:
                    </h2>
                    <p className="  mt-3 relative">
                      Using a centralised exchange purchase your desired amount
                      of ETH and send it to your new wallet
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  className={
                    " overflow-hidden  max-w-[400px] xl:py-20 xl:h-[400px] xl:w-[900px]   lg:w-[600px] md:px-12 mx-auto md:max-w-full h-[290px] bg-darkGreen text-white py-8 pb-16 px-5 rounded-2xl relative"
                  }
                >
                  <img
                    src="/card-bg.png"
                    alt=""
                    className=" absolute -bottom-1 -left-2 w-[80px] xl:w-[200px]
                  object-cover"
                  />
                  <div className=" max-w-[400px]">
                    <p className=" uppercase font-bold mb-4 md:text-xl">
                      step 3:
                    </p>
                    <h2 className="  uppercase md:text-3xl text-lightGreen text-2xl font-medium relative">
                      BRIDGE TO ABSTRACT:
                    </h2>
                    <p className="  mt-3 relative">
                      Bridge your mainnet ETH to Abstract ETH. This is important
                      as you will need it to swap for $ABSMAN{" "}
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  className={
                    " overflow-hidden  max-w-[400px] xl:py-20 xl:h-[400px] xl:w-[900px]  lg:w-[600px] md:px-12 mx-auto md:max-w-full h-[290px] bg-darkGreen text-white py-8 pb-16 px-5 rounded-2xl relative"
                  }
                >
                  <img
                    src="/card-bg.png"
                    alt=""
                    className=" absolute -bottom-1 -left-2 w-[80px] xl:w-[200px]
                  object-cover"
                  />
                  <div className=" max-w-[400px]">
                    <p className=" uppercase font-bold mb-4 md:text-xl">
                      step 4:
                    </p>
                    <h2 className=" md:text-3xl uppercase text-lightGreen text-2xl font-medium relative">
                      swap to $ABSMAN:
                    </h2>
                    <p className="  mt-3 relative">
                      Using the abstract trade function at uniswap, You can now
                      swap your abstract ETH for $ABSMAN on the abstract
                      dashboard
                    </p>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          {/* <div className=" order-1 bg-darkGreen mt-5 lg:mx-0 lg:mt-0 lg:flex-col py-8 px-5 lg:max-w-[380px] xl:max-w-[450px] rounded-2xl md:justify-between max-w-[400px] mx-auto md:max-w-full lg: md:flex md:items-center gap-x-12">
            <p className=" md:max-w-[400px]">
              Have you gone through all of the steps before? Great! Then just
              hit the button down below and fill up your bag with memecoin right
              now.
            </p>
            <div className=" mt-5 md:min-w-[250px]">
              <img src="/absman-bg.jpeg" alt="" className=" h-36 w-full object-cover rounded-xl" />
            </div>
          </div> */}
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
          <p className=" text-center text-sm mt-3">
            &copy; 2025 ABSMAN. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </>
  );
}
