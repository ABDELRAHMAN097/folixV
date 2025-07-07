import { TiArrowSortedDown } from "react-icons/ti";
import WhatsAppChat from "../components/WhatsAppChat/WhatsAppChat";
import { useMemo } from "react";


const mockMessages = Array(20).fill({
  name: "user-name",
  lastMessage: "last message",
  avatar: "/images/logofollix.png",
  date: "today" 
});

const Messages = () => {
 
  const { todayMessages, thatWeekMessages } = useMemo(() => {
    return {
      todayMessages: mockMessages.filter(msg => msg.date === "today"),
      thatWeekMessages: mockMessages.filter(msg => msg.date === "thatWeek")
    };
  }, []);

  
  const MessageItem = ({ name, lastMessage, avatar }) => (
    <div className="w-full flex items-start justify-start gap-3">
      <div className="h-[45px] w-[45px] rounded-full">
        <img src={avatar} alt="user-img" loading="lazy" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h3>{name}</h3>
        <p className="text-[#808080] text-[12px]">{lastMessage}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full p-2 md:p-4 h-[calc(100vh-74px)]">
      <div className="flex items-start justify-center gap-1 p-1">
        {/*  */}
        <div className="w-full bg-transparent rounded-md">
          <h3 className="text-[20px] text-white m-2">Active</h3>

          <div className="flex flex-col items-start m-2">
            {/*  */}
            <div className="flex items-center justify-center gap-1 text-primary text-[14px] font-semibold">
              Today
              <TiArrowSortedDown className="text-primary" />
            </div>

            {/*  */}
            <div
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="h-[calc(100vh-220px)] w-full py-2 my-4 flex flex-col items-start justify-start gap-2"
            >
              {todayMessages.map((msg, index) => (
                <MessageItem 
                  key={`today-${index}`}
                  name={msg.name}
                  lastMessage={msg.lastMessage}
                  avatar={msg.avatar}
                />
              ))}
            </div>

            {/*  */}
            <div className="flex items-center justify-center gap-1 text-primary text-[14px] font-semibold">
              That Week
              <TiArrowSortedDown className="text-primary" />
            </div>
            
            {/* */}
            <div
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="h-[calc(100vh-220px)] w-full py-2 my-4 flex flex-col items-start justify-start gap-2"
            >
              {thatWeekMessages.map((msg, index) => (
                <MessageItem 
                  key={`week-${index}`}
                  name={msg.name}
                  lastMessage={msg.lastMessage}
                  avatar={msg.avatar}
                />
              ))}
            </div>
          </div>
        </div>
        {/* الجزء الأيمن */}
        <div className="w-full bg-black text-white shadow-[_0_0_19px_0_rgba(179,244,86,0.5)] rounded-md p-1">
          <p className="m-2">Wesam Ali</p>
          <WhatsAppChat />
        </div>
      </div>
    </div>
  );
};
export default Messages;