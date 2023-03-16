import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from '../../components/Header';
import {title, colors, parameters} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Button, SocialIcon} from 'react-native-elements';

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
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.StyledButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10}}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={{...styles.text1}}>New on Eat-Now ?</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          titleStyle={styles.CreateButtonTitle}
          title="Create an account"
          buttonStyle={styles.CreateButton}
        />
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
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  CreateButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#31493c',
    height: 40,
    paddingHorizontal: 20,
  },
  CreateButtonTitle: {
    color: '#31493c',
    fontSize: 16,
    fontWeight: 'bold',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 3,
  },
});
