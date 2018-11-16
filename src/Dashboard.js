import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import { fetchCat, fetchDog, deleteCat, deleteDog } from './actions/index';


class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Here are the pets for adoption</h1>
        <div className="pets">
          <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={deleteDog}/>
          <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={deleteCat}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);