import Image from "next/image"
export default function Home() {
  return (
    <body className="bg-white">
      <header className=" w-[1920] h-[190] px-9 py-1 bg-[#A29875] flex">
        <h1 className="px-[78] text-6xl w-[439] h-[94]  text-[#FFFFFF] font-[Rye] ">MANZZARI</h1>
        </header>

        <main className="flex justify-between items-center w-full px-24 py-16">
        {/* Text Section */}
        <section className="text-left text-[#000000] text-4xl font-[Libre]  leading-relaxed font-bodoni font-bold max-w-[469px]">
          <div>IMPECCABLE</div>
          <div>CRAFTSMANSHIP AND</div>
          <div>FINESSE</div>

          <p className="text-[#787054] size-[30]  pt-4 tracking-widest  text-lg mt-4 font-[Libre] leading-normal">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>

          <button className=" h-[58]  top-[730] left-[176] rounded-[30] font-[500] font-[Libre] mt-12  px-14 py-2 gap-10 bg-[#A29875] w-[288]">
            Explore Now
          </button>
        </section>

        {/* Image Section */}
        <div className="ml-16">
          <Image
            src="/Image/firstimage.svg"
            alt="Image of jewelry model"
            width={320}
            height={920}
            className="w-[320px] h-auto"
          />
        </div>
      </main>
    </body>
 ) ;
 };
