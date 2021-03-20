import React, { useState } from "react";
import { TouchableOpacity, Text, View, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function RadioButton({ onClick, title }) {
  const [isToggled, setisToggled] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setisToggled(!isToggled)}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isToggled ? (
          <MaterialCommunityIcons
            name="radiobox-marked"
            size={24}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="radiobox-blank"
            size={24}
            color="black"
          />
        )}
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RadioButton;
