import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Navbar from './src/components/Navbar';
import AddTodo from './src/components/AddTodo';
import Todo from './src/components/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    }
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});

export default App;
