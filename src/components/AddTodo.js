import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

const AddTodo = (props) => {
  const [value, setValue] = useState('');
  
  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Task name cannot be empty')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your task..." 
        onChangeText={text => setValue(text)} 
        value={value}
        autoCorrect={false}
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
});

export default AddTodo
