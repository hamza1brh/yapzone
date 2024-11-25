import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm py-2 w-full ">
          <input
            type="text "
            placeholder="Write a comment .... "
            className="bg-transparent outline-none"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>

      {/* comments */}
      <div className="">
        {/* comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* avatar */}
          <Image
            src="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          {/* desc */}
          <div className="flex flex-col gap-2 flex-1 ">
            <span className="font-medium ">Barry Allen</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              cumque assumenda .
            </p>

            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items center gap-4  ">
                <Image
                  src="/like.png"
                  alt=""
                  width={16}
                  height={16}
                  className="cursor-pointer"
                ></Image>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">77 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* icon */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Comments;
