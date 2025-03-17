import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import Paragraph from '../components/Paragraph';

const UseContextScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, theme === 'light' ? styles.light : styles.dark]}>
      <Text style={styles.text}>UseContextScreen</Text>
      <Button title="Đổi theme" onPress={toggleTheme} />
      <Paragraph />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#333333',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default UseContextScreen;
