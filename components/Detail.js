//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// create a component
const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  const [user, setUser] = useState({
    ID: item.ID,
    Name: item.Name,
    Phone: item.Phone,
    Department: item.Department.Id,
    Street: item.Street,
    City: item.City,
    State: item.State,
    Zip: item.Zip,
    Country: item.Country,
  });
  
  const onChangeID = (value) => {
    setUser({ ...user, ID: value });
  };
  const onChangeName = (value) => {
    setUser({ ...user, Name: value });
  };

  const onChangePhone = (value) => {
    setUser({ ...user, Phone: value });
  };

  const onChangeDepartment = (value) => {
    setUser({ ...user, Department: value });
  };  
  

  const onChangeStreet = (value) => {
    setUser({ ...user, Street: value });
  };

  const onChangeCity = (value) => {
    setUser({ ...user, City: value });
  };  
  const onChangeState = (value) => {
    setUser({ ...user, State: value });
  };

  const onChangeZip = (value) => {
    setUser({ ...user, Zip: value });
  };

  const onChangeCountry = (value) => {
    setUser({ ...user, Country: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();
    let info = `ID=${item.ID}&Name=${user.Name}&Phone=${user.Phone}&Department=${user.Department}&Street=${user.Street}&City=${user.City}&State=${user.State}&Zip=${user.Zip}&Country=${user.Country}`;

    console.log(info);

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    fetch("http://10.0.0.10:44350/empWS.asmx/ModifyEmployee", {
      method: "POST",
      headers: myHeaders,
      body: info,
    })
      .then((response) => {
        response.text();
        navigation.push("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    let cmd = `ID=${item.ID}`;
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    fetch("http://10.0.0.10:44350/empWS.asmx/RemoveEmployee" , {
      method: "POST",
      headers: myHeaders,
      body: cmd,
    })
      .then((response) => {
        response.text();
        navigation.push("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        placeholder={"ID"}
        onChangeText={(value) => onChangeID(value)}
        style={styles.input}
        value={user.ID}
      />

      <TextInput
        placeholder={"Name"}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
        value={user.Name}
      />
      <TextInput
        placeholder={"Phone"}
        onChangeText={(value) => onChangePhone(value)}
        style={styles.input}
        value={user.Phone}
      />
      <TextInput
        placeholder={"Department"}
        onChangeText={(value) => onChangeDepartment(value)}
        style={styles.input}
        value={user.Department.Id}
      />
       <TextInput
        placeholder={"Street"}
        onChangeText={(value) => onChangeStreet(value)}
        style={styles.input}
        value={user.Street}
      />
      <TextInput
        placeholder={"City"}
        onChangeText={(value) => onChangeCity(value)}
        style={styles.input}
        value={user.City}
      />
      <TextInput
        placeholder={"State"}
        onChangeText={(value) => onChangeState(value)}
        style={styles.input}
        value={user.State}
      /> <TextInput
      placeholder={"Zip"}
      onChangeText={(value) => onChangeZip(value)}
      style={styles.input}
      value={user.Zip}
    />
    <TextInput
      placeholder={"Country"}
      onChangeText={(value) => onChangeCountry(value)}
      style={styles.input}
      value={user.Country}
    />
    
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: "blue", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Update</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: "red", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});

//make this component available to the app
export default Detail;
