import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableHighlight, Image,  StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import JoinAndCreateComp from './CreateAndJoin'

const styles = StyleSheet.create({
    






}




)

const TestScreen = () => (
    <SafeAreaView>
        <Image style={{width: 400, height: 300}} resizeMode= 'center' source= {require('../assets/logo.png')}/>
        <View style= {{paddingVertical:20}}>
    <JoinAndCreateComp> </JoinAndCreateComp> 
    </View>
    </SafeAreaView>)




export default TestScreen;
