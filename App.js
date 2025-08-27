// App.js
import { StyleSheet, View, Animated } from 'react-native';
import { TitleBlock } from './components/TitleBlock';
import { useState } from 'react';
import { PromptArea } from './components/PromptArea';
import { SectionScreen } from './components/SectionScreen';

// Phases of the app
const APP_PHASES = {
  HOME: 'HOME',
  SECTION_SELECT: 'SECTION_SELECT',
  PROMPT_GAME: 'PROMPT_GAME',
};

export default function App() {
  const [appPhase, setAppPhase] = useState(APP_PHASES.HOME);
  const [useTimer, setUseTimer] = useState(false);
  const [durationInMinutes, setDurationInMinutes] = useState(0);
  const [selectedSection, setSelectedSection] = useState(null);

  const startGame = () => {
    setAppPhase(APP_PHASES.SECTION_SELECT);
  };

  const renderPhase = () => {
    switch (appPhase) {
      case APP_PHASES.SECTION_SELECT:
        return (
          <SectionScreen
            onSelectSection={(sectionKey) => {
              setSelectedSection(sectionKey);
              setAppPhase(APP_PHASES.PROMPT_GAME);
            }}
            onBack={() => setAppPhase(APP_PHASES.HOME)}
          />
        );
      case APP_PHASES.PROMPT_GAME:
        return (
          <PromptArea
            useTimer={useTimer}
            durationInMinutes={durationInMinutes}
            onExit={() => setAppPhase(APP_PHASES.HOME)}
            selectedSection={selectedSection}
          />
        );
      case APP_PHASES.HOME:
      default:
        return (
          <View style={styles.container1}>
            <TitleBlock
              setUseTimer={setUseTimer}
              useTimer={useTimer}
              setDurationInMinutes={setDurationInMinutes}
              onStart={startGame}
            />
          </View>
        );
    }
  };

  return <View style={{ flex: 1 }}>{renderPhase()}</View>;
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#752730',
  },
});