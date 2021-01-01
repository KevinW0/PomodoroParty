import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, BUtton} from 'react-native-paper';
import { TouchableHighlight, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';


{/* server Params */}

const SERVER_ADDRESS = 'localhost:5000'


{/*client states*/}





async function requestCodeAndSetState (){
    const code = await fetch(SERVER_ADDRESS.concat('/getCode'))
    .then(resp => (setCode(code), console.log("should be done"), setErrorBool(0), showCodeResponse(1)))
    .catch (error => (console.log ("Server couldn't be reached."), setErrorBool(1), setCode(""), showCodeResponse(1)));
}


const DisplayCodeOrError = ({code}) =>{
{/*  errorBool:1 means error has occured. zero means it hasn't. */}
const [errorBool, setErrorBool] = React.useState(null);


if (errorBool === 1){
    return(
        <Text> Sorry, an error has occured contacting the server. </Text>
    )
}
else if (errorBool === 0){
    return (
        <Text> Your Pomodoro code is (share with friends!): {code}</Text>
    )

}

else {
    return (<Text> This case should've never been hit. If you see this message, please contact the developer </Text>)


}

}




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

        <Button style = {styles.flexeven} mode="outlined" onPress= {() => requestCodeAndSetState()}>
        Generate Lobby
        </Button>
        <Button style = {styles.flexeven} mode="outlined"> Join Lobby </Button>
        </View> 



    )




}


const JoinAndCreateComp = () =>
{[showCodeResponse, setShow] = React.useState(0);


return (
    <View style= {{paddingVertical:1 }}>
    <JoinLobbyInput/>
    {showCodeResponse===1? (
        <DisplayCodeOrError code={code}> </DisplayCodeOrError>):
        null}
    <LobbyButtons/>
    </View>




)}

const styles = StyleSheet.create({
    flexeven:{flex: 1}





}



)
export default JoinAndCreateComp;