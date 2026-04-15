import "./nav.css";
import { FaDotCircle, FaAccessibleIcon } from "react-icons/fa";
import Community from "../../Assets/NavBar/community";
import Message from "../../Assets/NavBar/Message";
import Channel from "../../Assets/NavBar/channel";
import Meta from "../../Assets/NavBar/meta";
import Media from "../../Assets/NavBar/media";
import User from "../../Assets/NavBar/user";
import NavbarTooltip from "../../Assets/NavBar/Toottip.jsx/navbar-tooltip";

function NavBar() {
  return (
    <>
      <main className="NavBar-Main">
        <div className="Upper">
          <NavbarTooltip text={"Chats"}>
            <Message className="Icon" size={25} />
          </NavbarTooltip>
          <NavbarTooltip text={"Status"}>
            <FaDotCircle className="Icon" size={25} />
          </NavbarTooltip>
          <NavbarTooltip text={"Channels"}>
            <Channel className="Icon" size={25} />
          </NavbarTooltip>
          <NavbarTooltip text={"Group"}>
            <Community className="Icon" size={25} />
          </NavbarTooltip>
          <hr style={{ color: "white" }} />
          <NavbarTooltip text={"Meta AI"}>
            <Meta className="Icon" color={"blue"} size={25} />
          </NavbarTooltip>
        </div>
        <div className="Lower">
          <NavbarTooltip text={"Media"}>
            <Media className="Icon" size={25} />
          </NavbarTooltip>
          <NavbarTooltip text={"User"}>
            <User className="Icon" size={25} />
          </NavbarTooltip>
        </div>
      </main>
    </>
  );
}

export default NavBar;
