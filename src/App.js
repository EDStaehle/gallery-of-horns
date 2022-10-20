// imports
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './selectedBeats'
import data from './data.json'

// class componenet
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeastTitle: '',
    }
  }
  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }
  openModal = (title, img_url) => {
    this.setState({
      showModal: true,
      selectedBeastTitle: title,
      selectedBeastImg:img_url,
    })
  }
 
  render() {
    return (
      <>
        <Header
        
        />
        <Main
        data={data}
        openModal={this.openModal}
        />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.closeModal}
          title={this.state.selectedBeastTitle}
          img={this.state.selectedBeastImg}
          data={data}
          />
    
        <Footer />
      </>
    )
  }
}

// export
export default App;