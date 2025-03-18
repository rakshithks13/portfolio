import style from "../styles/contactform.module.css";

const messageType = {
  err: " Error sending message . Please try again.!",
  success: "Message sent successfully.!",
};

export default function Message({ type }) {
  return (
    <div
      className={` fixed left-0 w-full bottom-12  z-10  flex  items-center justify-center  ${style.errorCard}`}
    >
      <div
        className={` w-52 h-20 p-4 rounded-lg ${
          type === "err" ? "bg-red-400" : " bg-green-500"
        } 
          text-white`}
      >
        {messageType[type]}
      </div>
    </div>
  );
}
