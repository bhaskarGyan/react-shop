import React, { Component } from 'react';
import ShopItem from './components/ShopItem';

import MensOuterwareImg from '../../images/mens_outerwear.jpg';
import LadiesOuterwareImg from '../../images/ladies_outerwear.jpg';
import MensTshirtImg from '../../images/mens_tshirts.jpg';
import LadiesTshirtImg from '../../images/ladies_tshirts.jpg';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <article>
        <ShopItem
          imgSrc={MensOuterwareImg}
          imgAlt="Men's Outerware"
          navigateTo="/list/mens_outerware"
          shopItemHeading="Men's Outerware"
        />
        <ShopItem
          imgSrc={LadiesOuterwareImg}
          imgAlt="Ladies Outerware"
          navigateTo="/list/ladies_outerware"
          shopItemHeading="Ladies Outerware"
        />
        <ShopItem
          imgSrc={MensTshirtImg}
          imgAlt="Men's T-Shirts"
          navigateTo="/list/mens_tshirt"
          shopItemHeading="Men's T-Shirts"
        />
        <ShopItem
          imgSrc={LadiesTshirtImg}
          imgAlt="Ladies T-Shirts"
          navigateTo="/list/ladies_tshirt"
          shopItemHeading="Ladies T-Shirts"
        />
      </article>
    );
  }
}
export default Dashboard;
