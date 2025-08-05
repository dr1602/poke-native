import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native';

export const Favourites = () => {
  const addFavourite = () => {
    console.log('Añadido a favoritos');
  };
  return (
    <View>
      <FontAwesome
        name='heart-o'
        size={24}
        color='black'
        onPress={addFavourite}
        style={{ marginRight: 18 }}
      />
    </View>
  );
};
