import { Header } from "./Header";
import DropDownList from "./DropDownList";

const Articles = () => {
  return (
    <div>
      <Header title={"I am not sure yet"} />
      <DropDownList className="sortby-articles" />
      <p>I am here in articles...</p>
    </div>
  );
};

export default Articles;
