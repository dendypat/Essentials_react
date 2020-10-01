import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          name: 'Facial Toner',
          image: './images/facial-toner.jpg',
          price: "$8",
          description: 'Refresh your skin with our alcohol-free facial toner. This non-drying gentle toner for oily skin and normal skin helps reduce excess oil.'
        },
        {
          id: 1,
          name: 'Custom Shampoo',
          image: './images/shampoo.jpg',
          price: '$25',
          description: 'Fully customizable according to your unique hair goals, and aesthetic preferences (including color + fragrance).'
        },
        {
          id: 2,
          name: 'Tropical Body Scrub',
          image: './images/tropicalbodyscrub.jpeg',
          price: '$7',
          description: 'Boost your glow and improve your texture when you buff away dry, dulling skin.'
        },
        {
          id: 3,
          name: 'Healing Amethyst Crystals',
          image: './images/amethyst.jpeg',
          price: '$5',
          description: 'Great to use for your own healing, in jewelry, or for good feng shui in your home'
        }
      ]
    };
  }

  render() {

    const product_list = this.state.products.map(product => {
      return (
        <div className="Home container">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <img src={product.image} alt={product.name} id="product_image"></img>
              </div>
              <div className="row">
                <div className="col">
                  <h2 id="product_name">{product.name}</h2>
                </div>
                <div className="col">
                  <h3 id="product_price">{product.price}</h3>
                </div>
              </div>
              <div className="overlay">
                <div className="col-5" id="product_description">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div >
        </div>
      );
    })

    return (
      <div key={product_list.id} className="container" >
        <div className="row">
          <div className="col">
            <div className="media">
              <iframe className="mx-auto" sr-only="Aromatherapy Video" width="560" height="315" src="https://www.youtube.com/embed/-3PDbSuCfYs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="row" id="video_caption">
            <span className="mx-auto">Bacon ipsum dolor amet hamburger jerky pork loin spare ribs, ball tip short ribs tri-tip corned beef sirloin. Burgdoggen strip steak tri-tip, shank pork belly pork frankfurter bresaola. Prosciutto salami burgdoggen, tri-tip alcatra meatloaf fatback pig short ribs ball tip pastrami. </span>
          </div>
        </div>
        <h1>Featured Products</h1>
        <div className="row">
          {product_list}
        </div>
      </div>
    );
  }
}
export default Home
