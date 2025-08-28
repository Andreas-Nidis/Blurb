// components/TitleBlock.js
import { StyleSheet, View, TouchableOpacity, Animated, Text } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { HowToPlay } from './HowToPlay.js';
import { Timer } from './Timer.js';
import { QuoteManager } from './QuoteManager.js';
import { BookCoverBackground } from './BookCoverBackground.js';
import { BookmarkRibbon } from './BookmarkRibbon.js'; // Import the new bookmark title

export function TitleBlock({ setUseTimer, useTimer, setDurationInMinutes, onStart }) {
  const [modalVisible, setModalVisible] = useState(false);
  const contentAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    // Animate content in after bookmark drops
    setTimeout(() => {
      Animated.timing(contentAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);

  return (
    <View style={styles.overview}>
      {/* Book Cover Background */}
      <BookCoverBackground />
      
      {/* Bookmark Title that drops from top */}
      <BookmarkRibbon />
      
      {/* Quote display */}
      <Animated.View style={{ 
        opacity: contentAnim, 
        transform: [{ translateY: contentAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0]
        })}] 
      }}>
        <QuoteManager />
      </Animated.View>
      
      {/* Main content container */}
      <Animated.View style={[styles.contentContainer, { 
        opacity: contentAnim,
        transform: [{ translateY: contentAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [30, 0]
        })}] 
      }]}>
        {/* Play button */}
        <TouchableOpacity onPress={onStart} style={styles.playButton}>
          <Text style={styles.playButtonText}>Begin Adventure</Text>
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
      </Animated.View>
      
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
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  playButton: {
    backgroundColor: '#4A8A5F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  playButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 300,
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