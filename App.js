import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TitleBlock } from './components/TitleBlock';
import { useState } from 'react';
import { PromptArea } from './components/PromptArea';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [useTimer, setUseTimer] = useState(false);
  const [durationInMinutes, setDurationInMinutes] = useState(0);

  return (
    <View style={{flex: 1}}>
      {hasStarted ? 
      <PromptArea 
        style={styles.container2}
        useTimer={useTimer}
        durationInMinutes={durationInMinutes}
        setHasStarted={setHasStarted}
      />
      : 
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => setHasStarted(true)}>
            <TitleBlock
              setUseTimer={setUseTimer}
              useTimer={useTimer}
              setDurationInMinutes={setDurationInMinutes}
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

