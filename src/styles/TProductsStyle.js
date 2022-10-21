import { StyleSheet } from "react-native";

const TProductsStyle = StyleSheet.create ({
    TProWrapper:{
        marginBottom: 15
    },

    title:{
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: "#090F47",
    },

    CardBody: {
        width: 110,
        height: 162,
        marginRight: 10,
        marginTop: 16,
      },
    
      CardImage: {
        width: '100%',
        height: 99,
      },
    
      CardTitle: {
        height: 63,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: '#090F47',
        backgroundColor: '#F5F7FA',
      },

});

export default TProductsStyle;