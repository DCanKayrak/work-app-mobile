import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';

const HomeScreen = () => {
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

  const [dailyStreak, setDailyStreak] = useState(0);
  const [status, setStatus] = useState(TimerStatus[0]);

  const [counter, setCounter] = useState(status.duration);
  const [displayTime, setDisplayTime] = useState('25:00');

  const [isRunning, setIsRunning] = useState(false);

  const calculateDisplayTime = () => {
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    setDisplayTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  };

  const changeActiveStatus = (s) => {
    setIsRunning(false);
    setStatus(s);
    setCounter(s.duration);
  };

  const handleRestart = () => {
    setIsRunning(false)
    setCounter(status.duration);
  };

  const handleForward = () => {
    setCounter(0);
  };

  const handleDailyStreak = () => {
    if(status.id == TimerStatus[0].id){
      setDailyStreak((prev) => Number(prev) + 1);
    }
  }

  useEffect(() => {
    AsyncStorage.getItem('dailyStreak').then(value => setDailyStreak(value));

    if(dailyStreak == null){
      AsyncStorage.setItem('dailyStreak',Number(0));
    }
  },[])

  useEffect(() => {
    let interval;
    if (isRunning && counter > 0) {
      interval = setInterval(() => {
        setCounter((counter) => counter - 1);
        calculateDisplayTime();
      }, 1000);
    } else if (counter === 0) {
      clearInterval(interval);
      handleDailyStreak();
      status.id === TimerStatus[0].id ? changeActiveStatus(TimerStatus[1]) : changeActiveStatus(TimerStatus[0]);
    }
    return () => clearInterval(interval);
  }, [isRunning, counter]);

  useEffect(() => {
    calculateDisplayTime();
  }, [counter]);

  const handleStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <View>
      <View style={styles.timerContainer}>
        <ScrollView horizontal contentContainerStyle={styles.timerModesContainer}>
          {
            TimerStatus.map((s) => (
              <TouchableOpacity
                key={s.id}
                onPress={() => changeActiveStatus(s)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>{s.status}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>

        <Text style={styles.timer}>{displayTime}</Text>
        <Text style={styles.streak}>{'#' + dailyStreak}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleRestart} style={styles.button}>
            <Text style={styles.buttonText}>Sıfırla</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStop} style={styles.button}>
            <Text style={styles.buttonText}>
              {isRunning ? 'Durdur' : 'Başlat'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForward} style={styles.button}>
            <Text style={styles.buttonText}>İleri Sar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  timerModesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  timer: {
    color: 'black',
    fontSize: 64,
    display: 'flex',
    textAlign: 'center',
  },
  timerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 5,
  },
  button: {
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  streak: {
    color: 'gray'
  }
});
