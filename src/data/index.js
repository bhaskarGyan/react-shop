import MensOuterwareData from './mens_outerwear.json';
import LadiesOuterwareData from './ladies_outerwear.json';
import MensTshirtData from './mens_tshirts.json';
import LadiesTshirtData from './ladies_tshirts.json';

import MensOuterwareImg from '../images/mens_outerwear.jpg';
import LadiesOuterwareImg from '../images/ladies_outerwear.jpg';
import MensTshirtImg from '../images/mens_tshirts.jpg';
import LadiesTshirtImg from '../images/ladies_tshirts.jpg';

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

export { ItemListData, LadiesTshirtData };
