import React from 'react';
import { Picker } from '@react-native-picker/picker';

const CustomPicker = ({ items }) => {
    return (
        <Picker
            onValueChange={(itemValue) =>
                items.func(itemValue)
            }>
            {items.map(i => (
                <Picker.Item label={i.label} value={i.value} key={i.value} />
            ))}
        </Picker>
    );
};

export default CustomPicker;
