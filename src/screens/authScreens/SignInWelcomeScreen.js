import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, parameters} from '../../global/styles';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SignInWelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{fontSize: 26, color: colors.background2, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{fontSize: 26, color: colors.background2, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex: 6.3, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'flex-end',
          marginBottom: 5,
          marginTop: 5,
        }}>
        <View style={{marginHorizontal: 20}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.StyledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Button
            titleStyle={styles.CreateButtonTitle}
            title="Create an account"
            buttonStyle={styles.CreateButton}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  CreateButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#31493c',
    height: 46,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },
  CreateButtonTitle: {
    color: '#31493c',
    fontSize: 20,
    fontWeight: 'bold',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 3,
  },
});
