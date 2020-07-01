import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/fab';
import Zoom from "@material-ui/core/Zoom";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isZoomIn, setZoomIn] = useState(false);

  function ZoomIn(){

    setZoomIn(true);
  }

  function writeNote(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function addNote(event) {
    props.onAdd(note);
    setZoomIn(false);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
       {isZoomIn ? <input
          name="title"
          onChange={writeNote}
          value={note.title}
          placeholder="Title"
        /> : null} 
        <textarea
          name="content"
          onChange={writeNote}
          onClick={ZoomIn}
          value={note.content}
          placeholder="Take a note..."
          rows={isZoomIn ? 3:1}
        />
        <Zoom in={isZoomIn}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
