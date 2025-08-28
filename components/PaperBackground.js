// components/BookCoverBackground.js
import { ImageBackground, View, StyleSheet } from 'react-native';

export function PaperBackground() {
  return (
    <ImageBackground
      source={require('../assets/books-and-paper/old-book-pages-isolated-white_1373-1265.jpeg')} // You'll need to add this image
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Your color with transparency
  },
});