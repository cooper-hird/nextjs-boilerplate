import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi there! This is my personal website for all the things I like to work on and share with the world. 
        Thanks for checking it out!`}
      </p>
    </section>
  );
}
