import {StyleSheet} from 'react-native';

const ProductStyle = StyleSheet.create({
    ProWrapper:{
        marginBottom: 15
    },

    title:{
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: "#090F47",
    },

    ProCards:{
        flex: 1,
        flexDirection: 'row',
    },

    CardBody: {
        width: 157,
        height: 250,
        marginRight: 15,
        marginTop: 16,
        backgroundColor: '#EBEBEB',
        borderRadius: 13,
      },
    
      CardImage: {
        width: 116,
        height: 118,
        margin: 19,
      },
    
      CardTitle: {
        marginTop: 10,
        marginLeft: 19,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: '#090F47',
      },

      CardPrice:{
        marginLeft: 19,
        fontWeight: '600',
        fontSize: 16,
        color: '#090F47',

      }
  
});

export default ProductStyle;
