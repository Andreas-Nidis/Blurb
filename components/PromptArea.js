import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export function PromptArea() {
    const [prompt, setPrompt] = useState("Tap to get a prompt!");
    // Array of prompts
    const prompts = [
        "Pick out a book you think the other person would find interesting.",
        "Pick out a book you think the other person would find boring.",
        "Pick out a book you think the other person would find confusing.",
        "Pick out a book you think the other person would find relatable.",
        "Pick out a book you think would represent the other person's personality.",
        "Pick out a book you would like to know what the other person's thoughts and feelings about.",
        "Pick out a book you think represents the other persons aesthetic.",
        "Pick out a book which has a title that fits the other person (like their slogan).",
        "Pick out a book you think could be thrown away and no one would care (see if you agree).",
        "Pick out a book you think represents what the other person is hiding.",
        "Pick out a book you think represents a future adventure or journey you'd like to embark on with the other player.",
        "Pick out a book you think represents the other person's biggest fear.",
        "Pick out a book you think represents the other person's biggest dream.",
        "Pick out a book you think represents the other person's biggest regret.",
        "Pick out a book you think represents the other person's biggest secret.",
        "Pick out a book you think represents the other person's biggest insecurity.",
        "Pick out a book you think represents the other person's biggest strength.",
        "Pick out a book you think represents the other person's biggest weakness.",
        "Pick out a book you think represents the other person's biggest challenge.",
        "Pick out a book you think represents the other person's biggest opportunity.",
        "Pick out a book that represent what you would like to see the other person do next.",
        "Pick out a book that represent what you would like to see the other person achieve.",
        "Pick out a book that represent what you would like to see the other person change.",
        "Pick out a book that represent what you would like to see the other person learn."
    ];
    // Randomly select a prompt from the array
    const onPress = () => {
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setPrompt(randomPrompt);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.prompt}>{prompt}</Text>
            <Button style={styles.button} onPress={onPress} title="Next Prompt" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    prompt: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default PromptArea