import React from 'react';
import { View, ScrollView } from 'react-native';
import CustomButton from '../assets/CustomButton';

export default function HomeScreen({ navigation }) {
    const labs = [
        { name: 'Lab2_GUI', label: 'Lab 2 - GUI Components' },
        { name: 'Lab3_Layout', label: 'Lab 3 - Layout & Events' },
        { name: 'Lab4_Calculator', label: 'Lab 4 - Calculator' },
        { name: 'Lab5_Animations', label: 'Lab 5 - Animations' },
        { name: 'Lab6_Database', label: 'Lab 6 - Database' },
        { name: 'Lab7_SMS_Email', label: 'Lab 7 - SMS & Email' },
        { name: 'Lab8_SD_Notification', label: 'Lab 8 - SD & Notification' },
        { name: 'Lab9_Location', label: 'Lab 9 - Location Services' }
    ];

    return (
        <ScrollView className="flex-1 bg-white p-4">
            {labs.map((lab, index) => (
                <CustomButton
                    key={index}
                    label={lab.label}
                    onPress={() => navigation.navigate(lab.name)}
                />
            ))}
        </ScrollView>
    );
}