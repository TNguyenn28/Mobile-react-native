import {Image, StyleSheet, Text, View} from 'react-native';

const ProCard = (props) => {
  return (
    <View style={ProductStyle.CardBody}>
      <Image style={ProductStyle.CardImage} source= {props.image}/>
      <Text style={ProductStyle.CardTitle}> {props.name} </Text>
      <Text  style={ProductStyle.CardPrice}>{props.price} </Text>
    </View>
  );
};

export default ProCard;

 const ProductStyle = StyleSheet.create ({
  CardBody: {
    width: 160,
    height: 250,
    marginTop: 16,
    backgroundColor: '#EBEBEB',
    borderRadius: 13,
  },

  CardImage: {
    width: 116,
    height: 118,
    margin: 19,
  },

  CardTitle: {
    marginTop: 10,
    marginLeft: 19,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#090F47',
  },

  CardPrice:{
    marginLeft: 19,
    fontWeight: '600',
    fontSize: 16,
    color: '#090F47',

  }

 });

