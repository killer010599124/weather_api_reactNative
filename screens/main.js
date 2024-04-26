import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LogBox
} from "react-native";
import Button from "../Components/Button";
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
import EditText from "../Components/EditBox";

const MainScreen = ({ navigation, route }) => {
  const [location, setLocation] = useState("");

  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
    };
  });
  useEffect(() => {

  }, []);

  const getWeather = () => {

    //--------Connect_Backend ---------\\

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const endpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=3C8TRCWYPKSPU83H6U8CJ5CUR&contentType=json`;
    console.log(endpoint)

    fetch(endpoint, requestOptions)
      .then((response) => response.text())
      .then((result) =>{
        // console.log(JSON.parse(result).address)
        navigation.navigate('detail', { result: JSON.parse(result) })

      } )
      .catch((error) => console.error(error));
  };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "white",
        height: "120%",
        // alignItems : 'center'
        marginTop: -dimension.height * 0.062,
      }}
    >


      <Text
        style={{
          textAlign: "center",
          fontSize: dimension.height * 0.04,
          marginTop: dimension.height * 0.25,
          width: dimension.width * 0.9,
          alignSelf: "center",
          // fontFamily: "Rubic",
          fontWeight: "bold",
          color: "#2F1155",
        }}
      >
        Weather API Demo
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontSize: dimension.height * 0.025,
          marginTop: dimension.height * 0.05,
          width: dimension.width * 0.9,
          alignSelf: "center",
          // fontFamily: "Rubic",
          fontWeight: "bold",
          color: "#2F1155",
        }}
      >
        This is Demo app to test our weather api integration
      </Text>

      <View style={{ marginTop: dimension.height * 0.12 }}>
        <EditText
          hintText="Enter a location"
          onChangeText={setLocation}
          value={location}
          style={{
            marginTop: dimension.height * 0.01,
          }}
        />
      </View>



      <Button title="Get Weather" onPress={getWeather} />
      <View
        style={{
          marginTop: dimension.height * 0.01,
          width: dimension.width * 0.9,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  selectInput: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#F7F7F9",
  },
  selectedValue: {
    marginTop: 20,
  },
});
export default MainScreen;
