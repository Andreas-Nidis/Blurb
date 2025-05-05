import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TitleBlock } from './components/TitleBlock';
import { useState } from 'react';
import { PromptArea } from './components/PromptArea';
import * as Font from 'expo-font';

const loadFonts = () => {
  return Font.loadAsync({
    'LibreBaskerville': require('./assets/fonts/LibreBaskerville-Regular.ttf'),
  });
};

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);
  
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View> // or a loading screen
    )
  }

  return (
    <View style={hasStarted ? styles.container2 : styles.container1}>
      {hasStarted ? 
      <PromptArea />
      : 
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setHasStarted(true)}>
            <TitleBlock style={styles.title} />
        </TouchableOpacity>
        <Text>Press the title to continue!</Text>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#752730',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFDEAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    maxHeight: 800,
    backgroundColor: '#FFDEAD',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 }, // IOS
    shadowOpacity: 0.4, // IOS
    shadowRadius: 4, //IOS
    elevation: 3, // Android
    justifyContent: 'center',
    alignItems: 'center',
    },
    caption: {
      color: '#fff',
      fontSize: 12,
      letterSpacing: 3,
      marginBottom: 50,
    }
});

