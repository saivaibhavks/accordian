import { useState } from "react";
import "./Accordian.css";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

const Accordian = ({ data }) => {
  const [expand, setExpand] = useState(null);

  const toggleFunction = (index) => {
    setExpand((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container">
      <div>
        <h1>Accordion</h1>
      </div>
      {data.map((item, index) => (
        <div className="box" key={index}>
          <div>{item.title}</div>
          <div onClick={() => toggleFunction(index)}>
            {expand === index ? <AiFillCaretDown /> : <AiFillCaretRight />}
          </div>
          {expand === index && <div className="content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
