import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export function PromptArea({ useTimer, durationInMinutes }) {
    const [prompt, setPrompt] = useState('');
    const [secondsLeft, setSecondsLeft] = useState(0);
    const intervalRef = useRef(null);
    const opacity = useRef(new Animated.Value(1)).current;

    const startCountdown = (durationInSeconds) => {
      clearInterval(intervalRef.current);
      setSecondsLeft(durationInSeconds);

      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        })
      }, 1000)
    }

    useEffect(() => {
      const initialPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      setPrompt(initialPrompt);
      if (useTimer && durationInMinutes) {
        startCountdown(durationInMinutes * 60);
      }
      return () => clearInterval(intervalRef.current);
    }, [prompt, useTimer, durationInMinutes]);

    const formatTime = (sec) => {
      const minutes = Math.floor(sec / 60);
      const seconds = sec % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Array of prompts
    const prompts = [
        "Pick out a book you think the other person would find interesting.",
        "Pick out a book you think the other person would find boring.",
        "Pick out a book you think the other person would find confusing.",
        "Pick out a book you think the other person would find relatable.",
        "Pick out a book you think would represents the other person's personality.",
        "Pick out a book you would like to know what the other person's thoughts and feelings about.",
        "Pick out a book you think represents the other persons aesthetic.",
        "Pick out a book which has a title that fits the other person (like their slogan).",
        "Pick out a book you think could be thrown away and no one would care (see if you agree).",
        "Pick out a book you think represents what the other person is hiding.",
        "Pick out a book you think represents a future adventure or journey you'd like to embark on with the other player.",
        "Pick out a book you think represents the other person's biggest fear.",
        "Pick out a book you think represents the other person's biggest dream.",
        "Pick out a book you think represents the other person's biggest regret.",
        "Pick out a book you think represents the other person's biggest secret.",
        "Pick out a book you think represents the other person's biggest insecurity.",
        "Pick out a book you think represents the other person's biggest strength.",
        "Pick out a book you think represents the other person's biggest weakness.",
        "Pick out a book you think represents the other person's biggest challenge.",
        "Pick out a book you think represents the other person's biggest opportunity.",
        "Pick out a book that represents what you would like to see the other person do next.",
        "Pick out a book that represents what you would like to see the other person achieve.",
        "Pick out a book that represents what you would like to see the other person change.",
        "Pick out a book that represents what you would like to see the other person learn."
    ];
    // Randomly select a prompt from the array
    const onPress = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setPrompt(randomPrompt);

        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      })
    };

    return (
        <View style={styles.container}>
          <Animated.View style={[{ opacity }, styles.view]}>
            <Text style={styles.prompt}>{prompt}</Text>
            {useTimer && secondsLeft > -1 && (
              <Text style={styles.timerText}>{formatTime(secondsLeft)}</Text>
            )}
          </Animated.View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>Next Prompt</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D6A692',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 }, // IOS
    shadowOpacity: 0.2, // IOS
    shadowRadius: 4, //IOS
    elevation: 3, // Android
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  prompt: {
    color: '#4A4A4A',
    maxWidth: 320,
    letterSpacing: 0.3,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
    fontFamily: 'Libre Baskerville',
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
  },
  timerText: {
    fontSize: 22,
    color: '#4A4A4A',
    marginVertical: 10,
  },
});

export default PromptArea