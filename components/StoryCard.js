import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="flex flex-col relative h-8 w-8 xsm:h-14 xsm:w-14 md:h-20 md:w-20 lg:h-56 lg:w-36 cursor-pointer overflow-x p-3">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-40 top-10 object-cover"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      />
      <p className="opacity-0 lg:opacity-100 z-40 mt-auto text-left w-full text-white">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
