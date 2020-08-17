import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { loadBeers } from './../services/beers';

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: [],
    };
  }

  componentDidMount() {
    loadBeers()
      .then((data) => {
        console.log(data);
        this.setState({
          loaded: true,
          beers: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.loaded && (
          <section>
            {this.state.beers.map((beer) => {
              return (
                <div
                  key={beer._id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={beer.image_url}
                    alt=""
                    style={{ maxHeight: '100px' }}
                  />
                  <div>
                    <Link to={`/beers/${beer._id}`}> {beer.name} </Link>
                    <h5>{beer.tagline} </h5>
                    <p>{`Created by: ${beer.name}`}</p>
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </div>
    );
  }
}

export default Beers;
