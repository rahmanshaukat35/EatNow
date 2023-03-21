import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import {Icon} from "react-native-elements"
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles'
const HomeScreen = () => {
  const [delivery, setDelivery]=useState(true)
  return (
    <View style={styles.container}>
        <HomeHeader/>
        <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true} >
          <View>

        <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-evenly"}}>
        <TouchableOpacity onPress={()=>{
          setDelivery(true)
        }} >
          <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons:colors.grey4}}>
          <Text style={styles.deliveryText}>Delivery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          setDelivery(false)
        }}>
          <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.grey4:colors.buttons}}>
          <Text style={styles.deliveryText}>Pick Up</Text>
          </View>
        </TouchableOpacity>
        </View>
          </View>
      <View style={styles.filterView}>
        <View style={styles.addressView}>
          <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
            <Icon type='material-community' name='map-marker' color={colors.grey1} size={26} />
            <Text style={{marginLeft:5}}>22 Bessie Street</Text>
          </View>
          <View style={styles.clockView}>
            <Icon type='material-community' name='clock-time-four' color={colors.grey1} size={26} />
            <Text style={{marginLeft:5}}>Now</Text>
          </View>
          </View>
          <View>
          <Icon type='material-community' name='tune' color={colors.grey1} size={26} />

          </View>
       </View>
       <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Categories</Text>
       </View>
          </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    deliveryButton:{
      paddingHorizontal:20, 
      borderRadius:15,
      paddingVertical:5
    },
    deliveryText:{
      marginLeft:5,
      fontSize:16,
      color:"white"
    },
    filterView:{
      flexDirection:"row",
       alignItems:"center", 
       justifyContent:"space-evenly",
        marginHorizontal:10,
         marginVertical:10},

    clockView:{marginLeft:20 ,
      flexDirection:"row", 
      alignItems:"center",
       backgroundColor:colors.cardbackground,
      borderRadius:15,
      paddingHorizontal:5,
      marginRight:20
      },
      addressView:{
        flexDirection:"row", 
        backgroundColor:colors.grey4,
         borderRadius:15, 
         paddingVertical:3,
         justifyContent:"space-evenly",
         paddingHorizontal:30
        },
        headerText:{
          color:colors.grey2,
          fontSize:24,
          fontWeight:"bold",
          paddingLeft:10
        },
        headerTextView:{
          backgroundColor:colors.grey4,
          paddingVertical:3
        }
})