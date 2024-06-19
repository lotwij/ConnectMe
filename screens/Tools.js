import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { backgroundMain, colors, containerMain, textMain } from '../theme'


const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/OverlayHome2.png')} style={styles.image}>
    <View className="flex-row justify-between items-center p-4">
      <Text className ={`${colors.heading} font-bold text 5xl shadow-sm`}>HomeScreen</Text>
      <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
         <Text className={colors.heading}>Uitloggen</Text>
      </TouchableOpacity>
      </View>
      <View  style={styles.containerBall}>
        <Image source={require('../assets/images/GoldenBall.png')} style={styles.imageBall}></Image>
        <Text style={styles.textMainTitle}>Connect Me</Text>
      </View>
      <View  style={styles.containerIcons} className="flex-row justify-between p-4">
        <View style={styles.imageIconClock}>
          <Image source={require('../assets/images/Button clock.png')} style={styles.imageIconsMain}></Image>
          <Text style={styles.textIcons}>Alarm</Text>
        </View>
        <View style={styles.imageIconTools}>
          <Image source={require('../assets/images/Button Tools.png')} style={styles.imageIconsMain}></Image>
          <Text style={styles.textIcons}>Tools</Text>
        </View>
        <View style={styles.imageIconSocial}>
          <Image source={require('../assets/images/Button Social.png')} style={styles.imageIconsMain}></Image>
          <Text style={styles.textIcons}>Community</Text>
        </View>
      </View>
      <View>

      </View>
  </ImageBackground>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  
    backgroundColor :'#F6DCC8',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    zIndex:-1,
    marginBottom:-120,
  },
  containerBall: {
    alignItems: 'center',
    marginTop:'8%',
  },
  containerIcons: {
    alignItems: 'center',
    marginTop:'10%',
    paddingLeft:'15%',
    paddingRight:'15%',
  },
  imageIconClock: {
    alignItems: 'center',
  },
  imageIconTools: {
    alignItems: 'center',
  },
  imageIconSocial: {
    alignItems: 'center',
  },
  textMainTitle: {
    marginTop:'7%',
    fontSize: 30,
  },
  textIcons: {
    marginTop:'15%',
    fontFamily: 'Radley-Regular',
    fontSize: 15,
  },
  imageBall: {
    width: 150,
    height: 150,
  },
  imageIconsMain: {
    width: 75,
    height: 75,
  },
  textTitle: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});