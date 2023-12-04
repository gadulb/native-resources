import { Button, ScrollView, StyleSheet, View } from 'react-native';
import * as Device from 'expo-device';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Text } from 'react-native';

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
  contentTextStyle: {
    padding: 5,
    textAlignVertical: 'center',
    minHeight: 50,
    backgroundColor: '#969',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
});

export default function DeviceInfo({ navigation }) {
  return (
    <View
      style={styles.container}
      accessibilityLabel='Expo Device'
    >
      <Header title="Informações do Aparelho" />
      <ScrollView style={{ flex: 2 }}>
        <View
          style={styles.content}
        >
          <Text style={styles.contentTextStyle} >
            O nome do seu aparelho é: {Device.deviceName}
          </Text>
          <Text style={styles.contentTextStyle} >
            A Marca do aparelho é: {Device.manufacturer}
          </Text>
          <Text style={styles.contentTextStyle} >
            O Modelo do aparelho é: {Device.brand}
          </Text>
          <Text style={styles.contentTextStyle} >
            O nome completo do aparelho é: {Device.modelName}
          </Text>
          <Text style={styles.contentTextStyle} >
            O Design do aparelho é: {Device.designName}
          </Text>
          <Text style={styles.contentTextStyle} >
            O Ano do lançamento é: {Device.deviceYearClass}
          </Text>
          <Text style={styles.contentTextStyle} >
            A memória do aparelho é: {Device.totalMemory}
          </Text>
          <Text style={styles.contentTextStyle} >
            A Versão do sistema é a: {Device.osVersion}
          </Text>
          <Text style={styles.contentTextStyle} >
            A arquitetura do aparelho é: {Device.supportedCpuArchitectures}
          </Text>
        </View>
      </ScrollView>
      <Footer
          onPress={() => navigation.goBack()}
      />
    </View>
  );
}