import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shoadow-md overflow-scroll text-xs scrollbar-hide ">
      <div className="flex gap-8 w-max ">
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image
            src="https://images.pexels.com/photos/28445236/pexels-photo-28445236/free-photo-of-seller-with-inflatable-toys-on-ho-chi-minh-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">brand</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28445236/pexels-photo-28445236/free-photo-of-seller-with-inflatable-toys-on-ho-chi-minh-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">brand</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28445236/pexels-photo-28445236/free-photo-of-seller-with-inflatable-toys-on-ho-chi-minh-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">brand</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28445236/pexels-photo-28445236/free-photo-of-seller-with-inflatable-toys-on-ho-chi-minh-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">brand</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28445236/pexels-photo-28445236/free-photo-of-seller-with-inflatable-toys-on-ho-chi-minh-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">brand</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28445236/pexels-photo-28445236/free-photo-of-seller-with-inflatable-toys-on-ho-chi-minh-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">brand</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
