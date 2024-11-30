import Link from "next/link";
import Image from "next/image";
const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 ">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500 ">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs ">
          {" "}
          See all{" "}
        </Link>
      </div>
      {/* user */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/13245968/pexels-photo-13245968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          ></Image>
          <span className="font-semibold">Bruce Lee</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image
            src="/accept.png"
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
