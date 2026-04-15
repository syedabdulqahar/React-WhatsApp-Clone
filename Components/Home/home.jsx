import Message from "../Activities/Messages/message";
import NavBar from "../NavigationBar/nav";
import "./home.css";
function HomePage() {
  return (
    <div className="mainHomePage">
      <NavBar />
      <Message />
    </div>
  );
}
export default HomePage;
