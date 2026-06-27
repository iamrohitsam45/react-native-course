
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [name, setName] = useState('');         // stores what user types
  const [greeting, setGreeting] = useState(''); // stores the greeting

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Type your name..."
        value={name}
        onChangeText={(text) => setName(text)}  // runs on every keystroke
      />

      <Pressable style={styles.button} onPress={() => setGreeting(`Hello, ${name}! 👋`)}>
        <Text style={styles.buttonText}>Greet Me</Text>
      </Pressable>

      {greeting !== '' && (   
        <Text style={styles.greeting}>{greeting}</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 12,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greeting: {
    marginTop: 30,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});