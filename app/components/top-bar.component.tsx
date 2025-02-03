import FacebookIcon from "./icons/facebook.icon";
import TwitterIcon from "./icons/twitter.icon";
import WhatsappIcon from "./icons/whatsapp.icon";

export default function TopBar() {
  return (
    <div className="py-1 bg-gray-dark px-3 px-md-0">
      <div className="container max-2xl mx-auto">
        <div className="flex flex-row justify-between items-center">
          <p className="text-white">
            <span className="text-yellow">Call:</span>{" "}
            <span>+91 9880666664</span>
          </p>
          <div className="flex justify-end items-center">
            <p className="text-white mr-6">
              <span className="text-yellow">Email:</span>{" "}
              <a href="mailto:aalaya.co@gmail.com">aalaya.co@gmail.com</a>
            </p>
            <ul className="flex">
              <li className="flex self-center">
                <a
                  className="inline-block p-1 rounded bg-gray-darker ml-1"
                  href="https://twitter.com/aalaya_co"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li className="flex self-center">
                <a
                  className="inline-block p-1 rounded bg-gray-darker ml-1"
                  href="https://www.facebook.com/aalaya.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li className="flex self-center">
                <a
                  className="inline-block p-1 rounded bg-gray-darker ml-1"
                  href="https://wa.me/919880666664"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsappIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
