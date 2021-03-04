import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export const Show = ({navigation, route}) => {
    return(<View style = {{flex: 1, backgroundColor: "#ffffff"}}>
        <Text style = {{width: "90%"}}>{route.params.text}</Text>
    </View>)
}