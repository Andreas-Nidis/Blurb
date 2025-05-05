import { StyleSheet, Text, View, Button } from 'react-native';
import { TitleBlock } from './components/TitleBlock';
import { useState } from 'react';
import { PromptArea } from './components/PromptArea';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <View style={styles.container}>
      {hasStarted ? 
      <PromptArea />
      : 
      <View style={styles.container}>
        <Button style={styles.button} title={<TitleBlock />} onPress={() => setHasStarted(true)} />
        <Text>Press the title to continue!</Text>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
