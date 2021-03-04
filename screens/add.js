import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {create} from "../api"

export const Add = ({navigation, route}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [date, setDate] = useState("");

    return(<ScrollView contentContainerStyle = {{alignItems: 'center', backgroundColor: "#ffffff"}} keyboardShouldPersistTaps = "never" style = {{flex: 1, backgroundColor: "#ffffff"}}>
                <TextInput  style = {{width: "90%", height: 50, borderRadius: 12 ,backgroundColor: "#33ECFF", paddingHorizontal: 20, marginTop: 20}} 
                            placeholder = "Title..."
                            placeholderTextColor = "rgb(60, 60, 60)"
                            onChangeText = {(text) => setTitle(text)}/>
                <TextInput  style = {{width: "90%", minHeight: 50, borderRadius: 12 ,backgroundColor: "#33ECFF", paddingHorizontal: 20, marginTop: 20, marginBottom: 20}} 
                            placeholder = "Description..."
                            placeholderTextColor = "rgb(60, 60, 60)"
                            multiline = {true}
                            onChangeText = {(text) => setDescription(text)}/>
                <TouchableOpacity style = {{width: "70%", height: 50, backgroundColor: "#33ECFF", borderRadius: 12, justifyContent: 'center', alignItems: 'center'}} onPress = {
                    async () => {
                        await create(title, description, date)
                        navigation.goBack()
                    }
                }>
                    <Text>add to list</Text>
                </TouchableOpacity>
            </ScrollView>)
}