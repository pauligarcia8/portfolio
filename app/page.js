import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 items-center justify-items-center min-h-screen p-5 font-[family-name:var(--font-geist-mono)]">
      <nav className="flex gap-[24px] py-2 size-full flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About
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
      <main className="h-[90vh] w-full flex items-center justify-between font-[family-name:var(--font-geist-sans)] ">
        <div className="w-1/2">
          <h1 className="text-6xl my-2">Hello!</h1>
          <h2 className="text-3xl leading-11 my-6">
            My name is <span className="font-bold">Paula Garcia</span>, and I'm
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
        </div>
        <p className="w-1/2"></p>
      </main>
    </div>
  );
}
