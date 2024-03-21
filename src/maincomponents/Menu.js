import MenuItem from "./MenuItem";

const renderMenuItems = () => {
  let items = ["home", "about"];

  let itemsDiv = items.map((i) => <MenuItem name={i} />);

  return itemsDiv;
};

const Menu = () => {
  return (
    <div className="navlist">
      <MenuItem name="home" />
      <MenuItem name="about" />
    </div>
  );
};

export default Menu;
