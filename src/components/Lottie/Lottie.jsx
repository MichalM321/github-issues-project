import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import Style from './style';

const Lottie = ({ source }) => {
  const style = Style();

  return (
    <View style={style.view}>
      <LottieView
        loop
        autoPlay
        source={source}
      />
    </View>
  );
};

export default React.memo(Lottie);