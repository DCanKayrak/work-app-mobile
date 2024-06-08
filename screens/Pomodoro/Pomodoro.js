import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetWithAuth, GetWithoutAuth, PostWithAuth } from '../../services/HttpService';
import { Dropdown } from 'react-native-element-dropdown';

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import wallpaper from '../../assets/img/wallpaper.jpg';
import { TimerStatus } from './TimerConfig';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PomodoroScreen = () => {
    const [dailyStreak, setDailyStreak] = useState(0);
    const [status, setStatus] = useState(TimerStatus[0]);

    const [counter, setCounter] = useState(status.duration);
    const [displayTime, setDisplayTime] = useState('25:00');
    const [timerReset, setTimerReset] = useState(false);

    const [isRunning, setIsRunning] = useState(false);

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [duration, setDuration] = useState(0);
    const [collections, setCollections] = useState([]);

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

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
        setTimerReset((prev) => !prev);
        setIsRunning(false);
        setCounter(status.duration);
    };

    const handleForward = () => {
        handlePomodoroPostRequest();
        setCounter(0);
    };

    const handleDailyStreak = () => {
        if (status.id == TimerStatus[0].id) {
            setDailyStreak((prev) => Number(prev) + 1);
        }
    }

    const handlePomodoroPostRequest = () => {
        let totalPomodoroDuration = (status.duration - counter) / 60;
        setDuration(totalPomodoroDuration)
        PostWithAuth('/api/Pomodoro',
            {
                duration: duration
            }
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    console.log('Pomodoro Oluşturuldu')
                }
                else {
                    console.log('Pomodoro post hata!')
                }
            })
    }

    const handleGetCollections = () => {
        GetWithAuth("/api/Task/Collections").then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    console.log("Başarılı - Collections");
                    setCollections(res.data);
                }
            }).catch(error => {
                console.log("Error fetching collections:", error);
            });
    };

    useEffect(() => {
        if (dailyStreak == null) {
            AsyncStorage.setItem('dailyStreak', Number(0));
        }
        AsyncStorage.getItem('dailyStreak').then(value => setDailyStreak(value));
        handleGetCollections();
    }, [])

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

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'white' }]}>
                    Görev Seçiniz
                </Text>
            );
        }
        return null;
    };

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={wallpaper} resizeMode="cover" style={styles.image}>
                <View>
                    <View style={styles.dropdownContainer}>
                        {renderLabel()}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={collections}
                            search
                            maxHeight={300}
                            labelField="title"
                            valueField="id"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
                <View style={styles.timerContainer}>
                    <View style={styles.container}>

                    </View>
                    <CountdownCircleTimer
                        isPlaying={isRunning}
                        duration={status.duration}
                        key={timerReset}
                        initialRemainingTime={status.duration}
                        size={320}
                        colors={['#3ef053', '#e1f03e', '#f03e3e']}
                        strokeWidth={25}
                        colorsTime={[status.duration, 2 * (status.duration) / 3, 0]}
                    >
                        {() => <>
                            <Text style={styles.timer}>{displayTime}</Text>
                            <Text style={styles.streak}>{'#' + dailyStreak}</Text>
                        </>}
                    </CountdownCircleTimer>

                    <View style={styles.buttonContainer}>
                        {
                            !isRunning && counter == status.duration ?

                                <>
                                    <TouchableOpacity onPress={handleStop} style={styles.button}>
                                        <MaterialCommunityIcons name={'play'} color={'black'} size={30}></MaterialCommunityIcons>
                                        <Text style={styles.buttonText}>
                                            Odaklanmaya Başlayın
                                        </Text>
                                    </TouchableOpacity>
                                </>
                                :
                                <>
                                    {isRunning
                                        ?
                                        <>
                                            <TouchableOpacity onPress={handleStop} style={styles.button}>
                                                <MaterialCommunityIcons name={'pause'} color={'black'} size={30}></MaterialCommunityIcons>
                                                <Text style={styles.buttonText}>
                                                    Durdur
                                                </Text>
                                            </TouchableOpacity>
                                        </>
                                        :
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity onPress={handleStop} style={styles.button}>
                                                <MaterialCommunityIcons name={'play'} color={'black'} size={30}></MaterialCommunityIcons>
                                                <Text style={styles.buttonText}>
                                                    Devam
                                                </Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={handleForward} style={styles.button}>
                                                <MaterialCommunityIcons name={'fast-forward'} color={'black'} size={30}></MaterialCommunityIcons>
                                                <Text style={styles.buttonText}>
                                                    Bitir
                                                </Text>
                                            </TouchableOpacity>
                                        </View>}
                                </>

                        }

                    </View>
                </View>

                <View style={styles.modesContainer}>
                    <View style={styles.mode}>
                        <Button textColor='white' icon="theme-light-dark" mode="text" onPress={() => console.log('Pressed')}>
                            Theme
                        </Button>
                    </View>

                    <View style={styles.mode}>
                        <Button textColor='white' icon="camera-timer" mode="text" onPress={() => console.log('Pressed')}>
                            Timer
                        </Button>
                    </View>

                    <View style={styles.mode}>
                        <Button textColor='white' icon="music" mode="text" onPress={() => showModal()}>
                            Sounds
                        </Button>
                    </View>
                </View>
            </ImageBackground>

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
        </View>
    );
};

export default PomodoroScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'space-between'
    },
    timerModesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 5,
    },
    timer: {
        color: 'white',
        fontSize: 72,
        fontWeight: '100',
        textAlign: 'center',
    },
    timerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    buttonContainer: {
        borderColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: '600',
        marginLeft: 5
    },
    streak: {
        color: 'gray'
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20
    },
    modesContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25
    },
    mode: {
        alignItems: 'center',
        width: '33%'
    },
    modeIcons: {
        color: 'white'
    },
    dropdownContainer: {
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        color: 'black'
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black'
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        color: 'black'
    },
});
