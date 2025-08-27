// components/QuoteManager.js
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useEffect, useState } from 'react';
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
  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' });
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    changeQuote();
  }, []);

  const changeQuote = () => {
    // Fade out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      // Select random quote
      const randomIndex = Math.floor(Math.random() * QUOTES.length);
      setCurrentQuote(QUOTES[randomIndex]);
      
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      
      // Gentle haptic feedback
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    });
  };

  return (
    <Animated.View style={[styles.quoteContainer, { opacity: fadeAnim }]}>
      <Text style={styles.quoteText}>"{currentQuote.text}"</Text>
      <Text style={styles.quoteAuthor}>— {currentQuote.author}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  quoteContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  quoteText: {
    color: '#FFDEAD',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'LibreBaskerville',
  },
  quoteAuthor: {
    color: '#FFDEAD',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'LibreBaskerville',
  },
});