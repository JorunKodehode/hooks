import { useState } from "react";
import AddParagraph from "../AddParagraph";

function CreateParagraph() {
  const [newP, setNewP] = useState([]);
  return (
    <>
      <p>{newP.length}</p>
      <button onClick={() => setNewP(newP.concat(<AddParagraph />))}>
        Add paragraph.
      </button>
      <p>Here I add a new paragraph</p>
      {...newP}
    </>
  );
}

export default CreateParagraph;
