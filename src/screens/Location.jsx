import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    content: {
        flex: 1,
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
    },
    map: {
        flex: 1,
    },
});

export default function LocationScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão para acessar a localização foi negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (
    <View
      style={styles.container}
      accessibilityLabel='Expo Device'
    >
        <Header title="Localização" />

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {location ? (
            <Text>
            Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
            </Text>
        ) : (
            <Text>Obtendo localização...</Text>
        )}
        </View>
        <View style={styles.container}>
        {location ? (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            <Marker
                coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                }}
                title="Você está aqui"
            />
            </MapView>
        ) : (
            <Text>Obtendo localização...</Text>
            )}
        </View>

        <Footer
            onPress={() => navigation.goBack()}
        />
    </View>
  );
};
