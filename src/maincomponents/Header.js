import "../styles_maincomp/header.css";

const handleClick = (event) => {
  console.log("I WAS CLICKED, SUBSCRIBE BUTTON!");
  // hit the endpoint in the server, sending it all the form information
};

const Header = () => {
  return (
    <div className="header">
      <div className="title-description">
        <h3>HELLO</h3>
        <div className="incc">ICNA NASSAU COMMUNITY</div> //whydid u remove the
        class
        <h1>Welcome to Our Center</h1>
        <h4>1529 Jericho Turnpike</h4>
        <div onClick={handleClick}>SUBSCRIBE!</div>
        {/* <input onChange={}></input> */}
        <h3>Providing community services and activities</h3>
        <div className="open">
          <h3>Open to Everyone</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
