import Button from "./Button";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-medium">Task Tracker</h1>
      <Button text="Add task"></Button>
    </div>
  );
};

export default Header;
