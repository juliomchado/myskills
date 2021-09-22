import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    FlatList,
    StatusBar
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}

export default function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greetings, setGreeting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        };

        setMySkills(oldState => [...oldState, data]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour > 6 && currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon');
        } else if (currentHour > 18 && currentHour < 0) {
            setGreeting('Good evening');
        } else {
            setGreeting('Good night');
        }

    }, [mySkills])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Julio</Text>

            <Text style={styles.greetings}>
                {greetings}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button
                title="Add"
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, {
                marginVertical: 50
            }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item.name} />
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: Platform.OS === 'ios' ? 70 : 20,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 8
    },
    textWithoutSkill: {
        color: 'gray',
        fontSize: 14
    },
    greetings: {
        color: '#FFF'
    }
})