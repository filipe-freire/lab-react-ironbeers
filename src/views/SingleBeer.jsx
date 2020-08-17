import React, { Component } from 'react';
import Header from './Header';
import { loadSingleBeer } from './../services/beers';

class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beer: [],
    };
  }

  componentDidMount() {
    loadSingleBeer(this.props.match.params.id)
      .then((data) => {
        const beer = data;
        console.log(beer);
        this.setState({
          loaded: true,
          beer: beer,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const beer = this.state.beer;
    return (
      <div>
        <Header />
        <img src={beer.image_url} alt="" style={{ maxHeight: '200px' }} />
        <h1>{beer.name}</h1>
        <h5>{beer.attenuation_level}</h5>
        <h5>{beer.tagline} </h5>
        <h5>{beer.first_brewed} </h5>
        <p>{beer.description} </p>
        <p>{beer.contributed_by} </p>
      </div>
    );
  }
}

export default SingleBeer;
