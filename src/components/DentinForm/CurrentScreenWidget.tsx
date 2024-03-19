import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";

const CurrentScreenWidgetStyle = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 8px;
`;

const UncoloredWidget = styled(Animated.View)`
  background-color: ${Constants.colors.gray[400]};
  border-radius: 52px;
  height: 8px;
  width: 24%;
`;

const ColoredWidget = styled(Animated.View)`
  background-color: ${Constants.colors.primary[600]};
  border-radius: 52px;
  height: 100%;
  width: ${(props: any) => (props.Width ? `${props.Width.current}%` : 0)};
`;

export default function CurrentScreenWidget({
  numberOfFilledWidgets,
}: {
  numberOfFilledWidgets: number;
}) {
  const percentageFilledWidgets = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  const fillOneWidget = async (
    numberOfFilledWidgets: number,
    duration: number
  ) => {
    const delay = async (ms: number) =>
      new Promise((res) => setTimeout(res, ms));
    await delay(100);
    fillAnimation(numberOfFilledWidgets, duration);
    await delay(1100);
  };

  //   const unfillOneWidget = async (unfillNumber, duration) => {
  //     const delay = async (ms) => new Promise((res) => setTimeout(res, ms));
  //     await delay(100);
  //     unfillAnimation(unfillNumber, duration);
  //     await delay(1100);
  //   };

  const fillAnimation = (widgetNumber: number, duration: number) => {
    Animated.timing(percentageFilledWidgets[widgetNumber], {
      toValue: 100,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  //   const unfillAnimation = (widgetNumber, duration) => {
  //     Animated.timing(percentageFilledWidgets[widgetNumber], {
  //       toValue: 0,
  //       duration: duration,
  //       useNativeDriver: false,
  //     }).start();
  //   };

  useEffect(() => {
    for (let i = 0; i < numberOfFilledWidgets; i++) {
      if (i == numberOfFilledWidgets - 1) {
        fillOneWidget(i, 1000);
      } else {
        fillOneWidget(i, 0);
      }
    }
  }, [numberOfFilledWidgets]);

  return (
    <CurrentScreenWidgetStyle>
      <UncoloredWidget>
        <ColoredWidget
          style={{
            width: percentageFilledWidgets[0].interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
              extrapolate: "clamp",
            }),
          }}
        />
      </UncoloredWidget>
      <UncoloredWidget>
        <ColoredWidget
          style={{
            width: percentageFilledWidgets[1].interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
              extrapolate: "clamp",
            }),
          }}
        />
      </UncoloredWidget>
      <UncoloredWidget>
        <ColoredWidget
          style={{
            width: percentageFilledWidgets[2].interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
              extrapolate: "clamp",
            }),
          }}
        />
      </UncoloredWidget>
      <UncoloredWidget>
        <ColoredWidget
          style={{
            width: percentageFilledWidgets[3].interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
              extrapolate: "clamp",
            }),
          }}
        />
      </UncoloredWidget>
    </CurrentScreenWidgetStyle>
  );
}
