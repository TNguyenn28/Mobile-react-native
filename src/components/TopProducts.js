import {Text, View, ScrollView} from 'react-native';
import TProductsStyle from '../styles/TProductsStyle';
import Card from '../components/Card';

const TopProducts = () => {
  return (
    <View style={TProductsStyle.TProWrapper}>
      <Text style={TProductsStyle.title}>Diabetic Diet</Text>
      <ScrollView horizontal={true}>
        <Card  image = {require('../images/Sugar.png')} name= {'Sugar Substitute' }/>
        <Card  image = {require('../images/Juices&Vinegars.png')} name= {'Juices & Vinegars' }/>
        <Card  image = {require('../images/VitaminsMedicines.png')} name= {'Vitamins Medicines' }/>
        <Card  image = {require('../images/Sugar.png')} name= {'Sugar Substitute' }/>
        <Card  image = {require('../images/Juices&Vinegars.png')} name= {'Juices & Vinegars' }/>
        <Card  image = {require('../images/VitaminsMedicines.png')} name= {'Vitamins Medicines' }/>
      </ScrollView>
    </View>
  );
};
export default TopProducts;
