import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {Icon} from 'react-native-elements';

const FoodCard = ({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  numberOfReviews,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={{uri: images}}
        />
      </View>
      <View>
        <View>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.distance}>
            <Icon
              name="place"
              type="material"
              color={colors.grey2}
              size={18}
              iconStyle={{marginTop: 3}}
            />
            <Text style={styles.min}>{farAway} Min</Text>
          </View>
          <View style={{flex: 9, flexDirection: 'row'}}>
            <Text style={styles.address}>{businessAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text>{numberOfReviews} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    flex: 10,
    backgroundColor: `rgba(52, 52, 52,0.3)`,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
});
