import Info from "../Info";

const SelectField = ({
  label,
  jsonKey,
  required = false,
  defaultValue,
  options,
  description = "",
}) => {
  let optionHasDesc = options.find(
    (option) => option.description && option.description !== ""
  );
  return (
    <div
      key={jsonKey}
      className="flex w-full items-center justify-between p-2 text-base"
    >
      <label htmlFor={jsonKey} className="flex  items-center">
        {label}
        <span className="text-rose-600">{required ? "*" : ""}</span>
        {(description || optionHasDesc) && (
          <Info description={description} label={label} options={options} />
        )}
      </label>
      <select
        className="select select-bordered border-indigo-700 border-2 forminput w-5/12 max-w-xs"
        defaultValue={defaultValue}
      >
        {!required && <option value={null}> </option>}
        {options.map((option, index) => {
          return (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
