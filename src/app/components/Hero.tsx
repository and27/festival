import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => (
  <main className="relative back md:h-screen text-white pt-[80px] md:pt-0 px-4">
    <div className="max-w-[1280px] mx-auto grid grid-cols-1 items-center h-full">
      <div className="flex flex-col gap-7 items-start justify-center">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo"
          className="mx-auto"
        />
        <h1
          className={`${bebasNeue.className} text-4xl md:text-5xl font-bold leading-none slide-bottom mt-5 text-center max-w-4xl mx-auto`}
        >
          Festival Iberoamericano de Teatro Mar del Plata <br />
          <span className="md:text-7xl">{`"Cumbre de las Américas"`}</span>
        </h1>
      </div>
    </div>
  </main>
);

export default Hero;
