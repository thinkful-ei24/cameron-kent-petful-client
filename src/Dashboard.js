import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';


class Dashboard extends Component {
  onAdoptPet(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={this.onAdoptPet}/>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={this.onAdoptPet}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  dogToAdopt: {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
});

export default connect(mapStateToProps)(Dashboard);