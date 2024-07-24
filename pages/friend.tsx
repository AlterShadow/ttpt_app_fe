import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import axios from "../app/axios";
import { useSelector } from "react-redux";

interface Item {
  t_id: string;
  mount: number;
}

function Friend() {
  const user = useSelector((x: any) => x.TaskReducer.user);
  const [items, setItems] = useState<Item[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const response = await axios.post(
          "https://ttpt-app-be.onrender.com/friends",
          {
            user,
          }
        );
        if (response.data.items == undefined) setItems([]);
        else setItems(response.data.items);
      }
    };
    fetchData();
  }, [user]);

  const handleInviteClick = async () => {
    // Generate the invite link
    const inviteLink = `https://t.me/Trytoplaythat_Arcade_bot?start=${user}\nPlay with me!`;
    console.log(inviteLink);

    // Show the invite link in a snackbar or modal
    enqueueSnackbar("Invite link copied to clipboard!", { variant: "success" });

    // Copy the link to the clipboard
    const shareLink = `https://t.me/share/url?url=${encodeURIComponent(
      inviteLink
    )}`;

    // Open the share link in a new window
    window.open(shareLink, "_blank");
  };
  const copy = () => {
    enqueueSnackbar("Invite link copied to clipboard!", { variant: "success" });

  }

  return (
    <>
      <div className="flex flex-col px-5 pt-[23px] rounded-t-3xl flex-1 h-0 overflow-auto">
        <div className="font-bold text-xl leading-7 text-white">
          Invite friends to earn more Points
          <br /> Already invited {items.length} friend
          <div className="w-full flex justify-between border-2 border-[#7D4DC2] p-5 my-6 rounded-lg text-white">
            <div className="flex justify-start items-center">
              <div className="font-bold text-2xl leading-7">{items.length}</div>
              <div className="font-semibold text-xs leading-5 pl-4">Points</div>
            </div>
            <div className="flex justify-end items-center px-5 py-1 bg-[#7D4DC2] rounded-lg text-xs leading-6">
              Claim
            </div>
          </div>
        </div>
        
        
        <div className="my-5 font-bold text-lg leading-7 text-white">My Friends</div>
        
        {items.length === 0 ? (
          <>
            <div className="font-medium text-[14px]  mt-3 mb-[25px] text-gray-400">
              You haven&apos;t invited anyone yet
            </div>
            <img className="w-[186px] mx-auto" src="/imgs/no.png" />
          </>
        ) : (
          <div className="mb-[100px]">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row items-center mt-5 border border-[#7D4DC2]p-2 px-4 mx-4 rounded-lg">
                  <div className="text-white text-lg">{index + 1}</div>
                  <div className="ml-4 text-white">{item.t_id}</div>
                  <img
                    src="/images/dollar-icon.svg"
                    alt="dollar"
                    className="w-4 h-4 ml-6"
                  ></img>
                  <div className="ml-2 text-white">{item.mount}</div>
                </div>
              </div>
            ))}
          </div>
          
        )}
        <div className="flex justify-center space-x-2 mt-8 mb-20">
          <button
            className="mt-5 text-center text-lg leading-6 font-semibold text-white w-full bg-gradient-to-r from-[#7D4DC2] from-40% to-[#008BD8] to-90% p-5 rounded-lg  shadow-md"
            onClick={handleInviteClick}
          >
            Invite a friend
          </button>
          <button className="mt-5 p-5 bg-gradient-to-r from-[#008BD8] from-40% to-[#7D4DC2] to-90% rounded-[12px] disabled:cursor-not-allowed" onClick={copy}>
            <img  src="/images/copy.svg" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Friend;
