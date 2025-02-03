import Footer from "~/components/footer.componen";
import HeroBanner from "~/components/hero-banner.component";
import ArchitectureIcon from "~/components/icons/architecture.icon";
import ConstructionIcon from "~/components/icons/construction.icon";
import ConsultingIcon from "~/components/icons/consulting.icon";
import FacebookIcon from "~/components/icons/facebook.icon";
import MailIcon from "~/components/icons/mail.icon";
import MapIcon from "~/components/icons/map.icon";
import PhoneIcon from "~/components/icons/phone.icon";
import SustainableIcon from "~/components/icons/sustainable.icon";
import TwitterIcon from "~/components/icons/twitter.icon";
import WhatsappIcon from "~/components/icons/whatsapp.icon";
import NavBar  from "~/components/nav-bar.component";
import TopBar from "~/components/top-bar.component";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <NavBar />
      <HeroBanner />

      <section className="p-32 relative">
        <div className="container max-2xl mx-auto">
          <div className="flex">
              <div className="w-[40%] bg-[url('/assets/construction_engineer.webp')] bg-cover bg-no-repeat bg-center intersect:motion-translate-y-in-100 intersect:motion-duration-[2s] intersect:motion-ease-spring-smooth intersect-once"></div>
              <div className="w-[60%] px-10 intersect:motion-translate-y-in-100 intersect:motion-duration-[2s] intersect:motion-ease-spring-smooth intersect-once">
                <h2 className="text-gray-darker font-medium text-6xl leading-[84px] mb-3">High Quality and Affordable Constructor</h2>

                <p className="mb-6 text-gray-dark">At Aalaya, we have been providing construction services to clients for over a decade. We have successfully completed numerous projects ranging from small home renovations to large commercial construction. Our team of experts is well-equipped to handle any construction project, no matter the size.</p>

                <h4 className="text-gray-darker font-normal text-2xl mb-3">We Can Help You</h4>

                <div className="grid grid-cols-2 gap-4">

                  <div className="flex bg-white rounded-lg p-6 shadow-md">
                    <div className="width-[50px] height-[50px]">
                      <ConstructionIcon />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-semibold mb-4">Construction</h2>
                      <p>Experience the construction of your dream home with our skilled team, utilizing state-of-the-art technology to ensure the highest standards of quality and safety.</p>
                    </div>
                  </div>

                  <div className="flex bg-white rounded-lg p-6 shadow-md">
                    <div className="width-[50px] height-[50px]">
                      <ArchitectureIcon />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
                      <p>Collaborate with the our highly skilled architects to design your home that reflects your personal style and functional needs. Our design process incorporates the latest technology to develop precise architectural plans</p>
                    </div>
                  </div>

                  <div className="flex bg-white rounded-lg p-6 shadow-md">
                    <div className="width-[50px] height-[50px]">
                      <ConsultingIcon />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-semibold mb-4">Consulting</h2>
                      <p>Leveraging advanced technology and extensive design & construction expertise, we provide tailored solutions that meet your specific requirements and budget, transforming your vision into a reality.</p>
                    </div>
                  </div>

                  <div className="flex bg-white rounded-lg p-6 shadow-md">
                    <div className="width-[50px] height-[50px]">
                      <SustainableIcon />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-semibold mb-4">Sustainable</h2>
                      <p>Aalaya embraces eco-friendly practices, fosters genuine connections, and envisions a harmonious coexistence with nature. We are not just builders; we are architects of communities, and our vision goes beyond creating homes.</p>
                    </div>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-dark py-20 relative z-0 after:absolute after:top-0 after:-left-[70px] after:w-[50%] after:bottom-0 after:bg-yellow-dark after:z-[-1] after:transform after:skew-x-[20deg] border-b-[1px] border-solid border-gray-lighter text-white">
        <div className="container max-2xl mx-auto">
          <div className="grid grid-cols-2">
            <div className="pr-[120px] text-lg font-medium intersect:motion-translate-y-in-100 intersect:motion-duration-[2s] intersect:motion-ease-spring-smooth intersect-half intersect-once">At Aalaya, we revolutionize construction with over a decade of expertise. From eco-friendly home transformations to sustainable commercial projects, our innovative team turns your vision into reality with unmatched precision and creativity.</div>

            <div className="pl-[120px] intersect:motion-translate-y-in-100 intersect:motion-duration-[2s] intersect:motion-ease-spring-smooth intersect-half intersect-once">
              <h4 className="text-medium font-semibold mb-4">Have a Questions?</h4>
              <ul>
                <li className="flex items-start py-2">
                  <MapIcon />
                  <span className="ml-4">#16, 1st Floor , Gaganachumbi Double Road , Kuvempunagar I Block , Mysuru</span>
                </li>
                <li className="flex items-start py-2">
                  <PhoneIcon />
                  <span className="ml-4">+91 9880666664</span>
                </li>
                <li className="flex items-start py-2">
                  <MailIcon />
                  <span className="ml-4">aalaya.co@gmail.com</span>
                </li>
                <li className="flex items-start py-2 mt-2">
                  <WhatsappIcon />
                  <span className="mx-10"><FacebookIcon /></span>
                  <TwitterIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}