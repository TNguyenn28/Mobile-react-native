import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Card from './Card';

const TopProducts = () => {
  return (
    <View style={TopPro.TProWrapper}>
      <Text style={TopPro.title}>Diabetic Diet</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card
          image={require('../../../assets/images/Sugar.png')}
          name={'Sugar Substitute'}
        />
        <Card
          image={require('../../../assets/images/Juices&Vinegars.png')}
          name={'Juices & Vinegars'}
        />
        <Card
          image={require('../../../assets/images/VitaminsMedicines.png')}
          name={'Vitamins Medicines'}
        />
        <Card
          image={require('../../../assets/images/Sugar.png')}
          name={'Sugar Substitute'}
        />
        <Card
          image={require('../../../assets/images/Juices&Vinegars.png')}
          name={'Juices & Vinegars'}
        />
        <Card
          image={require('../../../assets/images/VitaminsMedicines.png')}
          name={'Vitamins Medicines'}
        />
      </ScrollView>
    </View>
  );
};
export default TopProducts;

const TopPro = StyleSheet.create({
  TProWrapper: {
    marginTop: 15,
  },

  title: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#090F47',
  },
});
