import { useContext, useState } from "react";
import JsonContext from "./JsonContext";
import { getSortedJson } from "../Sort_Json";
import Info from "./Info";

// Fields
import InputField from "./Fields/InputField";
import FieldWrapper from "./FieldWrapper";
import RadioField from "./Fields/RadioField";
import SelectField from "./Fields/SelectField";

const getElement = (dataItem, index) => {
  const { uiType, label, description, validate, jsonKey, placeholder } =
    dataItem ?? {};
  const { required, immutable, options } = validate ?? {};

  if (!uiType || !jsonKey) {
    return null;
  }

  switch (uiType) {
    case "Select":
      if (!dataItem.validate.options) return null;
      return (
        <SelectField
          key={index}
          options={dataItem.validate.options}
          defaultValue={dataItem.validate.defaultValue}
          label={dataItem.label}
          jsonkey={dataItem.jsonKey}
          required={dataItem.validate.required}
          description={description}
        />
      );
      break;

    case "Radio":
      if (!dataItem.validate.options) return null;
      return (
        <RadioField
          key={jsonKey}
          options={dataItem.validate.options}
          defaultValue={dataItem.validate.defaultValue}
          jsonKey={dataItem.jsonKey}
          required={dataItem.validate.required}
          description={description}
        />
      );
      break;

    case "Group":
      if (!dataItem.subParameters) return null;
      getSortedJson(dataItem.subParameters);
      return (
        <div className="w-full" key={index}>
          <div className="border-b-10 mb-3 flex items-center">
            {dataItem.label.replace("_", " ")}
            {description && <Info description={description} label={label} />}
          </div>
          {dataItem.subParameters?.map((param, index) => {
            return <div key={jsonKey}>{getElement(param)}</div>;
          })}
        </div>
      );
      break;

    case "Ignore":
      if (!dataItem.subParameters || !dataItem.conditions) return null;
      getSortedJson(dataItem.subParameters);
      return (
        <>
          <div className="w-full">
            {dataItem.subParameters?.map((param, index) => {
              return <div key={index}>{getElement(param)}</div>;
            })}
          </div>
        </>
      );
      break;

    case "Input":
      return (
        <InputField
          label={label}
          required={required}
          placeholder={placeholder}
          immutable={immutable}
          description={description}
          jsonKey={jsonKey}
          key={jsonKey}
        />
      );
      break;

    default:
      return null;
  }
};

const Form = () => {
  const { jsonData, updateJsonData } = useContext(JsonContext);
  const [radioState, setRadioState] = useState([]);

  return (
    <div className="flex items-center justify-center w-1/2 h-auto formbg">
      <form className="bg-base-100 formbg text-gray-300 w-5/6 h-5/6 overflow-auto rounded-xl border-2 border-indigo-700 px-3 py-4 shadow-lg">
        <div className="text-center text-4xl font-bold pb-5 underline underline-offset-4">
          Generated Form
        </div>
        {jsonData?.length !== 0 &&
          jsonData?.map((dataItem, index) => {
            return <FieldWrapper>{getElement(dataItem, index)}</FieldWrapper>;
          })}
      </form>
    </div>
  );
};

export default Form;
