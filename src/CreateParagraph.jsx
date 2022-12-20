import { useState } from "react";
import Sphere from "./Sphere";

function CreateParagraph() {
  const [newP, setNewP] = useState([]);
  return (
    <>
      <p>{newP.length}</p>
      <button onClick={() => setNewP(newP.concat(<Sphere />))}>
        Add paragraph.
      </button>
      <p>Here I add a new paragraph</p>
      {...newP}
    </>
  );
}

export default CreateParagraph;
