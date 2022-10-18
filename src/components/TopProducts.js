import { Text, View, Image } from "react-native"
import TProductsStyle from "../styles/TProductsStyle";

const TopProducts = () => {
    return (
        <View style={TProductsStyle.TProWrapper}>
            <Text style={TProductsStyle.title}>Diabetic Diet</Text>
            <View style={TProductsStyle.TProCard}>
                <View style={TProductsStyle.Card}>
                    <Image style={TProductsStyle.ImageCard} source={require("../images/Sugar.png")}></Image>
                    <Text>Sugar Substitute</Text>
                </View>
            </View>
        </View>
    )
};
export default TopProducts;