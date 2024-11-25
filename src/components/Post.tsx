import Image from "next/image";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            width={40}
            height={40}
            src="https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={""}
            className="w-10 h-10 rounded-full "
          />
          <span className="font-medium ">Jackie McBride</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>

      {/* desc */}
      <div className=" flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            fill
            alt=""
            className="object-cover rounded-md"
            src="https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab ad
          consequuntur blanditiis accusantium, inventore optio voluptates ipsum
          pariatur commodi laboriosam perferendis nihil, nemo illo beatae est
          eligendi et recusandae.
        </p>
      </div>
      {/* interaction */}
      <div className="flex items-center justify-between text-sm my-4 ">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl  ">
          <Image
            src="/like.png"
            alt=""
            className=" cursor-pointer"
            width={16}
            height={16}
          />
          <span className="text-gray-300">|</span>

          <span className="text-gray-500">
            213 <span className="hidden md:inline"> Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl  ">
          <Image
            src="/comment.png"
            alt=""
            className=" cursor-pointer"
            width={16}
            height={16}
          />
          <span className="text-gray-300">|</span>

          <span className="text-gray-500">
            16 <span className="hidden md:inline"> Comments</span>
          </span>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl  ">
            <Image
              src="/share.png"
              alt=""
              className=" cursor-pointer"
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>

            <span className="text-gray-500">
              16 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
