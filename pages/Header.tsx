import Link from "next/link";
import { CiCircleMore } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((x: any) => x.TaskReducer.user);
  return (
    <div className="bg-black py-1 px-7 flex justify-start items-center my-4">
      <Link href="/" className="font-bold text-4 text-[#327AD9] leading-5">
        Cancel
      </Link>
      <div className="flex flex-col justify-center items-center pl-20">
        <div className="font-bold text-4 text-white leading-5 text-center">
          TRYTOPLAYTHAT
        </div>
        <div className="font-semibold text-4 text-[#818181] text-center">
          bot
        </div>
      </div>
      <div>
        {user}
      </div>
    </div>
  );
}
