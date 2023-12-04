import { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import * as Notifications from 'expo-notifications';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 10
  },
  content: {
      flex: 1,
      gap: 20,
      padding: 20,
      width: 400,
      alignSelf: 'center',
  }
});

export default function Notify({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState('');

  async function exibirAlerta(){
    const last = await Notifications.getLastNotificationResponseAsync()
    if(last && expoPushToken == last?.notification.request.identifier){
      setExpoPushToken('')
      navigation.navigate("Home")
    }
  }
  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  useEffect(()=>{
    exibirAlerta()
  }, [lastNotificationResponse])

  return (
    <View
      style={styles.container}
    >
      <Header title={"Notificações"}/>
      <View style={styles.content}>
        <Text>Expo token: {expoPushToken}</Text>
        <Button
          title="Enviar notificação"
          onPress={async () => {
            const token = await Notifications.scheduleNotificationAsync({
              content: {
                title: "Recebendo notificação em 2 segundos",
                subtitle: "subtitulo",
                body: 'Corpo que a notificação irá conter',
                data: { data: 'código secreto invisível' },
              },
              trigger: { 
                date: new Date(Date.now() + 1000 * 20),
              },
            });

            setExpoPushToken(token)
          }}
        />

        <Button
          title="Ler Ultima notificação 'Clicada'"
          onPress={async () => {
            const a = await Notifications.getLastNotificationResponseAsync();
          }}
        />
        <Button
          title="Ler Notificações Ñ Lidas"
          onPress={async () => {
            const a = await Notifications.getPresentedNotificationsAsync();
          }}
        />
      </View>
      <Footer
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}