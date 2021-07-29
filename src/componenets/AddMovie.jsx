import React from 'react'
import { useState } from 'react'
import {Button, Modal} from "react-bootstrap"

const AddMovie = ({handleMovie}) => {
    const [title,setTitle] =useState("");
    const [description,setDescription] =useState("");
    const [posterURL,setPosterURL] =useState("");
    const [rate,setRate] =useState(0);
    const id=Math.random();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h4>Title :</h4>
              <input onChange={(e)=>setTitle(e.target.value)} type="text"/>
              <h4>Description :</h4>
              <input onChange={(e)=>setDescription(e.target.value)} type="text"/>
              <h4>PosterURL</h4>
              <input onChange={(e)=>setPosterURL(e.target.value)} type="url" placeholder="image address ..." />
              <h4>Rate</h4>
              <input onChange={(e)=>setRate(Number(e.target.value))} type="number"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>(handleClose(),handleMovie({title,description,posterURL,rate,id}))}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  
}

export default AddMovie
