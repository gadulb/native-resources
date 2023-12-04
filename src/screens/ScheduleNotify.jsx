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
  input: {
      backgroundColor: "#DDD",
      height: 50,
      padding: 10,
      borderRadius: 10,
      fontSize: 20
  }
});


export default function Notify({ navigation }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [token, setToken] = useState('')

  return (
    <View
      style={styles.container}
    >
      <Header title={"Notificações"}/>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder='Título'
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder='Conteúdo'
          value={body}
          onChangeText={setBody}
        />
        <TextInput
          style={styles.input}
          placeholder='00'
          value={seconds}
          keyboardType="numeric"
          onChangeText={setSeconds}
        />
        <Button
            title="Enviar notificação"
            onPress={async () => {
              const token =  await Notifications.scheduleNotificationAsync({
                content: {
                  title: title,
                  body: body,
                },
                trigger: { seconds: seconds },
              });
            }}
          />
      </View>
      <Footer
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}