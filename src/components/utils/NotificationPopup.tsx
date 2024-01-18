import { useEffect, useRef, useState } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
// import CloseIcon from "../../../assets/Home/close-icon.png";
import ImageWrapper from "./ImageWrapper";

type NotificationPopupProps = {
  title: string;
  setShowPopup: (show: boolean) => void;
  bottom?: string;
};

const NotificationPopupStyle = styled(Animated.View)`
  align-self: center;
  position: absolute;
  bottom: ${(props: any) => props.bottom};
  background-color: ${Constants.colors.gray[700]};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  z-index: 999;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NotificationTextPopupStyle = styled.Text`
  font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Body.Regular.FontSize};
  color: ${Constants.colors.gray[100]};
`;

export default function NotificationPopup({
  title,
  setShowPopup,
  bottom,
}: NotificationPopupProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const positionAnim = useRef(new Animated.Value(100)).current; // Initial value for position: 100
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1400,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    const duration = 1000;
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => setShowPopup(false), duration);
  };
  const positionAnimation = () => {
    Animated.timing(positionAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeIn();
    positionAnimation();
    setTimeout(fadeOut, 3000);
  }, []);

  return (
    <NotificationPopupStyle
      style={{ transform: [{ translateY: positionAnim }], opacity: fadeAnim }}
    >
      <NotificationTextPopupStyle>{title}</NotificationTextPopupStyle>
      <TouchableWithoutFeedback onPress={() => fadeOut()}>
        {/* <ImageWrapper source={CloseIcon} width={"24px"} height={"24px"} /> */}
      </TouchableWithoutFeedback>
    </NotificationPopupStyle>
  );
}
