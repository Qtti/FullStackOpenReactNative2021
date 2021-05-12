import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    flexDirection: 'row',
    backgroundColor: theme.colors.appBarBackground,
    padding: 10,
    display: 'flex'
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

//const OnPressRepositories = () => console.log("moi222");

const AppBar = () => {
    return  <View style={styles.container}>
                  <View style={styles.flexItemB}>
                    <Link to="/">
                      <Text style={styles.link}>Repositories</Text>
                    </Link>
                  </View>
                  <View style={styles.flexItemB}>
                    <Link to="/signin">
                      <Text style={styles.link}>Sign in</Text>
                    </Link>
                  </View>
            </View>;
};

export default AppBar;