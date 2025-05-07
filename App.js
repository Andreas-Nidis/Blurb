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
  const [useTimer, setUseTimer] = useState(false);

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
    <View style={{flex: 1}}>
      {hasStarted ? 
      <PromptArea 
        style={styles.container2} 
        useTimer={useTimer}
      />
      : 
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => setHasStarted(true)}>
            <TitleBlock 
              setUseTimer={setUseTimer} 
              useTimer={useTimer}
            />
        </TouchableOpacity>
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
});

