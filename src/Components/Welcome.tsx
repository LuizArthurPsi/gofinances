import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

interface Props {
    title: string;
}

export default function Welcome({title}: Props) {
  return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{title}</Text>
  </View>)
}

