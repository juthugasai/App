import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from 'react-native';
import Avatar from 'react-avatar';

//import firebase from 'firebase'
//import db from '../config';
export default class LoginScreen2 extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      pin: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPin: '',
      isModalVisible: false,
    };
  }
  render() {
    return (
      <View>
        <View>
          
          <Image
            source={require('../assets/cyber.png')}
            style={{ height: 90, width: 100, marginLeft: 130, marginTop: 50 }}
          />
          <Text style={styles.text}>Cyber-Chat</Text>
          
          <TextInput
            style={styles.loginBox4}
            placeholder="PIN Number"
            placeholderTextColor="blue"
            maxLength={4}
            secureTextEntry={true}
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({
                pin: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox2}
            placeholder="Confirm PIN Number"
            placeholderTextColor="blue"
            maxLength={4}
            secureTextEntry={true}
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({
                confirmPin: text,
              });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('');
          }}>
          <Image
            source={require('../assets/arrow.png')}
            style={{ height: 50, width: 50, marginLeft: 300 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginBox4: {
    width: 380,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'blue',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 100,
  },
  loginBox2: {
    width: 380,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'blue',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
   text:{
        color:'blue',
        fontWeight:'1000',
        fontSize:30,
        marginLeft:100
    },
});
