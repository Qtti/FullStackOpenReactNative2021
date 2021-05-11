import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.9,
    padding: 10
    // ...
  },
  link: {
    color: 'white'
  },
  flexItemA: {
      flexGrow: 0,
      padding: 10
  },
  flexItemB: {
    flexGrow: 1,
    padding: 10
  }
  // ...
});

const OnPressRepositories = () => console.log("moi222");

const AppBar = () => {
    return  <View style={styles.container}>
                <Pressable onPress={OnPressRepositories}>
                    <View style={styles.flexItemA}>
                        <Text style={styles.link}>Repositories</Text>
                    </View>
                </Pressable>
                <View style={styles.flexItemB}>
                    <Text style={styles.link}>Moi2</Text>
                </View>
            </View>;
};

export default AppBar;