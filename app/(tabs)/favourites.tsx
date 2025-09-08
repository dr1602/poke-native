import { Button, StyleSheet, Text, View } from 'react-native';

import { useDeleteAllFavourites } from '@/hooks/favouritesActions/useDeleteAllFavourites';
import { useAuthStore } from '@/store/authStore';
import { useFavouritesByIdStore } from '@/store/favouritesStore';

const favourites = () => {
  const authData = useAuthStore((state) => state.currentAuthData);
  const { currentFavouritesByIdData } = useFavouritesByIdStore();
  const { deleteFavourites } = useDeleteAllFavourites();

  return (
    <>
      {!authData ? (
        <View>
          <Text style={styles.TextColor}>
            You must be logged to see your favourites!
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.TextColor}> {currentFavouritesByIdData} </Text>
          <Button title='Delete all' onPress={deleteFavourites} />{' '}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  TextColor: {
    color: 'white',
  },
});

export default favourites;
