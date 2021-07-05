import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/Hooks';

export default function () {
  const {dispath, isDarkMode, Layout, Fonts} = useTheme();

  dispath({type: 'theme', payload: "dark"})

  console.log(isDarkMode);

  return (
    <View style={[Layout.fill]}>
      <Text style={[Fonts.titleRegular]}>Home</Text>
    </View>
  );
}
