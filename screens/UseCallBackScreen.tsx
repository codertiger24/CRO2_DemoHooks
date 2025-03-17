import React, { memo, useCallback, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Component chính
const UseCallBackScreen: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // useCallback đảm bảo hàm không bị tạo lại sau mỗi lần render
  const handleIncrease1 = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textCount}>{count}</Text>

      {/* Component con */}
      <ContentUseCallBack onIncrease={handleIncrease1} />
    </View>
  );
};

// Component con được bọc bởi memo
const ContentUseCallBack = memo(({ onIncrease }: { onIncrease: () => void }) => {
  console.log('🔄 ContentUseCallBack re-render');

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.textContent}>useCallback Example</Text>
      <Button title="Tăng" onPress={onIncrease} />
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

export default UseCallBackScreen;
