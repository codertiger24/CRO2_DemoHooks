import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface Product {
  name: string;
  price: number;
}

const UseMemoScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  // Hàm thêm sản phẩm vào danh sách
  const handleSubmit = () => {
    if (!name || !price) return; // Kiểm tra input không rỗng
    setProducts([...products, { name, price: parseFloat(price) }]);
    setName('');  // Reset input
    setPrice('');
  };

  // Tính tổng giá sản phẩm, chỉ re-render khi products thay đổi
  const total = useMemo(() => {
    console.log('🔄 Tính toán lại tổng giá...');
    return products.reduce((acc, product) => acc + product.price, 0);
  }, [products]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>

      {/* Ô nhập tên sản phẩm */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm"
        value={name}
        onChangeText={setName}
      />

      {/* Ô nhập giá sản phẩm */}
      <TextInput
        style={styles.input}
        placeholder="Nhập giá sản phẩm"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Nút thêm sản phẩm */}
      <Button title="Thêm" onPress={handleSubmit} />

      {/* Hiển thị tổng giá */}
      <Text style={styles.sumPrice}>Tổng giá: {total}</Text>

      {/* Danh sách sản phẩm */}
      {products.map((product, index) => (
        <Text key={index} style={styles.productItem}>
          {product.name} - {product.price}₫
        </Text>
      ))}
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  sumPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default UseMemoScreen;
