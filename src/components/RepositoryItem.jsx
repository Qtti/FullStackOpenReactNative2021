import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: theme.colors.itemBackground,
      display: 'flex'
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    flexRow: { 
        flexDirection: 'row',
    },
    flexRowMirror: { 
        flexDirection: 'row-reverse',
    },
    flexColumn: { 
        flexDirection: 'column',
    },
    flexColumnMirror: { 
        flexDirection: 'column-reverse',
    },
    flexItemA: {
        flexGrow: 0,
        margin: 5
    },
    flexItemB: {
        flexGrow: 1,
        margin: 5
    }, 
    itemBox: {
        flexGrow: 0,
        backgroundColor: 'blue',
        padding: 5,
        margin: 5,
        borderRadius: 3,
        color: theme.colors.textPrimaryDarkBg,
        fontWeight: "bold"

    },
    primaryText:
    {
        fontWeight: "bold",
        color: 'black'

    },
    alternativeText:
    {
        color: 'grey'
    },
    center: 
    {
        textAlign: 'center'
    }
});

const repositoryItem = ({ item }) => {
    return (
    <View style={styles.container}>
        <View style={styles.flexRow}>
            <View style={styles.flexItemA}>
                <Image style={styles.tinyLogo} source={{uri: item.ownerAvatarUrl}}></Image>
            </View>
            <View style={styles.flexColumn}>
                <Text style={[styles.flexItemB, styles.primaryText]}>{item.fullName}</Text>
                <Text style={[styles.flexItemB, styles.alternativeText]}>{item.description}</Text>
                <View style={styles.flexRow}>
                    <Text style={styles.itemBox}>{item.language}</Text>
                </View>
            </View>
        </View>
        <View style={styles.flexRow}>
            <View style={[styles.flexColumnMirror, styles.flexItemB]}>
                <Text style={[styles.alternativeText, styles.center]}>Stars</Text>
                <Text style={[styles.primaryText, styles.center]}>{item.stargazersCount}</Text>
            </View>
            <View style={[styles.flexColumnMirror, styles.flexItemB]}>
                <Text style={[styles.alternativeText, styles.center]}>Forks</Text>
                <Text style={[styles.primaryText, styles.center]}>{item.forksCount}</Text>
            </View>
            <View style={[styles.flexColumnMirror, styles.flexItemB]}>
                <Text style={[styles.alternativeText, styles.center]}>Reviews</Text>
                <Text style={[styles.primaryText, styles.center]}>{item.reviewCount}</Text>
            </View>
            <View style={[styles.flexColumnMirror, styles.flexItemB]}>
                <Text style={[styles.alternativeText, styles.center]}>Rating</Text>
                <Text style={[styles.primaryText, styles.center]}>{item.ratingAverage}</Text>
            </View>
        </View>
        
        
    </View>
  );};

export default repositoryItem;
  