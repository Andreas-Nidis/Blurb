// components/BookCoverBackground.js
import { ImageBackground, View, StyleSheet } from 'react-native';

export function BookCoverBackground() {
  return (
    <ImageBackground
      source={require('../assets/books-and-paper/book-cover-01.jpg')} // You'll need to add this image
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
    >
      {/* Color overlay to match your theme */}
      <View style={styles.overlay} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(105, 11, 22, 0.5)', // Your color with transparency
  },
});