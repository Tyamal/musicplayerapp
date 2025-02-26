import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const App = () => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('./assets/song.mp3'));
    setSound(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    await sound.stopAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music Player</Text>
      <Button title="Play" onPress={playSound} />
      <Button title="Stop" onPress={stopSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
