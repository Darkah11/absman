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
            Buy $ABSMAN
          </button>
        </Link>
      </nav>
      <section className=" relative text-white px-5 py-16 pt-32">
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
    </>
  );
}
