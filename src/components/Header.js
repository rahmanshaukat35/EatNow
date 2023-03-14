import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20, marginTop: 3}}>
        <AntDesign
          type="material-community"
          name="arrowleft"
          color={colors.headerText}
          size={24}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
