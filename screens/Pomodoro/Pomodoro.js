import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetWithAuth, GetWithoutAuth } from '../../services/HttpService';
import { Dropdown } from 'react-native-element-dropdown';

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import wallpaper from '../../assets/img/wallpaper.jpg';
import { TimerStatus } from './TimerConfig';

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
        setCounter(0);
    };

    const handleDailyStreak = () => {
        if (status.id == TimerStatus[0].id) {
            setDailyStreak((prev) => Number(prev) + 1);
        }
    }

    useEffect(() => {
        AsyncStorage.getItem('dailyStreak').then(value => setDailyStreak(value));

        if (dailyStreak == null) {
            AsyncStorage.setItem('dailyStreak', Number(0));
        }
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
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

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
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
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
                        <MaterialCommunityIcons style={styles.modeIcons} name={'application'} color={'black'} size={28}></MaterialCommunityIcons>
                        <Text>Tema</Text>
                    </View>

                    <View style={styles.mode}>
                        <MaterialCommunityIcons style={styles.modeIcons} name={'clock-edit'} color={'black'} size={28}></MaterialCommunityIcons>
                        <Text>Zamanlayıcı</Text>
                    </View>

                    <View style={styles.mode}>
                        <MaterialCommunityIcons style={styles.modeIcons} name={'playlist-music'} color={'black'} size={28}></MaterialCommunityIcons>
                        <Text>Arkaplan Sesi</Text>
                    </View>
                </View>
            </ImageBackground>
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
