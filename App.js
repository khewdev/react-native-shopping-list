import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      text: 'Milk'
    },
    {
      id: uuid.v4(),
      text: 'Eggs'
    },
    {
      id: uuid.v4(),
      text: 'Bread'
    },
    {
      id: uuid.v4(),
      text: 'Juice'
    },
  ]);

  return (
    <View>
      <Header title="Shopping List" />
      <Text>Hello World</Text>
    </View>
  );
};

export default App;