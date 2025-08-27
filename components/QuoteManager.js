// components/QuoteManager.js
import { View, Text, Animated, StyleSheet } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import * as Haptics from 'expo-haptics';

const QUOTES = [
  { text: "A reader lives a thousand lives before he dies.", author: "George R.R. Martin" },
  { text: "The more that you read, the more things you will know.", author: "Dr. Seuss" },
  { text: "Books are a uniquely portable magic.", author: "Stephen King" },
  { text: "That's the thing about books. They let you travel without moving your feet.", author: "Jhumpa Lahiri" },
  { text: "I have always imagined that Paradise will be a kind of library.", author: "Jorge Luis Borges" },
  { text: "Words are our most inexhaustible source of magic.", author: "J.K. Rowling" },
  { text: "A book is a dream that you hold in your hand.", author: "Neil Gaiman" },
  { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
];

export function QuoteManager() {
  const [currentQuote, setCurrentQuote] = useState(() => {
    // Select a random quote when the component first mounts
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
  });
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Start the pulsing animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.03,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        })
      ])
    );
    pulseAnimation.start();

    // Fade in the initial quote
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Gentle haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Clean up function
    return () => {
      pulseAnimation.stop();
    };
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <Animated.View style={[styles.quoteContainer, { 
      opacity: fadeAnim, 
      transform: [{ scale: pulseAnim }] 
    }]}>
      <Text style={styles.quoteText}>"{currentQuote.text}"</Text>
      <Text style={styles.quoteAuthor}>— {currentQuote.author}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  quoteContainer: {
    marginTop: 5,
    marginBottom: 50,
    alignItems: 'center',
  },
  quoteText: {
    color: '#FFDEAD',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'LibreBaskerville',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  quoteAuthor: {
    color: '#FFDEAD',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'LibreBaskerville',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});