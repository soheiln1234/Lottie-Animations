import React, { useRef, useEffect } from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Lottie = ({ isLiked }) => {
  const animation = useRef(null);
  useEffect(() => {
    if (isLiked) {
      animation.current.play(0, 100);
    } else {
      animation.current.play(0, 0);
    }
  }, [isLiked]);

  return (
    <LottieView
      source={require("../heart.json")}
      style={styles.heartAnimation}
      loop={false}
      ref={animation}
    />
  );
};

export default Lottie;

const styles = StyleSheet.create({
  heartAnimation: {
    width: 500,
    height: 500,
  },
});
