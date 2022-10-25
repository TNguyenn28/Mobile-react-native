import {Text, View, StyleSheet} from 'react-native';
import ProCard from '../components/ProCard';

const Products = () => {
  return (
    <View style={ProStyle.ProWrapper}>
      <Text style={ProStyle.title}>All Products</Text>
      <View style={ProStyle.ProCards}>
        <ProCard
          image={require('../images/Accucheck.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
        <ProCard
          image={require('../images/Accucheck2.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
        <ProCard
          image={require('../images/Accucheck.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
        <ProCard
          image={require('../images/Accucheck2.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
      </View>
    </View>
  );
};
export default Products;

const ProStyle = StyleSheet.create({
  ProWrapper: {
    marginTop: 15,
  },

  title: {
    marginBottom: 25,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#090F47',
  },

  ProCards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
