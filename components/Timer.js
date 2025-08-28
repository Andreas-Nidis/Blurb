import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export function Timer({ setUseTimer, useTimer, setDurationInMinutes }) {
  const [timeIndex, setTimeIndex] = useState(0);
  const timeOptions = [1, 3, 5];

  useEffect(() => {
    if (useTimer) {
      setDurationInMinutes(timeOptions[timeIndex]);
    }
  });

  return (
    <View style={styles.overview}>
      {useTimer ? 
      <View style={styles.timerRow}>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]} onPress={() => setUseTimer((prev) => !prev)}>
          <Text style={styles.showText}>Timer On</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#FAF9F6'}]} onPress={() => setTimeIndex((prev) => (prev + 1) % timeOptions.length)}>
          <Text style={[styles.showText, {color: 'black'}]}>{timeOptions[timeIndex]}:00</Text>
        </TouchableOpacity>
      </View>
      :
      <TouchableOpacity style={[styles.button, {backgroundColor: '#ff0000ff'}]} onPress={() => setUseTimer((prev) => !prev)}>
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