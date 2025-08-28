import { StyleSheet, Text, View, Modal, Alert, TouchableOpacity, ScrollView } from 'react-native';

export function HowToPlay(props) {
  return (
    <View style={styles.overview}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
      }}>
        <View style={styles.modal}>
          <ScrollView>
            <Text style={styles.heading}>📚 How to Play</Text>
            <Text style={styles.paragraph}>
              Welcome to <Text style={styles.emphasis}>Blurb</Text>, the game where you and a friend judge books — and maybe each other — by their covers.
            </Text>

            <Text style={styles.step}>
              <Text style={styles.bold}>Step 1:</Text> Tap Start
            </Text>

            <Text style={styles.step}>
              <Text style={styles.bold}>Step 2:</Text> Pick a Category{'\n'}
              Choose a category from the list, or tap Mixed Bag for random picks from all categories.
            </Text>

            <Text style={styles.step}>
              <Text style={styles.bold}>Step 3:</Text> Pick out Books!{'\n'}
              Both players search the shelves for a book that best fits the prompt.
            </Text>

            <Text style={styles.step}>
              <Text style={styles.bold}>Step 3:</Text> Share and Discuss{'\n'}
              Reveal your books and explain your reasoning. There are no wrong answers!
            </Text>

            <Text style={styles.paragraph}>
              You can use a timer if you'd like — or take your time. This game is best played in libraries and bookstores,
              so please be respectful and return books properly.
            </Text>

            <Text style={styles.paragraph}>
              Have fun, and judge thoughtfully. 💬📖
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.setModalVisible(!props.modalVisible)}>
              <Text style={styles.showText}>Got it!</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={() => props.setModalVisible(!props.modalVisible)}>
        <Text style={styles.showText}>How To Play</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  overview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#FAF9F6',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'LibreBaskerville',
    color: '#7a2d55',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'LibreBaskerville',
    color: '#4A4A4A',
    marginBottom: 16,
    lineHeight: 24,
  },
  step: {
    fontSize: 16,
    fontFamily: 'LibreBaskerville',
    color: '#4A4A4A',
    marginBottom: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  emphasis: {
    fontStyle: 'italic',
  },
  showText: {
    padding: 5,
    margin: 5,
    color:'black',
  }
})

export default HowToPlay;