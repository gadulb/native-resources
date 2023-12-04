import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import DeviceInfo from './screens/DeviceInfo';
import BatteryInfo from './screens/BatteryInfo';
import Notify from './screens/Notify';
import ScheduleNotify from './screens/ScheduleNotify';
import MyScreenOrientation from './screens/MyScreenOrientation';
import ContactInfo from './screens/ContactInfo';

import Sensors from './screens/Sensors';
import Screenshot from './screens/Screenshot';
import CameraInfo from './screens/CameraInfo';
import LocalAuthentication from './screens/LocalAuthentication';
import FaceDetector from './screens/FaceDetector';
import LocationScreen from './screens/Location';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
                <Stack.Screen name='DeviceInfo' component={DeviceInfo} options={{headerShown: false}} />
                <Stack.Screen name='BatteryInfo' component={BatteryInfo} options={{headerShown: false}} />
                <Stack.Screen name='Notify' component={Notify} options={{headerShown: false}} />
                <Stack.Screen name='MyScreenOrientation' component={MyScreenOrientation} options={{headerShown: false}} />
                <Stack.Screen name='ContactInfo' component={ContactInfo} options={{headerShown: false}} />
                <Stack.Screen name='ScheduleNotify' component={ScheduleNotify} options={{headerShown: false}} />

                <Stack.Screen name='Sensors' component={Sensors} options={{headerShown: false}} />
                <Stack.Screen name='Screenshot' component={Screenshot} options={{headerShown: false}} />
                <Stack.Screen name='LocalAuthentication' component={LocalAuthentication} options={{headerShown: false}} />
                <Stack.Screen name='Location' component={LocationScreen} options={{headerShown: false}} />
                <Stack.Screen name='CameraInfo' component={CameraInfo} options={{headerShown: false}} />
                <Stack.Screen name='FaceDetector' component={FaceDetector} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;