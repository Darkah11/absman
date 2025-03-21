import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className=" absolute top-0 z-50 px-5 py-3 flex justify-between w-full items-center">
        <Link href={"/"}>
          <img src="/absman-logo.png" alt="" className=" w-16" />
        </Link>

        <Link href={"/"}>
          <button className=" bg-white text-lightRed font-bold w-[160px] py-3 rounded-md uppercase text-sm">
            Buy Now
          </button>
        </Link>
      </nav>
      <section className=" relative text-white px-5 py-16 pt-32 ">
        <div className=" absolute w-full h-full top-0 left-0">
          <div className=" absolute w-full bg-black h-full opacity-90" />
          <img
            src="/absman-bg.jpeg"
            alt="absman background image"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" relative">
          <div className=" text-center">
            <h1 className=" text-lightGreen font-bold text-5xl">ABSMAN</h1>
            <p className=" mt-3">
              In a world where trust is a rare commodity and chaos reigns,
              Absman rises from the shadows—a relentless force protecting the
              Abstract blockchain from the villains who would see it burn.
            </p>
            <div className=" flex items-center justify-center gap-x-3 mt-5">
              <button className=" bg-white text-lightRed font-bold w-[160px] py-3 rounded-md uppercase text-sm">
                Join Telegram
              </button>
              <button className=" bg-lightGreen font-bold w-[160px] py-3 rounded-md uppercase text-sm">
                Join X
              </button>
            </div>
          </div>
          <div className=" mt-10">
            <img src="/absman.png" alt="absman" className=" mx-auto" />
          </div>
        </div>
      </section>
      <section className=" bg-lightGreen px-5 py-16 text-white">
        <h2 className=" uppercase text-center text-white text-5xl abt relative w-fit mx-auto">About</h2>
        <div className=" mt-10">
          <div>
            <img src="about.jpeg" alt="about image" className=" rounded-md" />
          </div>
          <div className=" mt-5 about-text text-lg">
            <p>
              Once a brilliant developer, he was betrayed by the very system he
              sought to safeguard. A catastrophic breach fused him with the
              Abstract code, turning him into something more—a silent sentinel
              for a digital age.
              The Ruggers, merciless thieves of the crypto world, thrive in the
              dark corners of the decentralized web. They exploit, they destroy,
              leaving only ruin in their wake. But Absman fights back, not as a
              hero, but as a necessary evil.
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <div>
            <img src="about-2.jpg" alt="about image" className=" rounded-md" />
          </div>
          <div className=" mt-5 about-text text-lg">
            <p>
              He strikes from the void,
              dismantling their schemes with cold precision, leaving nothing but
              fear in his wake.
              He doesn’t wear the Abstract logo as a symbol of hope—it’s a
              warning. To the criminals lurking in the code, to those who prey
              on the innocent, it means one thing: Your time is running out.
              Absman knows the truth: In this world, there are no second
              chances. Only the strong survive, and the strong do what’s
              necessary. He will protect the network—no matter the cost.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
