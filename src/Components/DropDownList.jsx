import { useState } from "react";
import ArticlesByTopic from "./ArticlesByTopic";

const DropDownList = () => {
  const options = [
    { label: "Title", value: "title" },
    { label: "Posted", value: "created_at" },
    { label: "Topics", value: "topics" },
    { label: "Votes number", value: "votes" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="sortby-container">
      <div>
        <select value={value} onChange={handleChange}>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button className="sortby-container-items">Sort by</button>
      </div>
    </div>
  );
};

export default DropDownList;
