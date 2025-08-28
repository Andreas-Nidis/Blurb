// components/PromptArea.js
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { promptSections, mixedSection } from '../data/promptsData'; // Import the data
import { PaperBackground } from './PaperBackground';

export function PromptArea({ useTimer, durationInMinutes, onExit, selectedSection }) {
    const [prompt, setPrompt] = useState('');
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [currentPrompts, setCurrentPrompts] = useState([]);
    const intervalRef = useRef(null);
    const opacity = useRef(new Animated.Value(1)).current;

    // Get the prompts for the selected section
    useEffect(() => {
      let prompts = [];
      if (selectedSection === 'mixed') {
        prompts = mixedSection.prompts;
      } else {
        prompts = promptSections[selectedSection]?.prompts || mixedSection.prompts; // Fallback to mixed
      }
      setCurrentPrompts(prompts);

      // Set initial prompt
      if (prompts.length > 0) {
        const initialPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setPrompt(initialPrompt);
        if (useTimer && durationInMinutes) {
          startCountdown(durationInMinutes * 60);
        }
      }
    }, [selectedSection, useTimer, durationInMinutes]);

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
        });
      }, 1000);
    };

    useEffect(() => {
      return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);

    const formatTime = (sec) => {
      const minutes = Math.floor(sec / 60);
      const seconds = sec % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const onPress = () => {
      // Check if there are prompts available
      if (currentPrompts.length === 0) return;

      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Get a new random prompt from the current section's list
        const randomPrompt = currentPrompts[Math.floor(Math.random() * currentPrompts.length)];
        setPrompt(randomPrompt);

        if (useTimer && durationInMinutes) {
          startCountdown(durationInMinutes * 60);
        }

        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    };

    return (
      <View style={styles.container}>
        <PaperBackground />

        <Animated.View style={[{ opacity }, styles.view]}>
          <Text style={styles.prompt}>{prompt || "Loading prompts..."}</Text>
          {useTimer && secondsLeft > -1 && (
          <Text style={styles.timerText}>{formatTime(secondsLeft)}</Text>
          )}
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Next Prompt</Text>
        </TouchableOpacity>

        {/* Change this button to use the new onExit prop */}
        <TouchableOpacity style={styles.button} onPress={onExit}>
          <Text style={styles.buttonText}>Home Screen</Text>
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