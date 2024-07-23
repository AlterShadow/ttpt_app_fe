"use Client";

import Card from "@/app/components/common/card";
import YoutubeCard from "@/app/components/common/youtubecard";
import axios from "@/app/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

function Point() {
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks)
  const extraTasks = allTasks?.filter((x: any) => x.extra === true)
  const user = useSelector((x: any) => x.TaskReducer.user);
  const [mount, setMount] = useState(0);
  useEffect(() => {
    const func = async () => {
      const {data} = await axios.get("https://ttpt-server.onrender.com/getUserById/"+user);
      setMount(data?.mount)
    }
  }, [])
  const handleImageLoad = () => {
  }

  return (
    <div className="flex-col">
      <div className="w-full flex flex-col space-y-4 items-center ">
        <div className="w-24 h-24 p-6 bg-[#002A65] border-2 border-[#000B6E] rounded-full flex flex-col justify-center items-center">
          <Image
            width={98}
            height={98}
            className="w-[98px] h-[98px]"
            src="/imgs/logo.png"  
            alt="logo.png"
          />
        </div>
        <div className="text-white text-2xl">TTPT</div>
        <div className="flex space-x-1 text-[#818181]">
          <IoWalletOutline className="w-[18px] h-[16px]" />
          <div className="text-sm">Balance</div>
        </div>
        <div className="relative">
          <div className=" w-full h-full rounded-[999px] bg-[#DA01AA] blur-3xl absolute top-0 left-0 z-[-1]"></div>
          <div className="font-bold text-[53px] text-white">
            <span>{mount}</span>
          </div>
        </div>
        <div className="font-semibold text-sm text-white">Points</div>
      </div>
      <Link
          href={"earn"}
          className="mt-20 p-3 font-semibold text-[17px] text-white flex justify-center items-center w-full py-5 bg-gradient-to-r from-[#7D4DC2] to-[#008AD8] shadow-md rounded-lg hover:curpointer active:shadow-none"
        >
          Watch To Earn
        </Link>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch or define your static props here
  return {
    props: {
      data: {}, // Example data
    },
  };
}

export default Point;
