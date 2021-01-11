import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';


const Stopwatch = ({time}) => { 
    let seconds = time % 60
    if (seconds < 10){
        seconds = `0${seconds}`
    };
    let minutes = (time - seconds)/60
    if (minutes < 10){
        minutes = `0${minutes}`

    };
    const Styles = StyleSheet.create({
        timerText: {paddingTop: 100, paddingLeft: 100}
    
    
    
    });




return (
    <SafeAreaView>
    <Text style={Styles.timerText}> {`${minutes}:${seconds}`} </Text>
    </SafeAreaView>
)   
};





export default Stopwatch;
