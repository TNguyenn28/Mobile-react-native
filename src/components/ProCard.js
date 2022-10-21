import {Image, Text, View} from 'react-native';
import ProductStyle from '../styles/ProductStyle';

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

