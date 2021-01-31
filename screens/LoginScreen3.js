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
//import db from '../config';
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      contact: '',
    };
  }

 
  render() {
    return (
      <View>
        <View>
          
          <TextInput
            style={styles.loginBox4}
            placeholder="First Name"
            placeholderTextColor="blue"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                firstName: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox3}
            placeholder="Last Name"
            placeholderTextColor="blue"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                lastName: text,
              });
            }}
          />
         
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('LoginScreen2');
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
    marginTop: 70,
  },
  loginBox3: {
    width: 380,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'blue',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  
  
});
