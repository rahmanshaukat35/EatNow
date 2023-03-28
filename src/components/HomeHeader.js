import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';
const HomeHeader = ({navigation}) => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Eat-Now
        </Text>
      </View>
      <View
        style={{
          marginRight: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={32}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
