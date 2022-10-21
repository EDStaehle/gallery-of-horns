import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




class SelectedNumber extends React.Component {
  
  render() {
    return (
      
        <Form onSubmit={this.props.handleSelect}>
          <Form.Group>
            <legend>Selected Numbers</legend>
            <Form.Select name="selected" id="">
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="many">many</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
    )
  }
}
export default SelectedNumber;
