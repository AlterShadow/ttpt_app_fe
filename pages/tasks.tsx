"use Client";

import Card from "@/app/components/common/card";
import Image from "next/image";
import { useSelector } from "react-redux";

function Tasks() {
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks)
  const mainTasks = allTasks?.filter((x: any) => x.extra === false)
  const user = useSelector((x: any) => x.TaskReducer.user);
  const handleImageLoad = () => {
    // setImagesLoaded((prev) => {
    //     console.log(prev)
    //     const newCount = prev + 1;
    //     console.log(newCount)
    //     if (newCount === totalImages) {
    //         setLoading(false);
    //     }
    //     return newCount;
    // });
  };

  return (
    <div className="flex-col space-y-10 text-white">
        <div className="px-5">
        <div className="flex justify-between px-2">
          <div className="font-bold tracking-[8%] text-sm leading-[15px]">
            COMPLETE
            <br /> TASTS
            <br /> TOEARN MORE
            <br /> POINTS AND
            <br /> INVITATION
          </div>
          <Image
            width={138}
            height={93}
            className="w-[138px] h-[93px]"
            src="/imgs/gift.png"
            alt="gift.png"
          />
        </div>
        <div className="w-full border-2 border-[#7D4DC2] flex justify-between rounded-xl px-5">
          <div className="pt-2 pb-1">
            <div className="">Complete 6/16</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-1/3"></div>
            </div>
          </div>
          <div className="px-2 pt-2 pb-1 font-semibold text-[34px] leading-[43px] border-l-2 border-[#7D4DC2] rounded-xl flex items-center">
            +200 <span className="text-[13px] leading-9 pl-2">Points</span>
          </div>
        </div>
        </div>
      <div className="h-[60vh]">
        <div className="py-7 mb-[90px] px-5 text-white rounded-t-3xl h-full overflow-auto ">
          {mainTasks.map((x: any, i: number) =>
            <Card
              key={i}
              title={x.title}
              description={x.description}
              price={x.price}
              link={x.link}
              img={x.image}
              onLoad={handleImageLoad}
            />
          )}
          
        </div>
      </div>
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

export default Tasks;
