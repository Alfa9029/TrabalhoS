import { StatusBar } from "expo-status-bar";
import {
  Switch,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero((previousState) => !previousState);
  const handleCalcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

    if (genero) {
      if (imc < 20.7)
        return Alert.alert(
          "Abaixo do peso!",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está Abaixo do peso'
        );
      if (imc >= 20.7 && imc <= 26.4)
          return Alert.alert("Normal!", 
          'Seu IMC é de ' + imc.toFixed(2) + ' e é considerado Normal'
          );
      if (imc > 26.4 && imc <= 27,8)
        return Alert.alert(
          "Pouco acima do peso!",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está um pouco acima do peso'
        );
      if (imc > 27,8 && imc <= 31.1)
        return Alert.alert(
          "Acima do peso!",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está acima do peso'
          );
      if (imc > 31.1)
        return Alert.alert(
          "Obeso",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está obeso'
        );  
    } else {
      if(imc < 19.1)
        return Alert.alert(
          "Abaixo do peso!",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está Abaixo do peso'
        );
      if(imc >= 19.1 && imc <= 25,8)
        return Alert.alert(
          "Normal",
          'Seu IMC é de ' + imc.toFixed(2) + ' e é considerado normal'
        );
      if(imc > 25,8 && imc <= 27,3)
        return Alert.alert(
          "Pouco acima do peso",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está um pouco acima do peso'
        );
      if(imc > 27,3 && imc <= 32,3)
        return Alert.alert(
          "Acima do peso",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está acima do peso'  
        );
      if(imc > 32,3)
        return Alert.alert(
          "Obesa",
          'Seu IMC é de ' + imc.toFixed(2) + ' e está obesa'
        );
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputGroupRow}>
        <Text>Masculino</Text>
        <Switch
          trackColor={{ false: "#81b0ff", true: "#ffc0cb" }}
          thumbColor={genero ? "#ffc0cb" : "#81b0ff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
        <Text>Feminino</Text>
      </View>

      {/* TextInput é um componente que vai receber o valor digitado*/}
      <Text>ALTURA</Text>
      <TextInput
        keyboardType={"number-pad"}
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
      />

      <Text>PESO</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={peso}
        onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
      />
      <TouchableOpacity onPress={handleCalcular} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 54,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 2,
    borderColor: "#000",
  },
  button: {
    backgroundColor: "#2ad131",
    width: "80%",
    height: 44,
    justifyContent: "center",
    elevation: 2,
    borderRadius: 50,
    marginTop: 26,
  },
  buttonText: {
    // fontFamily:"Poppins_600SemiBold",
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});
