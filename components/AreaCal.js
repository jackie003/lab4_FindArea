  import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Button
} from "react-native";

export default class App extends React.Component {
  state = {
    height: 0,
    redian: 0,
    resultNumber: 0,
    resultText: ""
  };
  static navigationOptions = ({navigation}) => {
    return {
    headerTitle: (<Text>Area Cylinder</Text>),
    headerRight: (
    <Button title="Infor >" onPress={() => navigation.navigate('Areainfor')}
    />
    )
    }
   }

  handleCalculate = () => {
    let imc = 3.14 * (this.state.redian * this.state.redian) * this.state.height;
    this.setState({
      resultNumber: imc.toFixed(2)
    });
  };

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
           Area Cylinder
          </Text>
          <View style={styles.intro}>
            <TextInput
              placeholder="Height"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={height => {
                this.setState({ height });
              }}
            />
            <TextInput
              placeholder="Redian"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={redian => {
                this.setState({ redian });
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCalculate}
          >
            <Text style={styles.buttonText}>Calculate </Text>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 15 }]}>
          Cubic centimeter
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