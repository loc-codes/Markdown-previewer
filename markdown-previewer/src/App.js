import { useState } from "react";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";

function App() {

  const [preview, setPreview] = useState("")

  const updatePreviewer = (text) => {
    setPreview(text)
  }

  return (
    <div className="App">
      <Editor updatePreviewer={updatePreviewer}/>
      <Previewer text={preview}/>
    </div>
  );
}

export default App;
