import React, { Component, useEffect, useState } from "react";
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
import styles from "../style";

// create a component
const Get = ({ navigation }) => {
  const [user, setUser] = useState();

  const getUserData = async () => {
    try {
      //let response = await fetch('https://gorest.co.in/public-api/users');
      let response = await fetch(
        "http://10.0.0.10:44350/empWS.asmx/EmployeeInfo"
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            item: item,
          })
        }
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.ID}</Text>
          <Text>{item.Name}</Text>
          <Text>{item.Phone}</Text>
          <Text>{item.Department.Id}</Text>
          <Text>{item.Street}</Text>
      <Text>{item.City}</Text>
      <Text>{item.State}</Text>
      <Text>{item.Zip}</Text>
      <Text>{item.Australia}</Text>
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

//make this component available to the app
export default Get;
