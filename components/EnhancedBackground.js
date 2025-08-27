// components/EnhancedBackground.js
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export function EnhancedBackground() {
  const particleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate particles
    Animated.loop(
      Animated.sequence([
        Animated.timing(particleAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(particleAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);

  const particleOpacity = particleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7]
  });

  return (
    <LinearGradient
      colors={['#5a1e26', '#752730', '#8c3a46']}
      style={StyleSheet.absoluteFillObject}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Animated particles */}
      <Animated.View style={[styles.particle, styles.particle1, { opacity: particleOpacity }]} />
      <Animated.View style={[styles.particle, styles.particle2, { opacity: particleOpacity }]} />
      <Animated.View style={[styles.particle, styles.particle3, { opacity: particleOpacity }]} />
      <Animated.View style={[styles.particle, styles.particle4, { opacity: particleOpacity }]} />
      
      {/* Subtle book silhouettes */}
      <View style={[styles.bookSilhouette, styles.silhouette1]} />
      <View style={[styles.bookSilhouette, styles.silhouette2]} />
      <View style={[styles.bookSilhouette, styles.silhouette3]} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  particle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 222, 173, 0.15)',
    borderRadius: 50,
  },
  particle1: {
    width: 80,
    height: 80,
    top: '10%',
    left: '10%',
  },
  particle2: {
    width: 60,
    height: 60,
    top: '70%',
    right: '15%',
  },
  particle3: {
    width: 40,
    height: 40,
    bottom: '20%',
    left: '20%',
  },
  particle4: {
    width: 50,
    height: 50,
    top: '30%',
    right: '25%',
  },
  bookSilhouette: {
    position: 'absolute',
    backgroundColor: 'rgba(90, 30, 38, 0.2)',
    borderRadius: 4,
  },
  silhouette1: {
    width: 50,
    height: 70,
    top: '20%',
    left: '15%',
    transform: [{ rotate: '-5deg' }],
  },
  silhouette2: {
    width: 40,
    height: 60,
    bottom: '25%',
    right: '20%',
    transform: [{ rotate: '10deg' }],
  },
  silhouette3: {
    width: 35,
    height: 55,
    top: '60%',
    left: '25%',
    transform: [{ rotate: '-8deg' }],
  },
});