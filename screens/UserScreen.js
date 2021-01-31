import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ListView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class CyberChat extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <Text style={styles.logoText}>Cyber-Tech</Text>
          </View>
          <View style={styles.rightHeaderContainer}>
            <Icon name="search" color="#fff" size={23} style={{ padding: 5 }} />

            <Icon
              name="more-vert"
              color="#fff"
              size={23}
              style={{ padding: 5 }}
            />
          </View>
          
        </View>
        <View style={styles.contentContainer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingRight: 5,
  },
  leftHeaderContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  rightHeaderContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 6,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
});
