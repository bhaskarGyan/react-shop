import React, { Component } from 'react';
import _ from 'lodash';

import ShopImage from '../../component/ShopImage';
import ShopList from './components/ShopList';
import { ItemListData } from '../../data';

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
