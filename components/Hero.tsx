import {FaLocationArrow} from 'react-icons/fa6';
import MagicButton from './MagicButton';
import {TextGenerateEffect} from './ui/TextGenerateEffect';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/* Optional Spotlight components */}
      {/* <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" /> */}
      {/* <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" /> */}
      {/* <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl flex flex-col items-center md:items-start">
          <p className="text-[15px] md:text-6xl uppercase font-bold text-center md:text-left">
            Hi👋, I&lsquo;m Francis U. Okpoluaefe
          </p>
          <TextGenerateEffect
            words="A self-taught frontend developer enthusiastic about transforming concepts into seamless user experiences"
            className="text-[20px] md:text-[35px] text-center md:text-left"
          />

          <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
            <a href="https://calendly.com/deulo-careers/30min" target="_blank">
              <MagicButton title="Book call " icon={<FaLocationArrow />} position="right" />
            </a>
            <a href="mailto:deulo.careers@egmail.com">
              <MagicButton title="Message" icon={<FaLocationArrow />} position="right" />
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex items-center justify-center w-96 h-96 rounded-full bg-deulobg animate-myCircle">
          <div className="w-80 h-80 animate-slideInFromRight">
            <Image
              className="rounded-full object-cover overflow-hidden w-full h-full"
              src="/photo.jpeg"
              width={400}
              height={400}
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
