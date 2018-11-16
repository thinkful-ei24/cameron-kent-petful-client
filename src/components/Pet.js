import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pet extends Component {
  render() {
    if (!this.props.petToAdopt) {
      return <section>Loading...</section>;
    }
    return (
      <section>
        <header>Name: {this.props.petToAdopt.name}</header>
        <main>
          <dl>
            <dt><img src={this.props.petToAdopt.imageURL} /></dt>
            <dd>{this.props.petToAdopt.imageDescription}</dd>
            <dt>{this.props.petToAdopt.sex}</dt>
            <dt>{this.props.petToAdopt.age}</dt>
            <dt>{this.props.petToAdopt.breed}</dt>
            <dt>{this.props.petToAdopt.story}</dt>
          </dl>
        </main>
        <button onClick={() => this.props.dispatch(this.props.onAdoptPet())}>Adopt!</button>
      </section>
    );
  }
}

export default connect()(Pet);