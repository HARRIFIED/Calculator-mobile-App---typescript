import React, { useState } from "react";
import { View, Text, Dimensions, Image, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { CALCULATOR_REDUCER } from "../redux/calculator/reducers/calculatorReducer";

const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

export default function Screen(props: any) {
  const { screenHeight } = props;
  const viewResult = useSelector((state: any) => {
    return state[CALCULATOR_REDUCER];
  });

  const [text, onChangeText] = useState("");

  
  return (
    <View
      style={{
        backgroundColor: "black",
        height: screenHeight,
        width: windowWidth,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 17, color: "white" }}>
          RAD
        </Text>

        <Image
          source={require("../../assets/icons/dots.png")}
          style={{
            resizeMode: "contain",
            width: 40,
            height: 20,
            tintColor: "white",
          }}
        />
      </View>

      {/* <View style={{ marginLeft: 229, marginTop: 15 }}>
        <Text style={{ color: "white", fontSize: 50 }}>{viewResult.value}</Text>
      </View> */}
      <TextInput
        style={{
          marginTop: 15,
          fontSize: 50,
          color: "white",
          textAlign: "right",
          marginRight: 10,
        }}
        onChangeText={onChangeText}
        value={viewResult.value}
        placeholder=""
      />

      <View style={{ marginTop: 10, marginRight: 10 }}>
        <Text style={{ color: "#aba6a6", fontSize: 35, textAlign: "right" }}>
          {viewResult.result}
        </Text>
      </View>
    </View>
  );
}
