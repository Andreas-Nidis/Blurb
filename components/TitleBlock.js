// components/TitleBlock.js
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { HowToPlay } from './HowToPlay.js';
import { Timer } from './Timer.js';
import { QuoteManager } from './QuoteManager.js';

export function TitleBlock({ setUseTimer, useTimer, setDurationInMinutes, onStart }) {
  const [modalVisible, setModalVisible] = useState(false);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    // Create pulsing animation for the title
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        })
      ])
    ).start();
  }, [pulseAnim]);

  return (
    <View style={styles.overview}>
      {/* Quote display at the top */}
      <QuoteManager />
      
      {/* Pulsing title */}
      <TouchableOpacity onPress={onStart}>
        <Animated.View style={[styles.container, { transform: [{ scale: pulseAnim }] }]}>
          <Text style={styles.title}>Blurb</Text>
          <Text style={styles.subtitle}>Judged by the Cover</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Buttons container */}
      <View style={styles.buttonContainer}>
        <HowToPlay modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Timer 
          setUseTimer={setUseTimer} 
          useTimer={useTimer}
          setDurationInMinutes={setDurationInMinutes}
        />
      </View>
      
      {/* Decorative elements */}
      <View style={styles.bookStack}>
        <View style={[styles.book, styles.book1]} />
        <View style={[styles.book, styles.book2]} />
        <View style={[styles.book, styles.book3]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#752730',
  },
  container: {
    maxHeight: 100,
    backgroundColor: '#FFDEAD',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8C3A46',
  },
  title: {
    color: '#4A4A4A',
    letterSpacing: 0.3,
    fontSize: 32,
    fontFamily: 'LibreBaskerville',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    color: '#4A4A4A',
    fontSize: 20,
    fontFamily: 'LibreBaskerville',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    maxHeight: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  bookStack: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  book: {
    position: 'absolute',
    height: 20,
    borderWidth: 1,
    borderColor: '#5A1E26',
  },
  book1: {
    width: 60,
    backgroundColor: '#9D4B55',
    bottom: 0,
    zIndex: 3,
  },
  book2: {
    width: 70,
    backgroundColor: '#8C3A46',
    bottom: 10,
    zIndex: 2,
    transform: [{ rotate: '-5deg' }],
  },
  book3: {
    width: 65,
    backgroundColor: '#7D2F3B',
    bottom: 20,
    zIndex: 1,
    transform: [{ rotate: '3deg' }],
  },
});