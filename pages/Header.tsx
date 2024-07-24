import Link from "next/link";
import { CiCircleMore } from "react-icons/ci";

export default function Header() {
  return (
    <div className="bg-black py-1 px-7 flex justify-between items-center my-4">
      <Link href="/" className="font-bold text-4 text-[#327AD9] leading-5">
        Cancel
      </Link>
      <div className="flex flex-col justify-center items-center pl-10">
        <div className="font-bold text-4 text-white leading-5 text-center">
          TRYTOPLAYTHAT
        </div>
        <div className="font-semibold text-4 text-[#818181] text-center">
          bot
        </div>
        
      </div>
      <div> </div>
    </div>
  );
}
