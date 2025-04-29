// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ label, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-blue-600 px-6 py-3 rounded-md"
        >
            <Text className="text-white text-lg font-semibold text-center">{label}</Text>
        </TouchableOpacity>
    );
}
