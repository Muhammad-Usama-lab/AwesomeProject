import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // we will create a global navigation service.
      // then there will be no need to destructure "navigation" from props.
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    // avoid using inline styling.
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* no need to set color to black, by default it is black */}
      <Text style={{color: 'black'}}>Splash Screen</Text>
    </View>
  );
};

export default Splash;
// make a separate file of styles if screen is big. Here it is fine.
const styles = StyleSheet.create({});
