import Link from "next/link";

import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full lg:px-0 bg-color-primary-darkest text-color-grey-lightest flex flex-col">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 mt-12 lg:w-4/5">
        <div className="basis-1/3 grow-1 flex flex-col lg:items-center px-8 lg:px-8 gap-3">
          <h3 className="text-xl lg:text-3xl font-bold">PC World</h3>
          <ul className="flex text-2xl gap-4">
            <li className="hover:text-color-primary-darker transition-all">
              <Link href="/">
                <FaFacebookSquare />
              </Link>
            </li>
            <li className="hover:text-color-primary-darker transition-all">
              <Link href="/">
                <FaYoutube />
              </Link>
            </li>
            <li className="hover:text-color-primary-darker transition-all">
              <Link href="/">
                <FaInstagram />
              </Link>
            </li>
            <li className="hover:text-color-primary-darker transition-all">
              <Link href="/">
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="basis-2/3 flex lg:justify-around flex-wrap lg:gap-4 px-8 lg:px-0 gap-y-4 lg:gap-y-0">
          <ul className="flex flex-col gap-2 basis-1/2 lg:basis-auto">
            <h4 className="text-lg font-semibold">Company</h4>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Products</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">About Us</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Conact Us</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 basis-1/2 lg:basis-auto">
            <h4 className="text-lg font-semibold">Support</h4>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Track Order</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Cancel Order</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Call Support</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 basis-1/2 grow lg:grow-0 lg:basis-auto">
            <h4 className="text-lg font-semibold">Policy</h4>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Our Privacy Policy</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Shipping and Delivery</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Returns, Refunds and Cancellations</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 transition-all">
              <Link href="/">Terms and Conditions</Link>
            </li>
          </ul>
        </ul>
      </div>
      <div className="flex justify-center items-center opacity-60 text-sm my-8">
        &#169; 2023 ASW
      </div>
    </footer>
  );
}

export default Footer;
