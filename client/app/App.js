import React, { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'; // ✅ import this

// Screens
import HomeScreen from '../library/HomeScreen';
import Gui from '../library/Gui';
import Layout from '../library/Layout';
import Calculator from '../library/Calculator';
import Animations from '../library/Animations';
import Database from '../library/Database';
import Sms from '../library/Sms';
import Notification from '../library/Notification';
import Location from '../library/Location';

import './global.css';

const Stack = createNativeStackNavigator();

// Notification Handler Setup
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
  });

  useEffect(() => {
    const registerForPushNotifications = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    };
    registerForPushNotifications();
  }, []);

  // Optionally show splash/loading screen
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lab2_GUI" component={Gui} />
        {/* <Stack.Screen name="Lab3_Layout" component={Layout} /> */}
        <Stack.Screen name="Lab4_Calculator" component={Calculator} />
        {/* <Stack.Screen name="Lab5_Animations" component={Animations} />
        <Stack.Screen name="Lab6_Database" component={Database} />
        <Stack.Screen name="Lab7_SMS_Email" component={Sms} />
        <Stack.Screen name="Lab8_SD_Notification" component={Notification} />
        <Stack.Screen name="Lab9_Location" component={Location} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
