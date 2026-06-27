// import { View, Text, StyleSheet } from 'react-native';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Hello, I am Rohit Sampannavar!</Text>
//       <Text style={styles.subtitle}>Bengaluru?</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'yellow',
    
//   },
//   heading: {
//     fontSize: 44,
//     color:'blue',
//     fontWeight: 'bold',
//     marginBottom: 10,
//    textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: 'gray',
//    textAlign: 'center',
//   },
// });

// import { View, Text, StyleSheet, Pressable } from 'react-native'; // ✅ removed TouchableOpacity
// import { useState } from 'react';

// export default function HomeScreen() {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>You Tapped me {count} times Remember?</Text>

//       <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
//         <Text style={styles.buttonText}>Tap Me</Text>
//       </Pressable>

//       <Pressable style={styles.resetButton} onPress={() => setCount(0)}>
//         <Text style={styles.buttonText}>Reset</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'yellow',
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//   },
//   resetButton: {
//     backgroundColor: 'red',       // different color so user knows it's different
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//     marginTop: 12,                 // ✅ gap between buttons
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });



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