import { Foundation } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomHeader from "../Components/header";
const DetailPage = ({ navigation, route }) => {
  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const resultJson = route.params.result;
  const [days, setDays] = useState([]);
  
  // const [data, setData] = useState();
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    
    try {
      console.log(resultJson.address)
      console.log(resultJson.days[0])

      setDays(resultJson.days)
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  
    // setData(data)
    return () => {
        Dimensions.removeEventListener('change', onChange);
    };
  },[]);

  //--------Connect_Backend ---------\\




  const renderItem = ({ item }) => (
    <View
      style={{
        paddingHorizontal: dimension.width * 0.01,
        paddingVertical: dimension.width * 0.005,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          marginTop: 10,
          elevation: 3, // Add elevation for box shadow effect
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }}
        onPress={() => {

        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "space-evenly" }}>
            <Text
              style={{
                color: "#363853",
                fontSize: dimension.width * 0.04,
                fontWeight: "bold",
              }}
            >
              {item.datetime}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Temperature:  {item.temp}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Feels Like: {item.humidity}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Humidity:  {item.precip}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Precipitation:  {item.feelslike}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Dew Point:  {item.dew}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Wind Gust:  {item.windgust}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Wind Speed:  {item.windspeed}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Wind Direction:  {item.winddir}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Pressure:  {item.pressure}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Cloud Cover:  {item.cloudcover}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Visibility:  {item.visibility}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Solar Radiation:  {item.solarradiation}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Solar Energy:  {item.solarenergy}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             UV Index:  {item.uvindex}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Severe Risk:  {item.severerisk}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.05, color: "#BDBDBD" }}
            >
             Conditions:  {item.conditions}
            </Text>


          </View>
       
          
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        marginTop: -dimension.height * 0.062,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: dimension.width,
          marginTop: dimension.height * 0.05,
          zIndex: 999,
        }}
      >
        <CustomHeader
          onBackPress={() => {
            navigation.navigate("main");
          }}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: dimension.height * 0.15,
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              color: "#5B259F",
              fontSize: dimension.width * 0.06,
              fontWeight: "bold",
            }}
          >
            {"Address : " + resultJson.address}
          </Text>
        </View>

        <View>
          <FlatList
            data={days}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id.toString()}
            style={{ height: dimension.height * 0.85 }}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailPage;
