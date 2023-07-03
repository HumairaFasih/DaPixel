import Image from "next/image";
import ProfileCard from "../components/profileCard";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen min-w-screen">
      <Navbar logoSrc="/logo.svg" />

      <div
        id="content-container"
        className="flex flex-col items-center justify-center"
      >
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-8 mt-10 flex flex-col-reverse items-center justify-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
            {/* Hero Section text */}
            <div className="flex flex-col space-y-5 items-center justify-center md:items-start">
              {/* Hero Section Heading */}
              <h1 className="z-10 font-bold text-3xl text-center max-w-sm md:text-left md:max-w-lg lg:mt-[-100px] xl:mt-[-200px] xl:text-5xl xxl:text-6xl xxl:max-w-xl">
                <span className="underline-text">We help you grow</span>
                <span className="inline"> your </span>
                <span className="font-bold text-custom-yellow">
                  conversions.
                </span>
              </h1>

              {/* Featured Examples */}
              <div className="flex flex-col space-y-2">
                <p className="text-center md:text-left xl:text-xl">
                  Featured in leading publications around the world
                </p>
                <div className="flex flex-row items-center space-x-4">
                  <div className="grayscale">
                    {" "}
                    <Image
                      src="/market-watch.svg"
                      alt="example publication 1"
                      width="120"
                      height="30"
                    />
                  </div>
                  <div className="grayscale">
                    <Image
                      src="/saas-insider.svg"
                      alt="example publication 2"
                      width="120"
                      height="30"
                    />
                  </div>

                  <div className="grayscale">
                    <Image
                      src="/fiver-pro.svg"
                      alt="example publication 3"
                      width="120"
                      height="30"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <a
                href="#"
                className="z-10 rounded-xl py-3 px-8 text-white bg-custom-yellow hover:shadow-xl hover:font-bold"
              >
                Contact Us
              </a>
            </div>

            {/* Hero Section Image */}
            <div className="z-10">
              <img src="./hero-img.svg" alt="Hero Section Image" />
            </div>
          </div>

          {/* Background Wave Texture */}
          <img
            className="w-full -z-[-10] md:-mt-72 lg:mt-[-400px] xl:mt-[-500px] xxl:mt-[-650px]"
            src="/wave-bg.svg"
            alt="background-texture"
          />
        </section>

        {/* Team Profile Cards */}
        <section id="team">
          <div className="mt-20 mb-32 flex flex-col items-center justify-between space-y-10 lg:space-x-10 lg:space-y-0 lg:flex-row xl:px-12">
            <ProfileCard
              name="Tim Haldorsson"
              position="Paid Search Manager"
              city="Gothenberg, Sweden"
              email="tim@lunarstrategy.com"
              profileImgLink="/team-member-photo.svg"
            />
            <ProfileCard
              name="Tim Haldorsson"
              position="Paid Search Manager"
              city="Gothenberg, Sweden"
              email="tim@lunarstrategy.com"
              profileImgLink="/team-member-photo.svg"
            />
            <ProfileCard
              name="Tim Haldorsson"
              position="Paid Search Manager"
              city="Gothenberg, Sweden"
              email="tim@lunarstrategy.com"
              profileImgLink="/team-member-photo.svg"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
