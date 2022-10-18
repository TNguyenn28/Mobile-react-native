import {Image, Text, View} from 'react-native';
import BannerStyle from "../styles/BannerStyle";
const Banner = () => {
  return (
    <View style={BannerStyle.bannerWrapper}>
        <Image style={BannerStyle.image} source={require("../images/banner.png")} />
        <View style={BannerStyle.bannerContent}>
            <Text style={BannerStyle.headingContent}>Save extra on every order</Text>
            <Text style={BannerStyle.titleContent}>Etiam mollis metus non faucibus sollicitudin.</Text>
        </View>
        
      
    </View>
  );
};

export default Banner;
