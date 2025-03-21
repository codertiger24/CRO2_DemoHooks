import React, { memo } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface HeaderProps {
  name: string;
  avatar: string;
}

const Header = memo(({ name, avatar }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.greeting}>Chào ngày mới</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: "gray",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
