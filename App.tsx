// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { LoginForm } from './components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.heading}>Entre no sistema</Text>

      <LoginForm />     
    </View>
  );
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
