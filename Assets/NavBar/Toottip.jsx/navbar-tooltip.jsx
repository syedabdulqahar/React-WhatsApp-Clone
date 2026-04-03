import "./navbar-tooltip.css";
const NavbarTooltip = ({ text, children }) => {
  return (
    <div className="MainToolTip">
      {children}
      <div className="Tooltip">{text}</div>
    </div>
  );
};
export default NavbarTooltip;
