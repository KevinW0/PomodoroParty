import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, Button} from 'react-native-paper';
import { TouchableHighlight, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {Context} from '../context';


{/* server Params */}

const SERVER_ADDRESS = 'http://192.168.1.3:5000'



{/*client states*/}



const JoinAndCreateComp = () => 

{
    const [showCodeResponse, setShow] = React.useState(0);
    const [errorBool, setErrorBool] = React.useState(null);
    const [code, setCode] = React.useContext(Context);
    

    async function requestCodeAndSetState (){
        await fetch(SERVER_ADDRESS.concat('/getCode')).then(response=>response.json())
        .then(resp => (setCode (resp.code), setErrorBool(0), setShow(1)))
        .catch (error => (console.log(error), setErrorBool(1), setCode(""), setShow(1), console.log(SERVER_ADDRESS.concat('/getCode'))));
    console.log(code)
    console.log(showCodeResponse)
    }

    const DisplayCodeOrError = ({code}) =>{
        {/*  errorBool:1 means error has occured. zero means it hasn't. */}
        
        
        if (errorBool === 1){
            return(
                <Text> Sorry, an error has occured contacting the server. </Text>
            )
        }
        else if (errorBool === 0){
            return (
                <Text>Share this code with your friends: {code}</Text>
            )
        
        }
        
        else {
            return (<Text> This case should've never been hit. If you see this message, please contact the developer </Text>)
        
        
        }
        
        }


    const JoinLobbyInput = () => {
    
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
    
        )}
    
    return (
        <View style= {{paddingVertical:1 }}>
        <JoinLobbyInput/>
        <LobbyButtons/>

        {showCodeResponse===1 ? <DisplayCodeOrError code={code}> </DisplayCodeOrError>: null }
        </View>)
    
    }




const styles = StyleSheet.create({
    flexeven:{flex: 1}





}



)
export default JoinAndCreateComp;