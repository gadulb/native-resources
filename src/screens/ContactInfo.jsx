import React, { useCallback, useState } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import * as Contacts from 'expo-contacts';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Items from '../componets/Items';
import { useFocusEffect } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    content: {
        flex: 1,
        gap: 20,
        padding: 10
    },
    busca: {
        backgroundColor: "#DDD",
        height: 50,
        padding: 10,
        borderRadius: 10,
        fontSize: 20
    }
});

export default function ContactsInfo({ navigation }) {
    const [ contacts, setContancts ] = useState();
    const [ inMemory, setInMemory ] = useState();
    const [ busca, setBusca ] = useState();

    function buscarContatos(value){
        setBusca(value)
        const contatosFiltrados = inMemory.filter(
            contact => {
                let contactLowercase = (contact.name).toLowerCase()
                let searchTermLowercase = value.toLowerCase()

                return contactLowercase.indexOf(searchTermLowercase) > -1
            }
        )
        setContancts(contatosFiltrados)
    }

    async function exibirAlerta(contato){
        await Notifications.scheduleNotificationAsync({
            content: {
              title: contato.name,
              subtitle: "Informações",
              body: contato.phoneNumbers[0].number,
              data: { data: 'código secreto invisível' },
            },
            trigger: { seconds: 2 },
        });
    }

    async function loadContacts(){
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        setInMemory(data)
        setContancts(data)
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    loadContacts()
                }
            })();
        }, [])
    );

    return (
    <View
        style={styles.container}
        accessibilityLabel='Expo Device'
    >
        <Header title="Contatos" />


        <View
            style={styles.content}
        >

            <TextInput
                value={busca}
                placeholder='Buscar'
                style={styles.busca}
                onChangeText={buscarContatos}
            />
            { contacts 
                ? <FlatList
                        style={{ flex:1, gap: 10 }}
                        data={contacts}
                        renderItem={({ item }) => (
                            <Items
                                item={item}
                                exibirAlerta={exibirAlerta}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                />
                : <></>
            }
        </View>

        <Footer
            onPress={() => navigation.goBack()}
        />
    </View>
    );
}