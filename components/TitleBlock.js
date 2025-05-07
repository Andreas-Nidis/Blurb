import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { HowToPlay } from './HowToPlay.js';
import { Timer } from './Timer.js';

export function TitleBlock({ setUseTimer, useTimer }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.overview}>
      <View style={styles.container}>
        <Text style={styles.title}>Blurb</Text>
        <Text style={styles.subtitle}>Judged by the Cover</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <HowToPlay modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Timer 
            setUseTimer={setUseTimer} 
            useTimer={useTimer}
        />
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxHeight: 100,
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
    flex: 1,
  },
  title: {
    color: '#4A4A4A',
    letterSpacing: 0.3,
    fontSize: 24,
    fontFamily: 'LibreBaskerville',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    color: '#4A4A4A',
    fontSize: 18,
    fontFamily: 'LibreBaskerville',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    maxWidth: 200,
    maxHeight: 50,
  }
});

export default TitleBlock