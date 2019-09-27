import React from 'react';
import AreaCal from './AreaCal';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ImageBackground,
    TouchableHighlight
  } from "react-native";

  export default class Areainformation extends React.Component {
    render() {
    return (
      
      <ImageBackground
      source={require("./assets/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text
          style={{
            color: "#FFCB1F",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 30,
            fontSize: 15
          }}
        >
          Calculator
        </Text>
    
      </View>
    
    </ImageBackground>
    );
    }
   }
   const styles = StyleSheet.create({
    container: {
      flex: 1
      // backgroundColor: "#f5fcff"
    },
    intro: {
      flexDirection: "row"
    },
    input: {
      height: 80,
      textAlign: "center",
      width: "50%",
      fontSize: 50,
      marginTop: 24,
      color: "#FFCB1F"
    },
    button: {
      backgroundColor: "#1D1D1B"
    },
    buttonText: {
      alignSelf: "center",
      padding: 30,
      fontSize: 25,
      color: "#FFCB1F",
      fontWeight: "bold"
    },
    result: {
      alignSelf: "center",
      color: "#FFCB1F",
      fontSize: 65,
      padding: 15
    }
  });