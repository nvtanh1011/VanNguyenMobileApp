import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./routes/rootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/*import React, { Component, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
//import { View, StyleSheet } from "react-native";
import styles from "./style.js";

const App = () => {
  const [user, setUser] = useState();

  const getUserData = async () => {
    try {
      //let response = await fetch('https://gorest.co.in/public-api/users');
      let response = await fetch(
        "http://10.0.0.5:44350/helloworldWebService1.asmx/GetBooks"
      );
      let json = await response.json();
      setUser(json);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getUserData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.Id}</Text>
          <Text>{item.Name}</Text>
          <Text>{item.Author}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={user}
          renderItem={renderItem}
          keyExtractor={(item) => item.Id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
*/
