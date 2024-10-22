import React, { useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/components/Navigator";
import SignInScreen from "./src/screen/SignInScreen";
import {auth} from "./firebaseConfig";

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


WebBrowser.maybeCompleteAuthSession();

const Stack = createNativeStackNavigator();
const App = () => {
      const [userInfo, setUserInfo] =useState();
      const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId:'311277958610-c2b5he1l63vqj6jc83rjqtkj6m2ovacr.apps.googleusercontent.com',
      });

      useEffect(()=>{
        if(response?.type == "success"){
            const {id_token} =response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
      },[response])



      return (
              <NavigationContainer independent={true}>
                <SignInScreen promptAsync={promptAsync} />
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                      <Stack.Screen
                          name="Tab"
                          component={Navigator}
                          options={{ animation: "slide_from_bottom" }}
                      ></Stack.Screen>

                  </Stack.Navigator>
              </NavigationContainer>
    );
};

export default App;
