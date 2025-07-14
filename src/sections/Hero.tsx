"use client";

import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from '../assets/icons/arrow-down.svg';
import grainImage from '../assets/images/grain.jpg';
import StarIcon from '../assets/icons/star.svg';
import SparkleIcon from '../assets/icons/sparkle.svg';
import { HeroOrbit } from "@/components/HeroOrbit";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
       
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit> 
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit> 
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>      
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
      </div>
      
      <div className="container"> 
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[160px] md:size-[200px]"
            alt="Person peeking from behind laptop"
            priority
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-center mt-6 tracking-wide text-emerald-300 drop-shadow-lg">
            RIFAF RAHMAN
          </h1>
          <p className="mt-4 text-center text-white/70 md:text-lg font-semibold leading-snug">
            Sleek Code<br />
            Smooth Experiences
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10 relative">
          <a
            href="https://drive.google.com/file/d/1jV2hiLwrkIrCIneVxiHTJFvNTNcUH-BN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl font-semibold transition hover:bg-white/10"
          >
            <span>View My CV</span>
            <ArrowDown className="size-4" />
          </a>
          <button
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
            onClick={() => setIsOpen(true)}
          >
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>

        {/* Modal */}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" onClick={() => setIsOpen(false)} />
          <div className="relative bg-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto z-50">
            <button
              className="absolute top-3 right-3 text-white/60 hover:text-white text-2xl transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-emerald-300 mb-2 text-center">Let's create something awesome together!</h2>
            <form className="flex flex-col gap-3 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded px-3 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-emerald-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded px-3 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-emerald-300"
              />
              <textarea
                placeholder="Your Message"
                className="rounded px-3 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-emerald-300 resize-none"
                rows={3}
              />
              <button
                type="submit"
                className="bg-emerald-400 text-gray-900 font-semibold rounded py-2 mt-2 hover:bg-emerald-300 transition"
              >
                Send Message
              </button>
            </form>
            <div className="mt-6 flex flex-col items-center gap-2">
              <span className="text-white/60 text-sm mb-1">Or connect with me:</span>
              <div className="flex gap-4">
                <a href="https://github.com/codebyrifaf?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 text-white/80 transition">GitHub</a>
                <a href="https://www.linkedin.com/in/rifafrahman/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 text-white/80 transition">LinkedIn</a>
                <a href="https://www.instagram.com/__._kaizen_.__/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 text-white/80 transition">Instagram</a>
                <a
                  href="https://wa.me/8801875602306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-white/80 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};