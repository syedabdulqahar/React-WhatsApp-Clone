import NewChat from "../../../../Assets/Messages/newChat";
import MenuIcon from "../../../../Assets/Messages/menu";
//** tootltip Icons */
import AddUser from "../.././../../Assets/Messages/Tooltip/addContact";
import Starred from "../.././../../Assets/Messages/Tooltip/starredMsg";
import SelectAll from "../../../../Assets/Messages/Tooltip/selectAll";
import Logout from "../../../../Assets/Messages/Tooltip/logout";
import Message from "../../../../Assets/Messages/Tooltip/Message";
import LockChat from "../../../../Assets/Messages/Tooltip/lockedChat";

import { useState } from "react";
import "./Header.css";
const HeaderMessage = ({ text }) => {
  const [menu, setVisibility] = useState(false);
  return (
    <div className="MainMessageHeader">
      <h2 className="HeaderName">{text}</h2>
      <div className="HeaderIconDiv">
        <div className="IconDiv">
          <NewChat color="white" className="CreateIcon" />
        </div>
        <div
          className="IconDiv MenuIconDiv"
          onClick={() => {
            setVisibility((prev) => !prev);
          }}
        >
          <MenuIcon size={25} color={"white"} className={"MenuIcon"} />
        </div>
        {menu && (
          <div className="Menu">
            <div className="MyMenus">
              <div className="MyMenuIcons">
                <AddUser className={"TooltipIcon"} />
              </div>
              New group
            </div>
            <div className="MyMenus">
              <div className="MyMenuIcons">
                <Starred className={"TooltipIcon"} />
              </div>
              Starred chats
            </div>
            <div className="MyMenus">
              <div className="MyMenuIcons">
                <SelectAll className={"TooltipIcon"} />
              </div>
              Select all
            </div>
            <div className="MyMenus">
              <div className="MyMenuIcons">
                <Message className={"TooltipIcon"} />
              </div>
              Mark all as read
            </div>
            <hr className="TooltipRow" />
            <div className="MyMenus">
              <div className="MyMenuIcons">
                <LockChat className={"TooltipIcon"} />
              </div>
              Lockedchats
            </div>
            <div className="MyMenus">
              <div className="MyMenuIcons">
                <Logout className={"TooltipIcon"} color="white" />
              </div>
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeaderMessage;
