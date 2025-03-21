import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface BodyProps {
  onUpdateInfor: (newName: string, newAvatar: string) => void;
  onClickChangeBgFooter: () => void;
}

const Body: React.FC<BodyProps> = ({ onUpdateInfor, onClickChangeBgFooter }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dán địa chỉ avatar mới"
        value={avatar}
        onChangeText={setAvatar}
      />
      <Button title="Cập nhật thông tin" onPress={() => onUpdateInfor(name, avatar)} />
      <View style={styles.spacing} />
      <Button title="Đổi màu Footer" onPress={onClickChangeBgFooter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  spacing: {
    height: 10,
  },
});

export default Body;
