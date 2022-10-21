// import {Image, Text, View} from 'react-native';
// import CardsStyle from '../styles/CardsStyle';

// const Card = () => {
//   return (
//     <View style={CardsStyle.CardBody}>
//       <Image style={CardsStyle.CardImage} source={require('../images/Sugar.png')}></Image>
//       <Text style={CardsStyle.CardTitle}>Sugar Substitute</Text>
//     </View>
//   );
// };

// export default Card;

import {Image, Text, View} from 'react-native';
import TProductsStyle from '../styles/TProductsStyle';

const Card = (props) => {
  return (
    <View style={TProductsStyle.CardBody}>
      <Image style={TProductsStyle.CardImage} source= {props.image}/>
      <Text style={TProductsStyle.CardTitle}> {props.name} </Text>
      <Text  style={TProductsStyle.CardPrice}>{props.price} </Text>
    </View>
  );
};

export default Card;

