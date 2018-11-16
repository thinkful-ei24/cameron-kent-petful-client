import React, { Component } from 'react';

export default class Pet extends Component {
  render() {
    if (!this.props.petToAdopt) {
      return <section>Loading...</section>;
    }
    return (
      <section>
        <header>Dog: {this.props.petToAdopt.name}</header>
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
        <button onClick={e => this.props.onAdoptPet(e)}>Adopt!</button>
      </section>
    );
  }
}
