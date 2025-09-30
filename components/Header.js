import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Todo App
      </Text>
      <Text style={styles.subtitle}>
        Stay organized and productive
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B82F6', // blue-500
    padding: 24,
    paddingTop: 48,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#DBEAFE', // blue-100
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Header;
