import * as React from 'react';
import * as Battery from 'expo-battery';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    content: {
        flex: 1,
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
    }
});

export default function BatteryInfo({ navigation }) {
    const [ batteryLevel, setBatteryLevel ] = React.useState();
    const [ batteryState, setBatteryState ] = React.useState();

    async function atualizarTudo(){
        nivel()
        estado()
        powerInfo()
    }

    async function nivel() {
        const level = await Battery.getBatteryLevelAsync();
        setBatteryLevel(level);
    }

    async function estado() {
        const state = await Battery.getBatteryStateAsync();
        setBatteryState(state);
    }

    async function powerInfo() {
        const power = await Battery.getPowerStateAsync();
    }

    React.useEffect(()=> {
        nivel()
    }, [])

    return (
        <View style={styles.container}>
            <Header title="Nível da Bateria"/>

            <View style={styles.content}>
                <Text style={styles.text}>
                    Nivel da bateria: { (batteryLevel * 100) } %
                </Text>
                <Text style={styles.text}>
                    Estado da bateria: { batteryState }
                </Text>
                <Button 
                    title='Atualizar'
                    onPress={atualizarTudo}
                    />
            </View>

            <Footer
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}