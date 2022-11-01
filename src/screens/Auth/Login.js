import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Button style = {styles.btnLogin}
        title="GO TO MY APP"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper:{
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1
  }
});
