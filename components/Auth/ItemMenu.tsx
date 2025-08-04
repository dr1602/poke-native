import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ItemMenuProps {
  title: string;
  text: string;
}

export const ItemMenu: React.FC<ItemMenuProps> = ({ title, text }) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text style={styles.itemMenuText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 19,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemMenuTitle: {
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 9,
    width: 120,
  },
  itemMenuText: {
    color: 'white',
  },
});
