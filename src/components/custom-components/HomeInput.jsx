import React from "react";
import dateIcon from "../../assets/fontisto_date.svg";

function HomeInput({ data, index, onInputChange }) {
  // const [inputValue, setInputValue] = useState("");
  // const handleChange = (event) => {
  //       setInputValue(event.target.value);
  //     };

  return (
    <div className="">
      <label className="text-[0.875rem] text-[#898989]">{data.title}</label>
      <div className="flex items-center justify-between  border border-[#8A8A8A] rounded-[0.18rem]">
        <div className="pl-4">
          <input
            type="text "
            className="text-[0.875rem] outline-none font-bold"
            value={data.inputVal}
            onChange={(e) => onInputChange(index, e.target.value)}
          />
        </div>
        <div className="border border-l-[#8A8A8A]  p-2 " key={index}>
          {index === 0 || index === 1 ? (
            <span className="text-[0.875rem]">{data.buttontext}</span>
          ) : index === 2 ? (
            <img src={dateIcon} alt="icon" className="w-[1.25rem]" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HomeInput;
