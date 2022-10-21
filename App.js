import { View } from "react-native";
import Banner from "./src/components/Banner";
import TopProducts from "./src/components/TopProducts";
import Products from "./src/components/Products";

import Styles from "./src/styles/Styles";
const App = () => {
  return (
    <View style={Styles.wrapper}>
      <Banner></Banner>
      <TopProducts/>
      <Products/>
    </View>
  )
}

export default App;