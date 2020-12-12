import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password: '',
        }
    }
    userSignUp = async (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            return ToastAndroid.show('Account created!', ToastAndroid.LONG);
        })
        .catch(function(err){
            return ToastAndroid.show(err.message, ToastAndroid.LONG);
        })
    }
    userLogIn = async (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            return ToastAndroid.show('Succesfully logged in!', ToastAndroid.LONG);
        })
        .catch(function(err){
            return ToastAndroid.show(err.message, ToastAndroid.LONG);
        })
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <TextInput 
                    style={styles.loginBox}
                    placeholder='Enter Email'
                    onChangeText={(text)=>{
                        this.setState({
                            email: text,
                        })
                    }}
                    keyboardType={"email-address"}
                />
                <TextInput 
                    style={styles.loginBox}
                    placeholder='Enter Password'
                    onChangeText={(text)=>{
                        this.setState({
                            password: text,
                        })
                    }}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={()=>{
                        this.userSignUp(this.state.email, this.state.password);
                    }} 
                >
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={()=>{
                        this.userLogIn(this.state.email, this.state.password);
                    }} 
                >
                    <Text>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBox: {
        width: 200,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
    },
    loginButton: {
        width: 100,
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
})