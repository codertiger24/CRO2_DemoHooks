import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

interface FooterProps {
  lastUpdated: string;
  backgroundColor: string;
}

const Footer = memo(({ lastUpdated, backgroundColor }: FooterProps) => {
  return (
    <View style={[styles.footer, { backgroundColor }]}>
      <Text>Thời gian bạn cập nhật thông tin: {lastUpdated}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    alignItems: "center",
  },
});

export default Footer;
