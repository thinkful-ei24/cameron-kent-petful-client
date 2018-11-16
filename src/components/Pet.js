import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pet extends Component {
  render() {
    if (!this.props.petToAdopt) {
      return <section>Loading...</section>;
    }
    return (
      <section>
        <header>
          <img src={this.props.petToAdopt.imageURL} alt={this.props.petToAdopt.imageDescription} />
          <h2><b>Name:</b> {this.props.petToAdopt.name}</h2>
        </header>
        <main>
          <dl>
            <dt><b>Gender: </b>{this.props.petToAdopt.sex}</dt>
            <dt><b>Age:</b> {this.props.petToAdopt.age}</dt>
            <dt><b>Breed:</b> {this.props.petToAdopt.breed}</dt>
            <dt><b>{this.props.petToAdopt.name}'s Story:</b> {this.props.petToAdopt.story}</dt>
          </dl>
        </main>
        <button onClick={() => this.props.dispatch(this.props.onAdoptPet())}>Adopt!</button>
      </section>
    );
  }
}

export default connect()(Pet);