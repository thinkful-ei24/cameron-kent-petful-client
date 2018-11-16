import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Pet from './components/Pet';
import { fetchCat, fetchDog, deleteCat, deleteDog } from './actions/index';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render() {
    return (
      <Router>
        <div className="dashboard">
          <h1>Here are the pets for adoption</h1>
          <Link to='/cat'><button>Show me a Cat</button></Link>
          <Link to='/dog'><button>Show me a Dog</button></Link>
          <Link to='/both'><button>Show me both</button></Link>
          <Route exact path='/dog' render={(props) => <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={deleteDog} />}></Route>
          <Route exact path='/cat' render={(props) => <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={deleteCat} />}></Route>
          <Route exact path='/both' render={(props) => {
            return (
              <div className="pets">
                <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={deleteDog} />
                <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={deleteCat} />
              </div>
            )
          }}></Route>
        </div>
      </Router>
        );
      }
    }
    
const mapStateToProps = state => ({
          catToAdopt: state.cat.data,
        dogToAdopt: state.dog.data
      });
      
export default connect(mapStateToProps)(Dashboard);