"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
   const [show, setShow] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //if (!show) return null; esconde toda la pagina porque el componente de la flecha esta dentro de la pagina principal, excluirla

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 items-center justify-items-center min-h-screen p-5 font-[family-name:var(--font-geist-mono)]">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex gap-[24px] py-4 px-6 justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/#about-me"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About Me
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/pauligarcia8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github →
        </a>
      </nav>
      <main id="main" className="h-screen w-full flex flex-col items-start justify-center font-[family-name:var(--font-geist-sans)] ">
        <section className="w-1/2">
          <h1 className="text-6xl my-2">Hello!</h1>
          <h2 className="text-3xl leading-11 my-6">
            My name is <span className="font-bold">Paula Garcia</span>, and I&apos;m
            a Frontend Developer
          </h2>
          <h3 className="text-xl my-2">
            Get in touch! →{" "}
            <a
              href="mailto:pauligarcia_05@hotmail.com"
              className="underline underline-offset-6 decoration-purple-600 decoration-3"
            >
              pauligarcia_05@hotmail.com
            </a>
          </h3>
        </section>
      </main>
      <section id="about-me" className="h-screen w-full flex flex-col items-center justify-center">
        <p>
          My journey began with a passion for music, dreaming of becoming an
          orchestral composer and clarinetist. However, life took me down a
          different path, into the exciting world of technology and software
          development. I discovered that programming shares a similar
          methodology to what I used when composing music. The ability to
          abstract and visualize the final outcome allows me to identify the
          steps needed to achieve it. After all, music and programming are
          languages; once you understand them, you realize they are universal
          languages that share structure, abstraction, and logic. Both require
          creativity and precision, iteration and continuous improvement, and,
          above all, collaboration to achieve coherent results.{" "}
        </p>
        <p>
          I began my web development career learning HTML, CSS, and JavaScript,
          which allowed me to build dynamic and attractive interfaces. Later, I
          deepened my knowledge in React, a powerful JavaScript library that has
          enabled me to create more efficient and scalable web applications.
          I have used various styling libraries like Bootstrap, Material UI,
          Tailwind, and Storybook to preview components and have been involved
          in the project lifecycle through agile methodologies. I am proactive,
          patient, and adaptable, always focused on achieving excellent results.
          Additionally, I have a strong ability to build solid relationships
          with clients, thanks to my proficiency in English. Currently, I am
          studying to become a Systems Analyst to gain a solid foundation in
          programming. This learning will enable me to explore and master
          various languages and skills in the technology world, allowing me to
          continue growing professionally and face new challenges with
          confidence.
        </p>
      </section>
      <a href="/#main" aria-label="Scroll to top" className="fixed bottom-4 right-4 z-[9999] text-black p-3 rounded-full shadow-lg hover:bg-purple-500 hover:text-white transition cursor-pointer animate-bounce">
        <FaArrowUp  />

      </a>
    </div>
  );
}
