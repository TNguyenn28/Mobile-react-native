// import {Text, View, ScrollView} from 'react-native';
// import ProductStyle from '../styles/ProductStyle';
// import ProCard from '../components/ProCard';

// const TopProducts = () => {
//   return (
//     <View style={ProductStyle.ProWrapper}>
//       <Text style={ProductStyle.title}>All Products</Text>
//       <ScrollView style={ProductStyle.ProCards} >
//         <ProCard  image = {require('../images/Accucheck.png')} name= {'Sugar Substitute'} price = {' $200'}/>
//         <ProCard  image = {require('../images/Accucheck2.png')} name= {'Sugar Substitute'} price = {' $200'}/>
//         <ProCard  image = {require('../images/Accucheck.png')} name= {'Sugar Substitute'} price = {' $200'}/>
//         <ProCard  image = {require('../images/Accucheck2.png')} name= {'Sugar Substitute'} price = {' $200'}/>
//       </ScrollView>
//     </View>
//   );
// };
// export default TopProducts;

import {Text, View, ScrollView} from 'react-native';
import ProductStyle from '../styles/ProductStyle';
import ProCard from '../components/ProCard';

const TopProducts = () => {
  return (
    <View style={ProductStyle.ProWrapper}>
      <Text style={ProductStyle.title}>All Products</Text>
      <ScrollView style={ProductStyle.ProCards} >
        <ProCard  image = {require('../images/Accucheck.png')} name= {'Sugar Substitute'} price = {' $200'}/>
        <ProCard  image = {require('../images/Accucheck2.png')} name= {'Sugar Substitute'} price = {' $200'}/>
        <ProCard  image = {require('../images/Accucheck.png')} name= {'Sugar Substitute'} price = {' $200'}/>
        <ProCard  image = {require('../images/Accucheck2.png')} name= {'Sugar Substitute'} price = {' $200'}/>
      </ScrollView>
    </View>
  );
};
export default TopProducts;
