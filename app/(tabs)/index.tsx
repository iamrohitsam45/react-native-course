import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, I am Rohit Sampannavar!</Text>
      <Text style={styles.subtitle}>Bengaluru?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    
  },
  heading: {
    fontSize: 44,
    color:'blue',
    fontWeight: 'bold',
    marginBottom: 10,
   textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
   textAlign: 'center',
  },
});
