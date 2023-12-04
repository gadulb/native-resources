import { StyleSheet, View, Text } from 'react-native';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import React, { useEffect, useState } from 'react';
import { Gyroscope, Magnetometer, LightSensor,  } from 'expo-sensors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10
  },
  content: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sensorData: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default function DeviceInfo({ navigation }) {
  const [gyroscopeData, setGyroscopeData] = useState({});
  const [magnetometerData, setMagnetometerData] = useState({});
  const [{ illuminance }, setData] = useState({ illuminance: 0 });

  useEffect(() => {
    // Inicializa o giroscópio e o magnetômetro
    Gyroscope.addListener(gyroscopeUpdate);
    Magnetometer.addListener(magnetometerUpdate);
    LightSensor.addListener(setData);

    // Remove os listeners quando o componente for desmontado
    // return () => {
    //   Gyroscope.removeAllListeners();
    //   Magnetometer.removeAllListeners();
    //   LightSensor.removeAllListeners();
    // };
  }, []);

  const gyroscopeUpdate = (data) => {
    setGyroscopeData(data);
  };

  const magnetometerUpdate = (data) => {
    setMagnetometerData(data);
  };


  return (
    <View
      style={styles.container}
      accessibilityLabel='Expo Device'
    >
      <Header title="Sensores" />
        <View style={styles.container2}>

          <Text style={styles.sensorData}>
            Giroscópio: {'\n'}
            x: {gyroscopeData.x} {'\n'}
            y: {gyroscopeData.y} {'\n'}
            z: {gyroscopeData.z}
          </Text>

          <Text style={styles.sensorData}>
            Magnetômetro: {'\n'}
            x: {magnetometerData.x} {'\n'}
            y: {magnetometerData.y} {'\n'}
            z: {magnetometerData.z}
          </Text>
  
          <Text>
            Illuminance: {Platform.OS === 'android' ? `${illuminance} lx` : `Only available on Android`}
          </Text>

        </View>
      <Footer
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
