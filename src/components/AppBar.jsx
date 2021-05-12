import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    flexDirection: 'row',
    backgroundColor: theme.colors.appBarBackground,
    padding: 10
    // ...
  },
  link: {
    color: theme.colors.textPrimaryDarkBg
  },
  flexItemA: {
      flexGrow: 0,
  },
  flexItemB: {
    flexGrow: 1,
  }
  // ...
});

const OnPressRepositories = () => console.log("moi222");

const AppBar = () => {
    return  <View style={styles.container}>
                <Pressable onPress={OnPressRepositories}>
                    <View style={styles.flexItemB}>
                        <Text style={styles.link}>Repositories</Text>
                    </View>
                </Pressable>
            </View>;
};

export default AppBar;