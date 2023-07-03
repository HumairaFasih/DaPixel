import Image from "next/image";
import Script from "next/script";

export default function Navbar({ logoSrc }: { logoSrc: string }) {
  const menuItems = ["Services", "Industries", "About Us", "Team DaPixel"];

  return (
    <nav className="shadow-md">
      <div className="py-4 mx-6 flex flex-row items-center justify-between md:mx-10 xxl:mx-24">
        <Image src={logoSrc} alt="Logo" width="200" height="100" />
        <div className="hidden md:flex flex-row items-center justify-between space-x-7 xl:text-lg">
          {menuItems.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="hidden lg:inline-block rounded-3xl py-2 px-5 text-custom-yellow border-2 border-custom-yellow"
          >
            Contact Us
          </a>
        </div>

        {/* Menu icon */}
        <button id="menu-icon" className="menu-btn md:hidden">
          <span className="menu-btn-top"></span>
          <span className="menu-btn-middle"></span>
          <span className="menu-btn-bottom"></span>
        </button>
      </div>

      {/* Menu Items */}
      <div
        id="menu"
        className="hidden md:hidden menu-items-holder z-20 absolute left-6 right-6 mt-10 flex flex-col items-center py-6 space-y-6 font-bold bg-white drop-shadow-md hover:text-custom-yellow"
      >
        {menuItems.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </div>
      <Script src="/menu-script.js" />
    </nav>
  );
}
