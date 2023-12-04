import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 10,
    minWidth: 300,
    alignSelf: 'center',
  },
  contentTextStyle: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  done: "#060",
});

export default function Home({ navigation }) {
  return (
    <View
      style={styles.container}
      accessibilityLabel='Expo Device'
    >
      <Header title="Recursos Nativos" />
        <View>
            <Text style={styles.contentTextStyle} >
                Hello World!
            </Text>
        </View>
        <View style={styles.content}>
          <Button color={styles.done} title='Device' onPress={() => navigation.navigate('DeviceInfo')} />
          <Button color={styles.done} title='Battery' onPress={() => navigation.navigate('BatteryInfo')} />
          <Button color={styles.done} title='Notify' onPress={() => navigation.navigate('Notify')} />
          <Button color={styles.done} title='ScreenOrientation' onPress={() => navigation.navigate('MyScreenOrientation')} />
          <Button color={styles.done} title='Contacts' onPress={() => navigation.navigate('ContactInfo')} />
          <Button color={styles.done} title='Schedule Notify' onPress={() => navigation.navigate('ScheduleNotify')} />
          <Button color={styles.done} title='Sensors' onPress={() => navigation.navigate('Sensors')} />
          <Button color={styles.done} title='Screenshot' onPress={() => navigation.navigate('Screenshot')} />
          <Button color={styles.done} title='LocalAuthentication' onPress={() => navigation.navigate('LocalAuthentication')} />
          <Button color={styles.done}  title='CameraInfo' onPress={() => navigation.navigate('CameraInfo')} />
          <Button color={styles.done} title='FaceDetector' onPress={() => navigation.navigate('FaceDetector')} />

          <Button title='Location' onPress={() => navigation.navigate('Location')} />
        </View>
      <Footer hasButton={false} />
    </View>
  );
}