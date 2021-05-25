import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Lottie from "./components/Lottie";

export default function App() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
        <Lottie isLiked={isLiked} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
});
