import { View } from "react-native";
import Banner from "./src/components/Banner";
import TopProducts from "./src/components/TopProducts";
import Styles from "./src/styles/Styles";
const App = () => {
  return (
    <View style={Styles.wrapper}>
      <Banner></Banner>
      <TopProducts/>
    </View>
  )
}

export default App;