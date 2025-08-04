import React from 'react';
import { Text, View } from 'react-native';

interface ItemMenuProps {
  title: string;
  text: string;
}

export const ItemMenu: React.FC<ItemMenuProps> = ({ title, text }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};
