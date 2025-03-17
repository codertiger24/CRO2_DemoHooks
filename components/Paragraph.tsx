import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Paragraph: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, theme === 'light' ? styles.light : styles.dark]}>
      <Text style={[styles.text, theme === 'light' ? styles.textLight : styles.textDark]}>
        Lớp học React Native là một lớp học tuyệt vời, với những kiến thức cực kỳ dễ học và tràn đầy yêu thương.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  light: {
    backgroundColor: '#f0f0f0',
  },
  dark: {
    backgroundColor: '#444444',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  textLight: {
    color: '#000000',
  },
  textDark: {
    color: '#ffffff',
  },
});

export default Paragraph;
