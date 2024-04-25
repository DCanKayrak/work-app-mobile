import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomPicker from '../../components/Picker/CustomPicker';

const TimerStatus = [
  {
    id: 1,
    status: 'Pomodoro',
    duration: 1500,
  },
  {
    id: 2,
    status: 'ShortBreak',
    duration: 300,
  },
  {
    id: 3,
    status: 'LongBreak',
    duration: 600,
  },
];

const SettingsScreen = () => {
  const [pomodoro, setPomodoro] = useState('');
  const [longBreak, setLongBreak] = useState('');
  const [shortBreak, setShortBreak] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('pomodoro').then(value => setPomodoro(value));
    AsyncStorage.getItem('longBreak').then(value => setLongBreak(value));
    AsyncStorage.getItem('shortBreak').then(value => setShortBreak(value));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro:</Text>
      <TextInput
        style={styles.input}
        value={pomodoro}
        onChangeText={value => setPomodoro(value)}
      />

      <Text style={styles.title}>Short Break:</Text>
      <TextInput
        style={styles.input}
        value={shortBreak}
        onChangeText={value => setShortBreak(value)}
      />

      <Text style={styles.title}>Long Break:</Text>
      <TextInput
        style={styles.input}
        value={longBreak}
        onChangeText={value => setLongBreak(value)}
      />

      <Button title='Kaydet'></Button>

      <CustomPicker items={TimerStatus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 8,
    color: 'black'
  },
  title: {
    color: 'black'
  }
});

export default SettingsScreen;
