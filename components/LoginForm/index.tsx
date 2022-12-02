import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function LoginForm() {
  const [inputUser, setInputUser] = useState('')
  const [user, setUser] = useState('')

  function handleLogin() {
    setUser(inputUser)
  }

  return (
    <>
       <View style={styles.inputGroup}>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput} 
            placeholder='Seu usuário'
            value={inputUser}
            onChangeText={(text) => setInputUser(text)}
            testID='user-input'
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput} 
            placeholder='Sua senha' 
            secureTextEntry={true}
            testID='password-input'
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button} 
        onPress={handleLogin}
        testID='login-button'
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.userGreet}>{user && `Olá ${user}`}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputGroup: {
    marginVertical: 24,
    width: '80%',
  },

  input: {
    backgroundColor: '#eee',
    marginBottom: 12,
    width: '100%',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },

  textInput: {
    fontSize: 18
  },

  heading: {
    fontSize: 24,
    color: '#555',
    fontWeight: '500',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  button: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // flex: 1,
    width: '80%',
    backgroundColor: 'steelblue',
    fontSize: 24,
    color: 'white',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },

  userGreet: {
    marginTop: 32,
    fontSize: 24,
  }
});