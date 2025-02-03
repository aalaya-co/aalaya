export default function HeroBanner() {
  return (
    <section className="bg-gray-dark bg-[url('./assets/aalaya_hero_banner.webp')] bg-cover bg-no-repeat bg-center bg-fixed relative z-0 before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-gray before:opacity-[0.5] before:z-[-1]">
      <div className="container max-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-center min-h-[750px]">
          <div className="w-[65%] flex-[0_0_auto]">
            <div className="relative z-0 uppercase text-white text-center intersect:motion-translate-y-in-100 intersect:motion-duration-[2s] intersect:motion-ease-spring-smooth intersect-half intersect-once">
              <h1 className="relative tracking-wider font-sans font-bold text-6xl leading-[1.2] after:absolute after:top-0 after:right-0 after:left-0 after:w-full after:h-[100%] py-[40px] after:-z-[1] after:border-[10px] after:border-solid after:border-white after:border-opacity-20 "><span className="text-yellow-darker">Aalaya</span> brings sustainable and innovative construction to life</h1>
              <div className="text-center mt-10">
                <button type="button" className="text-white bg-yellow-dark hover:bg-yellow-darker font-semibold rounded-lg text-base px-5 py-2.5">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}