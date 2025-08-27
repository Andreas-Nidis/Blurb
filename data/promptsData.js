// promptsData.js

export const promptSections = {
    icebreakers: {
        name: "Icebreakers",
        prompts: [
            "Pick out a book with a cover color that matches their outfit.",
            "Find a book you think they've probably already read.",
            "Find the funniest book title you can.",
        ]
    },
    personality: {
        name: "Personality & Traits",
        prompts: [
            "Pick out a book that represents the other person's personality.",
            "Pick out a book you think represents the other person's biggest strength.",
            "Pick out a book you think represents the other person's aesthetic.",
            "Pick out a book which has a title that fits the other person (like their slogan).",
            "Pick out a book you think represents the other person's biggest fear.",
            "Pick out a book you think represents the other person's biggest dream.",
            "Pick out a book you think represents the other person's biggest regret.",
            "Pick out a book you think represents the other person's biggest secret.",
            "Pick out a book you think represents the other person's biggest insecurity.",
            "Pick out a book you think represents the other person's biggest strength.",
            "Pick out a book you think represents the other person's biggest weakness.",
            "Pick out a book you think represents the other person's biggest challenge.",
            "Pick out a book you think represents the other person's biggest opportunity.",
            "Pick out a book you think the other person would find interesting.",
            "Pick out a book you think the other person would find boring.",
            "Pick out a book you think the other person would find confusing.",
            "Pick out a book you think the other person would find relatable.",
        ]
    },
    deep: {
        name: "Deep Dive",
        prompts: [
            "Pick out a book you think represents what the other person is hiding.",
            "Pick out a book you think represents the other person's biggest dream.",
            "Pick out a book you think represents a future adventure you'd like to embark on with them.",
            "Pick out a book that represents what you would like to see the other person achieve.",
            "Pick out a book that represents what you would like to see the other person change.",
            "Pick out a book that represents what you would like to see the other person learn.",
            "Pick out a book that represents what you would like to see the other person do next.",
            "Pick out a book you would like to know what the other person's thoughts and feelings about.",
        ]
    },
    silly: {
        name: "Silly & Fun",
        prompts: [
            "Pick out a book you think could be thrown away and no one would care (see if you agree).",
            "Find the weirdest cookbook you'd want to see them try to make a meal from.",
            "Pick a book with the most dramatic, over-the-top cover.",
            "Find a book that has the silliest sounding title.",
            "Pick out a book which has a title that fits the other person (like their slogan).",
            "Pick out a book you think represents the other person's aesthetic.",,
        ]
    },
// Add more sections as needed
};

// Create a "Mixed" section that combines all prompts from all sections
export const mixedSection = {
    name: "Mixed Bag",
    prompts: Object.values(promptSections).flatMap(section => section.prompts)
};