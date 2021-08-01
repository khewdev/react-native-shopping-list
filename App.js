import React, { useState } from 'react';
import { View, Text } from 'react-native';
import uuid from 'react-native-uuid';

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
      <Text>Hello World</Text>
    </View>
  );
};

export default App;