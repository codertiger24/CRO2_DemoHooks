import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Main = () => {
  const [lastUpdated, setLastUpdated] = useState("");
  const [name, setName] = useState("Chưa có tên");
  const [avatar, setAvatar] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png");
  const [footerBg, setFooterBg] = useState("#fff");

  // Cập nhật thời gian real-time
  useEffect(() => {
    const updateTimestamp = () => {
      const date = new Date();
      setLastUpdated(
        `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    };
    updateTimestamp();
    const interval = setInterval(updateTimestamp, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cập nhật thông tin header
  const onUpdateInfor = useCallback((newName: string, newAvatar: string) => {
    if (!newName.trim() || !newAvatar.trim()) {
      alert("Không được để trống");
      return;
    }
    setName(newName);
    setAvatar(newAvatar);
  }, []);

  // Đổi màu nền footer
  const onClickChangeBgFooter = useCallback(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setFooterBg(randomColor);
  }, []);

  return (
    <View style={styles.container}>
      <Header name={name} avatar={avatar} />
      <Body onUpdateInfor={onUpdateInfor} onClickChangeBgFooter={onClickChangeBgFooter} />
      <Footer lastUpdated={lastUpdated} backgroundColor={footerBg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
  },
});

export default Main;
