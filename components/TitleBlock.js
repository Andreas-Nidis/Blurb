import { StyleSheet, Text, View } from 'react-native';

export function TitleBlock() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blurb</Text>
            <Text style={styles.subtitle}>Judged by the Cover</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default TitleBlock