import { StyleSheet } from "react-native";

const BannerStyle = StyleSheet.create({
    bannerWrapper:{
        position: 'relative',
        height: 140,
        marginBottom: 19
    },

    bannerContent:{
        width: 124,
        position: "absolute",
        top: 10,
        left: 24,
    },

    headingContent:{
        fontWeight:"700",
        fontSize: 18,
        lineHeight: 24,
        color: '#1987FB',
        marginBottom: 6
    },

    titleContent:{
        fontWeight:"300",
        fontSize: 12,
        color: '#090F47A6',
        lineHeight: 16
    },

    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }

    

})

export default BannerStyle;