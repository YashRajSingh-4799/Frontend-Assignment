import { useContext, useEffect, useState } from "react";
import Info from "../Info";

const RadioField = ({
  options,
  defaultValue,
  jsonKey,
  required = false,
  description,
}) => {
  const [selectedTab, setSelectedTab] = useState();

  const handleClick = (e) => {
    if (e.target.getAttribute("data-value") === selectedTab && !required) {
      setSelectedTab("null");
    } else {
      setSelectedTab(e.target.getAttribute("data-value"));
    }
  };

  useEffect(() => {
    setSelectedTab(defaultValue);
  }, []);
  return (
    <div
      className="flex flex-nowrap justify-between w-full overflow-auto gap-x-1 p-2"
      key={jsonKey}
    >
      {selectedTab &&
        options.map((option, index) => {
          return (
            <div
              key={index}
              className={`bg-blue-50 formbg shrink-0 text-base w-5/12 h-14 rounded-lg cursor-pointer flex items-center justify-center ${
                selectedTab === option.value
                  ? " border-indigo-700 border-4 forminput"
                  : "border-indigo-700 border-2 "
              }`}
              data-value={option.value}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {option.label}
              <span className="text-rose-600">
                {option.value === defaultValue && required ? "*" : ""}
              </span>
              {option.description && (
                <Info description={option.description} label={option.label} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default RadioField;
