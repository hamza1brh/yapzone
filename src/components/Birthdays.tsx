import Image from "next/image";
import Link from "next/link";
const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {" "}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500 ">Birthdays</span>
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
          <button className="bg-blue-500 rounded-md text-white text-xs px-2 py-1 ">
            Celebrate
          </button>
        </div>
      </div>
      {/* upcoming */}
      <div className="p-4 bg-slate-100 rounded-lg  flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24}></Image>
        <Link href="/" className="flex flex-col gap-1  text-xs ">
        <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
        <span className="text-gray-500"> See other upcoming birthdays</span></Link>
      </div>
    </div>
  );
};

export default Birthdays;
