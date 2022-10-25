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

import {Image, StyleSheet, Text, View} from 'react-native';

const Card = (props) => {
  return (
    <View style={CardStyle.CardBody}>
      <Image style={CardStyle.CardImage} source= {props.image}/>
      <Text style={CardStyle.CardTitle}> {props.name} </Text>
      <Text  style={CardStyle.CardPrice}>{props.price} </Text>
    </View>
  );
};

export default Card;

const CardStyle = StyleSheet.create ({
  CardBody: {
    width: 110,
    height: 162,
    marginRight: 10,
    marginTop: 16,
    backgroundColor: '#F5F7FA',
  },

  CardImage: {
    width: '100%',
    height: 99,
    marginBottom: 14
  },

  CardTitle: {
    height: 63,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#090F47',
    marginLeft: 14,
  },
});

