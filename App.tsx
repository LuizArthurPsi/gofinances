import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Components/Welcome';

export default function App() {
  return (
    <Welcome title='Hello World'/>
  );
}
