import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ name, message, email, timestamp, image, postImage }) => {
  return (
    <div className="flex flex-col rounded-b-2xl">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium md:text-xl">{name}</p>
            {timestamp ? (
              <p className="text-xs md:text-sm text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="flex justify-evenly items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon py-4 rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4 md:h-6 text-blue-500" />
          <p className="text-xs sm:text-base text-black">Like</p>
        </div>
        <div className="inputIcon py-4 rounded-none">
          <ChatAltIcon className="h-4 md:h-6 text-blue-500" />
          <p className="text-xs sm:text-base text-black">Comment</p>
        </div>
        <div className="inputIcon py-4 rounded-none rounded-br-2xl">
          <ShareIcon className="h-4 md:h-6 text-blue-500" />
          <p className="text-xs sm:text-base text-black">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
