import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    content: {
        flex: 1,
        gap: 20,
        padding: 20,
        alignSelf: 'center',
    }
});

async function landscapeLeft() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
}
async function landscapeRight() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
}
async function portrait() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
    );
}
async function portraitUp() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
}
async function portraitDown() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
}
async function deafult() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
    );
}
async function atual() {
    const a = await ScreenOrientation.getOrientationAsync()
    alert(a)
}

// App.json -> Adicionar o plugin - requireFullScreen
export default function MyScreenOrientation({ navigation }) {
    return (
        <View
            style={styles.container}
            accessibilityLabel='Expo Device'
        >
            <Header title="Orientação de tela" />
            <ScrollView style={{ flex: 2 }}>
                <View
                    style={styles.content}
                >
                    <Button title='Default' onPress={deafult}/>
                    <Button title='Forçar deitar Direita' onPress={landscapeRight}/>
                    <Button title='Forçar deitar Esquerda' onPress={landscapeLeft}/>
                    <Button title='Forçar Normal' onPress={portraitUp}/>
                    <Button title='Forçar Inverter' onPress={portraitDown}/>
                    <Button title='Forçar Normal2' onPress={portrait}/>
                    <Button title='Informar' onPress={atual}/>
                </View>
            </ScrollView>

            <Footer
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}