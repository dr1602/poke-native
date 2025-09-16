import { Button, StyleSheet, Text, View } from 'react-native';

import { useDeleteAllFavourites } from '@/hooks/favouritesActions/useDeleteAllFavourites';
import { useDeleteAllFavouritesData } from '@/hooks/favouritesDataActions/useDeleteAllFavouritesData';
import { useFetchFavouritesData } from '@/hooks/favouritesDataActions/useFetchFavouritesData';
import { useAuthStore } from '@/store/authStore';
import { useFavouritesByIdStore } from '@/store/favouritesByIdStore';

const favourites = () => {
  const authData = useAuthStore((state) => state.currentAuthData);
  const { currentFavouritesByIdData } = useFavouritesByIdStore();
  const { deleteFavourites } = useDeleteAllFavourites();
  const { deleteAllFavouritesData } = useDeleteAllFavouritesData();
  const { allFavouritesData } = useFetchFavouritesData();

  const deleteAction = () => {
    deleteFavourites();
    deleteAllFavouritesData();
  };

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
          <Button title='Delete all' onPress={deleteAction} />
          {allFavouritesData?.map((item, index) => (
            <Text style={styles.TextColor} key={index}>
              {item.name}
            </Text>
          ))}
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
