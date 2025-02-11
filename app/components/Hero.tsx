import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://ucarecdn.com/2b21e6c5-1b24-444c-8e01-812e6f75520c/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-4 text-center relative z-20 flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-bold mb-6 text-white">
          El Futuro de las Apps con IA
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Experience cutting-edge AI solutions designed for the metaverse.
          Unlock new possibilities and transform your digital presence.
        </p>
        <Link
          href="#demo"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors inline-block"
        >
          Explore Demo
        </Link>
      </div>
    </section>
  );
}