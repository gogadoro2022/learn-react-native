import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";

export const Focus = ( {addSubject} ) => {
  const [subject, setSubject] = useState('null')
  console.log(subject)

  
  return (
    <View style={styles.container} >
      <View style={styles.inputContainer}>
        <TextInput 
          label={'What would you like to focus on?'} 
          style={styles.inputText}
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton  title='+' size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white
  },
  inputContainer: {
    justifyContent: 'top',
    padding: 25,
    flexDirection: 'row',
  },
  inputText: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
})