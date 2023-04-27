import { createContext, useState } from "react";

const JsonContext = createContext();
export default JsonContext;

export function JsonFormat({ children }) {
  const [jsonData, setJsonData] = useState([]);
  const updateJsonData = (jsonData) => {
    setJsonData(jsonData);
  };
  return (
    <JsonContext.Provider value={{ jsonData, updateJsonData }}>
      <div className="flex h-screen w-screen">{children}</div>
    </JsonContext.Provider>
  );
}
