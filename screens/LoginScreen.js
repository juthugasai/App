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
import LoginScreen2 from './LoginScreen2';
//import firebase from 'firebase';
//import db from '../config';
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      contact: '',
    };
  }

  userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then((response) => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            mobile_number: this.state.mobileNumber,
            username: this.state.username,
            address: this.state.address,
          });
          return Alert.alert('User Added Successfully', '', [
            { text: 'OK', onPress: () => this.setState({ isVisible: false }) },
          ]);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };
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
            style={styles.loginBox}
            placeholder="Email"
            placeholderTextColor="blue"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox2}
            placeholder="Password"
            placeholderTextColor="blue"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox5}
            placeholder="Phone Number"
            placeholderTextColor="blue"
            maxLength={10}
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({
                contact: text,
              });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.userSignUp();
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
  loginBox5: {
    width: 380,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'blue',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },

  loginBox: {
    width: 380,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'blue',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 50,
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
  text: {
    color: 'blue',
    fontWeight: '1000',
    fontSize: 30,
    marginLeft: 100,
  },
});
