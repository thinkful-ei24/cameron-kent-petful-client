import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import { fetchCat, fetchDog, deleteCat, deleteDog } from './actions/index';


class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  // onAdoptPet(e) {
  //   console.log(e);
  // }

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={deleteDog}/>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={deleteCat}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);