import { StyleSheet, Text, View } from 'react-native';

export function TitleBlock() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blurb</Text>
            <Text style={styles.subtitle}>Judged by the Cover</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#4A4A4A',
      letterSpacing: 0.3,
      fontSize: 24,
      fontFamily: 'LibreBaskerville',
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    subtitle: {
      color: '#4A4A4A',
      fontSize: 18,
      fontFamily: 'LibreBaskerville',
      textAlign: 'center',
      marginBottom: 20,
    },
});

export default TitleBlock