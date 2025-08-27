// components/SectionScreen.js
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { promptSections, mixedSection } from '../data/promptsData'; // Import the data we created

export function SectionScreen({ onSelectSection, onBack }) {
  // Combine the mixed section with the categorized sections
  const allSections = { mixed: mixedSection, ...promptSections };

  const renderSection = ({ item }) => (
    <TouchableOpacity
      style={styles.sectionButton}
      onPress={() => onSelectSection(item[0])} // Pass the section key (e.g., 'icebreakers')
    >
      <Text style={styles.sectionButtonText}>{item[1].name}</Text>
      <Text style={styles.promptCount}>{item[1].prompts.length} prompts</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Adventure</Text>
      <Text style={styles.subtitle}>Select a category of prompts to get started.</Text>
      
      <FlatList
        data={Object.entries(allSections)}
        renderItem={renderSection}
        keyExtractor={(item) => item[0]}
        contentContainerStyle={styles.listContainer}
      />
       <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD', // Using your prompt area background
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#4A4A4A',
    fontFamily: 'LibreBaskerville',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  listContainer: {
    paddingBottom: 20,
  },
  sectionButton: {
    backgroundColor: '#D6A692', // Using your button color
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  promptCount: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  backButton: {
    backgroundColor: '#752730', // Using your home screen color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});