// components/BookmarkRibbon.js
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { Entypo } from 'react-native-vector-icons';

export function BookmarkRibbon() {
  const dropAnim = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    Animated.timing(dropAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      delay: 300,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.bookmarkContainer, { transform: [{ translateY: dropAnim }] }]}>
      {/* Bookmark icon */}
      <Entypo name="bookmark" size={350} color="#FFDEAD" style={styles.bookmarkIcon} />
      
      {/* Text content positioned over the icon */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Blurb</Text>
        <Text style={styles.subtitle}>Judged by the Cover</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bookmarkContainer: {
    position: 'absolute',
    top: -35,
    alignItems: 'center',
    zIndex: 10,
  },
  bookmarkIcon: {
    // Add shadow to the icon
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    transform: [{ scaleX: 1.3}]
  },
  textContainer: {
    position: 'absolute',
    top: 120, // Adjust this to position text properly within the bookmark
    alignItems: 'center',
    justifyContent: 'center',
    width: 140, // Match the width of the bookmark area
  },
  title: {
    color: '#4A4A4A',
    fontSize: 28,
    fontFamily: 'LibreBaskerville',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    color: '#4A4A4A',
    fontSize: 16,
    fontFamily: 'LibreBaskerville',
    textAlign: 'center',
    marginTop: 10,
  },
});