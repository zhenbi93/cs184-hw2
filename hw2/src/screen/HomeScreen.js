import React, { useState, useCallback } from "react";
import {signOut} from "firebase/auth";
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Button
} from "react-native";

import {auth} from "../../firebaseConfig"

const HomeScreen = ({ navigation }) => {
    const [userInfo, setUserInfo] =useState();
    return (
        <View style={styles.container}>
        <Button title ="Sign Out" onPress = {async () => await signOut(auth)} />
        <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default HomeScreen;