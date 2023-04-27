import Editor from "@monaco-editor/react";
import JsonContext from "./JsonContext";
import { useContext } from "react";
import { getSortedJson } from "../Sort_Json";

const JsonEditor = () => {
  const { jsonData, updateJsonData } = useContext(JsonContext);
  function handleEditorChange(value) {
    const data = JSON.parse(value);
    if (data) {
      getSortedJson(data);
    }
    updateJsonData(data);
  }


  return (
    <Editor
      theme="vs-dark"
      width="50%"
      defaultLanguage="json"
      defaultValue={JSON.stringify(jsonData)}
      onChange={handleEditorChange}
    />
  );
};

export default JsonEditor;
