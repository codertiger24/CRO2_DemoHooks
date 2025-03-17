import React, { memo, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Component chính
const UseMemoCountScreen: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleIncrease2 = () => {
    setCount2((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textCount}>
        {count} - {count2}
      </Text>

      <Button title="Tăng state 1" onPress={handleIncrease} />

      <View style={styles.separate} />

      <Button title="Tăng state 2" onPress={handleIncrease2} />

      {/* Component con */}
      <Content count={count} />
    </View>
  );
};

// Component con được bọc bởi memo
const Content = memo(({ count }: { count: number }) => {
  console.log('🔄 Content component re-render, count =', count);

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.textContent}>Lớp học Đa Nền Tảng 2</Text>
    </View>
  );
});

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  textCount: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separate: {
    height: 20,
  },
  contentContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
  },
  textContent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UseMemoCountScreen;
