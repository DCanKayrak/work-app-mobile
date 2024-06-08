import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';

import { Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { TextInput } from 'react-native-gesture-handler';

const AgendaScreen = () => {

  const [items, setItems] = useState({})

  loadItems = (day) => {
    const newItems = { ...items }; // Mevcut öğeleri kopyalayın

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!newItems[strTime]) {
          newItems[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }

      setItems(newItems);
    }, 1000);
  };


  timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        selected={new Date()}
      />
    </View>
  );
}

export default AgendaScreen

const styles = StyleSheet.create({

})