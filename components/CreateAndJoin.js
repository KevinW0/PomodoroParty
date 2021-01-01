import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, BUtton} from 'react-native-paper';
import { TouchableHighlight, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';


const JoinLobbyInput = () => {
    [code, setCode] = React.useState("");

    return (
        <TextInput mode="outlined" label ="Lobby Code" value= {code} onChangeText= {text => (setCode(text), console.log(text))}/>

        )

}

const LobbyButtons = () => {
    //To Add Retrievr Logic

    return (
        <View style={{flexDirection: "row", paddingVertical:1}}>

        <Button style = {styles.flexeven} mode="outlined" onPress= {() => console.log ("to add code retrieve function")}>
        Generate Lobby
        </Button>
        <Button style = {styles.flexeven} mode="outlined"> Join Lobby </Button>
        </View> 



    )




}


const JoinAndCreateComp = () => 
(
    <View style= {{paddingVertical:1 }}>
    <JoinLobbyInput/>
    <LobbyButtons/>
    </View>




)

const styles = StyleSheet.create({
    flexeven:{flex: 1}





}



)
export default JoinAndCreateComp;