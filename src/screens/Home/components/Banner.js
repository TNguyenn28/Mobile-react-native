import {Image, Text, View, StyleSheet} from 'react-native';
const Banner = () => {
  return (
    <View style={BannerStyle.bannerWrapper}>
      <Image
        style={BannerStyle.image}
        source={require('../../../assets/images/banner.png')}
      />
      <View style={BannerStyle.bannerContent}>
        <Text style={BannerStyle.headingContent}>
          Save extra on every order
        </Text>
        <Text style={BannerStyle.titleContent}>
          Etiam mollis metus non faucibus sollicitudin.
        </Text>
      </View>
    </View>
  );
};

export default Banner;

const BannerStyle = StyleSheet.create({
  bannerWrapper: {
    position: 'relative',
    height: 140,
    marginBottom: 19,
  },

  bannerContent: {
    width: 124,
    position: 'absolute',
    top: 10,
    left: 24,
  },

  headingContent: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    color: '#1987FB',
    marginBottom: 6,
  },

  titleContent: {
    fontWeight: '300',
    fontSize: 12,
    color: '#090F47A6',
    lineHeight: 16,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});
