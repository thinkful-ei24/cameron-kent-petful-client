import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <section className="dog-to-adopt">
          <header>Dog: {this.props.dogToAdopt.name}</header>
          <main>
            <dl>
              <dt><img src={this.props.dogToAdopt.imageURL} /></dt>
              <dd>{this.props.dogToAdopt.imageDescription}</dd>
              <dt>{this.props.dogToAdopt.sex}</dt>
              <dt>{this.props.dogToAdopt.age}</dt>
              <dt>{this.props.dogToAdopt.breed}</dt>
              <dt>{this.props.dogToAdopt.story}</dt>
            </dl>
          </main>
          <button>Adopt!</button>
        </section>
        <section className="cat-to-adopt">
          <header>Cat: {this.props.catToAdopt.name}</header>
          <main>
            <dl>
              <dt><img src={this.props.catToAdopt.imageURL} /></dt>
              <dd>{this.props.catToAdopt.imageDescription}</dd>
              <dt>{this.props.catToAdopt.sex}</dt>
              <dt>{this.props.catToAdopt.age}</dt>
              <dt>{this.props.catToAdopt.breed}</dt>
              <dt>{this.props.catToAdopt.story}</dt>
            </dl>
            <button>Adopt!</button>
          </main>
        </section>
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