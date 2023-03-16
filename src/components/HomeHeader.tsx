import { View, Text, ImageBackground } from "react-native";
import React from "react";

import { SvgXml } from "react-native-svg";
import homeHeaderBg from "assets/img/homeHeaderBg.jpg";
import Balance from "./Balance";
import { cLogo, notificationIcon, scanIcon, searchIcon } from "assets/icons";
import CustomInput from "./CustomInput";
type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View className=" min-h-[316px] w-full">
      <ImageBackground className="flex-1" source={homeHeaderBg}>
        <View className="flex-row items-center justify-between mx-8 mt-16">
          <SvgXml xml={cLogo} />
          <SvgXml xml={notificationIcon} />
        </View>
        <View className="mx-5 mt-10">
          <Balance />
        </View>
        <View className="mx-5 mt-3 ">
          <CustomInput type="numeric" rightIcon={scanIcon} leftIcon={searchIcon} placeholder="Enter track number" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeHeader;