import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../assets/CustomButton';

export default function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handlePress = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                const evalResult = eval(input);
                setResult(`= ${evalResult}`);
            } catch {
                setResult('Error');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', 'C', '+'],
        ['=']
    ];

    return (
        <SafeAreaView className="flex-1 bg-zinc-900">
            <View className="flex-1 justify-end px-4 pb-4">
                <Text className="text-white text-4xl text-right">{input}</Text>
                <Text className="text-gray-400 text-xl text-right mt-2">{result}</Text>
            </View>

            <View className="flex-[2] px-4 pb-4">
                {buttons.map((row, i) => (
                    <View key={i} className="flex-row justify-between mb-3">
                        {row.map((btn) => (
                            <CustomButton
                                key={btn}
                                label={btn}
                                onPress={() => handlePress(btn)}
                            />
                        ))}
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}
