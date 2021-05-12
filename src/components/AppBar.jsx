import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: theme.colors.appBarBackground,
    padding: 10,
    // ...
  },
  link: {
    color: theme.colors.textPrimaryDarkBg
  },
  item: {
    margin: 10,
  }
  // ...
});

//const OnPressRepositories = () => console.log("moi222");

const AppBar = () => {
    return  <View style={styles.container}>
              <ScrollView horizontal>
                <View style={styles.item}>
                  <Link to="/">
                    <Text style={styles.link}>Repositories</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View><View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
                <View style={styles.item}>
                  <Link to="/signin">
                    <Text style={styles.link}>Sign in</Text>
                  </Link>
                </View>
              </ScrollView>
            </View>;
};

export default AppBar;