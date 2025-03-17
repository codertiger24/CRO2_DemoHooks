import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';

const HomeScreen: React.FC = () => {
  // State lưu số đếm
  const [count, setCount] = useState<number>(10);

  // State lưu thông tin người dùng
  const [inforUser, setInforUser] = useState<{ name: string; age: number }>({
    name: 'Nguyen Van A',
    age: 20,
  });

  // useRef để lưu giá trị count trước đó
  const prevCount = useRef<number>(count);

  // Hàm tăng count
  const handleIncrease = () => {
    setCount((prev) => prev + 5);
  };

  // Hàm cập nhật thông tin người dùng
  const updateInforUser = () => {
    setInforUser((prev) => ({ ...prev, age:55 }));
  };

  // useEffect chạy khi count thay đổi
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  console.log('prevCount =', prevCount.current, 'count =', count);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Hiển thị giá trị count */}
        <Text style={styles.textCount}>{count}</Text>
        <Button title="Tăng" onPress={handleIncrease} />

        {/* Hiển thị thông tin người dùng */}
        <Text style={styles.textUser}>
          {inforUser.name} - {inforUser.age} tuổi
        </Text>
        <Button title="Update Info User" onPress={updateInforUser} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  content: {
    alignItems: 'center',
    gap: 20,
  },
  textCount: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  textUser: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default HomeScreen;
