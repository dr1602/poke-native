import { Button, StyleSheet, Text, View } from 'react-native';

import { useDeleteAllFavourites } from '@/hooks/favouritesActions/useDeleteAllFavourites';
import { useFavouritesStore } from '@/store/favouritesStore';

const favourites = () => {
  const { currentFavouritesData } = useFavouritesStore();
  const { deleteFavourites } = useDeleteAllFavourites();
  console.log(currentFavouritesData);

  return (
    <View>
      <Text style={styles.TextColor}> {currentFavouritesData} </Text>
      <Button title='Delete all' onPress={deleteFavourites} />
    </View>
  );
};

const styles = StyleSheet.create({
  TextColor: {
    color: 'white',
  },
});

export default favourites;
