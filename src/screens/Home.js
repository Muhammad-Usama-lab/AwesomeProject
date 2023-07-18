import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


// NOTE: don't use inline styling

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      
      <Text style={{color: 'black', textAlign: 'center'}}>Home Page</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
