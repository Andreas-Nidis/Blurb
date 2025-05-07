import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export function Timer() {
  const [useTimer, setUseTimer] = useState(false);
  const [timeIndex, setTimeIndex] = useState(0);
  const timeOptions = [1, 3, 5];

  return (
    <View style={styles.overview}>
      {useTimer ? 
      <View style={styles.timerRow}>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]} onPress={() => setUseTimer(!useTimer)}>
          <Text style={styles.showText}>Timer On</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'white'}]} onPress={() => setTimeIndex((prev) => (prev + 1) % timeOptions.length)}>
          <Text style={[styles.showText, {color: 'black'}]}>{timeOptions[timeIndex]}:00</Text>
        </TouchableOpacity>
      </View>
      :
      <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={() => setUseTimer(!useTimer)}>
        <Text style={styles.showText}>Timer Off</Text>
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {
    fex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerRow: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  showText: {
    padding: 5,
    margin: 5,
    color:'#fff',
  },
})

export default Timer;