import React from 'react'
import {Navbar,Nav, Form, FormControl} from 'react-bootstrap'
import { Rating } from '@material-ui/lab'
const Filter = ({setSearch,setRate,rate}) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand>Movie App </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      {/* <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>setSearch(e.target.value)}
      />
    </Form>
    <Rating
          name="simple-controlled"
          value={rate}
          onChange={(event, newValue) => {
            setRate(newValue);
          }}
        />
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Filter
