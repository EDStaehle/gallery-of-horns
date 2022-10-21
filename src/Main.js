import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SelectedNumber from './SelectedNumber';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      selectedVal: '',
      selectedData: this.props.data,
    }
  }
  handleSelect = (event) => {
    event.preventDefault();
    let selected = event.target.selected.value;
    if (selected === '1') {
      let newData = this.props.data.filter(b => b.horns === 1);
      this.setState({
        selectedData: newData
      })
    } else if (selected === '2') {
      let newData = this.props.data.filter(b => b.horns === 2);
      this.setState({
        selectedData: newData
      })
    } else if (selected === '3') {
      let newData = this.props.data.filter(b => b.horns === 3);
      this.setState({
        selectedData: newData
      })
    } else if (selected === 'many'){
      let newData = this.props.data.filter(b => b.horns > 3);
      this.setState({
        selectedData: newData
      })
    }
  }
  render() {
    let beasts = this.state.selectedData.map((animal, index) => {
      return <HornedBeast
        title={animal.title}
        image_url={animal.image_url}
        key={index}
        openModal={this.props.openModal}
      />
    });
    return (
      <>
        <main>
          <SelectedNumber
          handleSelect = {this.handleSelect}
          />
          <Container id='contain' fluid>
            
            <Row id='row' xs={1} sm={1} md={2} lg={4} xxl={5} className='g-4'>
              {beasts}
            </Row>
          </Container>

        </main>
      </>
    )
  }
}
export default Main;