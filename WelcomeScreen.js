/* eslint-disable */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import {Button} from 'react-native-paper';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#00aaff' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={{uri: "https://static.thenounproject.com/png/114106-200.png"}}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Test Fruit Screen !</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <Button
                            theme={{colors: {primary: "#00aaff"} }}
                            style={styles.signIn}
                            mode="contained"
                            icon= "forwardburger"
                        >
                            <Text style={styles.textSign}>Get Started</Text>

                        </Button>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00aaff'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: "monospace",
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 170,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        borderColor:"black",
        borderBottomWidth:2,
        borderLeftWidth:2
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default SplashScreen;
