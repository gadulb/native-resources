import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#888',
    paddingHorizontal: 25,
    padding: 20,
  },
  voidFooter: {
    backgroundColor: '#DDD',
    paddingHorizontal: 25,
    padding: 20,
  }
});

export default function Footer({ onPress, hasButton = true }) {
  return (
      hasButton
        ? <View style={styles.footer}>
            <Button 
                  onPress={onPress}
                  style={styles.bottom}
                  title='Voltar'
                />
          </View>
        : <View style={styles.voidFooter} />
  )
}