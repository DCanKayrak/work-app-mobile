import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomPicker from '../../components/Picker/CustomPicker';
import { Line } from 'react-native-svg';
import Rule from 'react-native-gifted-charts/src/Components/lineSvg';
import HorizontalRuler from '../../components/HorizontalRuler/HorizontalRuler';
import { ScrollView } from 'react-native-gesture-handler';

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

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('pomodoro').then(value => setPomodoro(value));
    AsyncStorage.getItem('longBreak').then(value => setLongBreak(value));
    AsyncStorage.getItem('shortBreak').then(value => setShortBreak(value));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <FontAwesome name={"user-circle-o"} size={128} color={'black'}></FontAwesome>
        <Text style={styles.text}>Username</Text>
      </View>

      <View>
        <Text style={styles.title}>Kullanıcı Adı:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={value => setPomodoro(value)}
        />

        <Text style={styles.title}>Email Adresi:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={value => setPomodoro(value)}
        />

        <Text style={styles.title}>Şifre:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={value => setPomodoro(value)}
        />

        <HorizontalRuler></HorizontalRuler>
      </View>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: 'black'
  },
  imgContainer: {
    'alignItems': 'center'
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
