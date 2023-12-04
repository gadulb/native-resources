import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    backgroundColor: "#606",
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  headerTextStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: "#FFF",
    fontWeight: 'bold',
  }
});

export default function Header({ title }) {
  return (
      <View style={styles.header}>
        <Text style={styles.headerTextStyle}>
          {title}
        </Text>
      </View>
  )
}