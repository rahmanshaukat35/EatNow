import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from '../../components/Header';
import {title, colors} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const SignInScreen = () => {
  const [textInput2Focus, setTextInput2Focus] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrowleft" />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            ref={textInput1}
            style={styles.TextInput1}
            placeholder="Email"
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focus ? '' : 'fadeInLeft'}
            duration={400}>
            <Ionicons
              type="material"
              size={20}
              name="lock-closed"
              color={colors.grey3}
            />
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            secureTextEntry
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focus(false);
            }}
            onBlur={() => {
              setTextInput2Focus(true);
            }}
          />
          <Animatable.View
            animation={textInput2Focus ? '' : 'fadeInLeft'}
            duration={400}>
            <Ionicons
              type="material"
              size={20}
              name="eye-off"
              color={colors.grey3}
              style={{marginRight: 20}}
            />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
});
