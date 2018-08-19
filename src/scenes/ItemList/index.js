import React, { Component } from 'react';
import _ from 'lodash';

import ShopImage from '../../component/ShopImage';
import ShopList from './components/ShopList';

import MensOuterwareImg from '../../images/mens_outerwear.jpg';
import LadiesOuterwareImg from '../../images/ladies_outerwear.jpg';
import MensTshirtImg from '../../images/mens_tshirts.jpg';
import LadiesTshirtImg from '../../images/ladies_tshirts.jpg';

import MensOuterwareData from '../../data/mens_outerwear.json';
import LadiesOuterwareData from '../../data/ladies_outerwear.json';
import MensTshirtData from '../../data/mens_tshirts.json';
import LadiesTshirtData from '../../data/ladies_tshirts.json';

const ItemListData = [
  {
    listType: 'mens_outerwear',
    imgSrc: MensOuterwareImg,
    title: 'Mens Outerware',
    listData: MensOuterwareData,
  },
  {
    listType: 'ladies_outerwear',
    imgSrc: LadiesOuterwareImg,
    title: 'Ladies Outerware',
    listData: LadiesOuterwareData,
  },
  {
    listType: 'mens_tshirt',
    imgSrc: MensTshirtImg,
    title: 'Mens Tshirt',
    listData: MensTshirtData,
  },
  {
    listType: 'ladies_tshirt',
    imgSrc: LadiesTshirtImg,
    title: 'Ladies Tshirt',
    listData: LadiesTshirtData,
  },
];
class ItemList extends Component {
  state = {
    imgSrc: '',
    title: '',
    listData: [],
    listType: '',
  };

  componentDidMount = () => {
    const { listType } = this.props.match.params;
    const currentItem = _.filter(ItemListData, { listType });
    const { imgSrc, title, listData } = currentItem[0];
    this.setState({
      imgSrc,
      title,
      listData,
      listType: this.props.match.params.listType,
    });
  };

  render() {
    const { imgSrc, title, listData, listType } = this.state;
    return (
      <article>
        <ShopImage imgSrc={imgSrc} imgAlt={title} />
        <ShopList title={title} listData={listData} currentPath={listType} />
      </article>
    );
  }
}

export default ItemList;
