import Header from '../componets/Header';
import Footer from '../componets/Footer';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

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
    gap: 20,
  },
  button: {
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default function DeviceInfo({ navigation }) {
  const [isAuthLocked, setIsAuthLocked] = useState(false);


  const handleAuthenticateB = async () => {
    if (isAuthLocked) {
      alert('Autenticação Bloqueada por passar do limite.');
      return;
    }

    try {
      const isAvailable = await LocalAuthentication.hasHardwareAsync();
      if (!isAvailable) {
        alert('A autenticação biométrica não está disponível neste dispositivo.');
        return;
      }

      const { success} = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Toque no sensor biométrico para autenticar.',
      });

      if (success) {
        alert('Autenticação bem-sucedida!');
      } else {
        alert('Autenticação falhou ou foi cancelada.');

        setIsAuthLocked(true)
        setTimeout(() => {
          setIsAuthLocked(true);
        }, 5000);
      }
    } catch (error) {
      console.error('Erro na autenticação biométrica:', error);
    }
  };

  const handleAuthenticateF = async () => {
    if (isAuthLocked) {
      alert('Autenticação Bloqueada por passar do limite.');
      return;
    }

    try {
      const isAvailable = await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (!isAvailable.includes(2)) {
        alert('A autenticação biométrica não está disponível neste dispositivo.');
        return;
      }

      const { success} = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Batata.',
      });

      if (success) {
        alert('Autenticação bem-sucedida!');
      } else {

        setIsAuthLocked(true)
        setTimeout(() => {
          setIsAuthLocked(false);
        }, 5000);
        alert('Autenticação falhou ou foi cancelada.');
      }
    } catch (error) {
      console.error('Erro na autenticação biométrica:', error);
    }
  };

  return (
    <View
      style={styles.container}
      accessibilityLabel='Expo Device'
    >
      <Header title="Autenticação" />
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button} onPress={handleAuthenticateB}>
          <Text style={styles.text}>Autenticar Biometrico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAuthenticateF}>
          <Text style={styles.text}>Autenticar Facial</Text>
        </TouchableOpacity>
      </View>
      <Footer
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}