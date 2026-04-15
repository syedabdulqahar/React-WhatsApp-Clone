import "./message.css";
import HeaderMessage from "./Message-Components/Header";

const Message = () => {
  return (
    <div className="MainMessages">
      <div className="MessageIndex">
        <HeaderMessage text="WhatsApp" />
      </div>
      <div className="MessageChat"></div>
    </div>
  );
};
export default Message;
