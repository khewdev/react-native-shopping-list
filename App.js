import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

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

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    setItems(prevItems => {
      return [{ id: uuid.v4(), text: text }, ...prevItems];
    });
  };

  return (
    <View>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem props={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

export default App;