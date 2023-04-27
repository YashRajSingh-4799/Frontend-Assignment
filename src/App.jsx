import JsonEditor from "./components/JsonEditor";
import Form from "./components/Form";
import { JsonFormat } from "./components/JsonContext";

function App() {
  return (
    <JsonFormat>
      <JsonEditor />
      <Form />
    </JsonFormat>
  );
}

export default App;
