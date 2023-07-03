import Image from "next/image";

export default function ProfileCard({
  name,
  position,
  city,
  email,
  profileImgLink,
}: {
  name: string;
  position: string;
  city: string;
  email: string;
  profileImgLink: string;
}) {
  return (
    // custom shadow format: shadow-[0px_10px_40px_5px_rgba(0,0,0,0.2)]
    <div className="flex flex-col p-10 space-y-3 items-center justify-between shadow-xl rounded-xl xl:p-14 xxl:px-20">
      <div className="rounded-full ring ring-custom-yellow ring-offset-3 p-1">
        <Image
          className="xl:w-28 xl:h-28"
          src={profileImgLink}
          alt="team member 1"
          width="80"
          height="80"
        />
      </div>
      <h2 className="font-bold text-2xl text-center xl:text-3xl">{name}</h2>
      <h3 className="xl:text-lg">{position}</h3>
      <address className="not-italic text-custom-purple text-center xl:text-lg">
        <p>{city}</p>
        <p>{email}</p>
      </address>

      <div>
        <a
          href="#"
          className="mt-5 py-3 px-10 block rounded-xl text-white text-sm bg-custom-yellow hover:shadow-xl lg:px-8 xl:text-lg"
        >
          Book a free meeting
          <Image
            className="inline ml-3"
            src="/arrow-icon.svg"
            alt="arrow icon"
            width="6"
            height="6"
          />
        </a>
      </div>
    </div>
  );
}
