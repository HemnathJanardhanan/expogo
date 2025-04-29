import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import CustomButton from '../assets/CustomButton'; // Adjust path if needed

export default function Gui() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
            <Text className="text-2xl font-bold text-blue-600 mb-4">Welcome to Lab 2</Text>

            <TextInput
                placeholder="Enter your name"
                className="border border-gray-400 px-4 py-2 w-full rounded-md mb-4 bg-white"
                value={name}
                onChangeText={setName}
            />

            <CustomButton
                label="Greet Me"
                onPress={() => setGreeting(`Hello, ${name}! 🌟`)}
            />

            {greeting !== '' && (
                <Text className="mt-4 text-lg text-green-600 font-medium">{greeting}</Text>
            )}
        </View>
    );
}
