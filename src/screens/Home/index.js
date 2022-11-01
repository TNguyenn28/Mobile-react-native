import {ScrollView, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Banner from './components/Banner';
import TopProducts from './components/TopProducts';
import Products from './components/Products';

const Home = () => {
  return (
    <ScrollView>
      <View style={Styles.wrapper}>
        <Text style={Styles.return}>
          {' '}
          <Icon name="arrow-back" size={20} color="black" /> Diabetes Care{' '}
        </Text>
        <Banner />
        <TopProducts />
        <Products />
      </View>
    </ScrollView>
  );
};

export default Home;

const Styles = StyleSheet.create({
  wrapper: {
    padding: 24,
  },
  return: {
    fontSize: 16,
    fontWeight: '700',
    color: '#090F47',
    marginBottom: 18,
  },
});
