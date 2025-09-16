import { useEffect } from 'react';
import { When } from 'react-if';
import { Button, StyleSheet, Text, View } from 'react-native';

import { PokemonList } from '@/components/Pokemon/PokemonList';
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
  const { allFavouritesData, fetchFavourites } = useFetchFavouritesData();

  const deleteAction = () => {
    deleteFavourites();
    deleteAllFavouritesData();
  };

  useEffect(() => {
    if (
      allFavouritesData?.length !== currentFavouritesByIdData.length &&
      !authData
    ) {
      fetchFavourites();
    }
  }, [
    fetchFavourites,
    currentFavouritesByIdData,
    allFavouritesData?.length,
    authData,
  ]);

  console.log(allFavouritesData);
  console.log(currentFavouritesByIdData);

  return (
    <>
      <When condition={!authData}>
        <View>
          <Text style={styles.TextColor}>
            You must be logged to see your favourites!
          </Text>
        </View>
      </When>
      <When condition={allFavouritesData?.length === 0 && !!authData}>
        <Text style={styles.TextColor}>No hay favoritos!</Text>
      </When>
      {!!allFavouritesData && allFavouritesData?.length > 0 && !!authData && (
        <View>
          <View style={styles.ButtonContainer}>
            <Button title='Delete all' onPress={deleteAction} />
          </View>

          <View style={styles.PokemonsContainer}>
            <PokemonList
              pokemons={allFavouritesData}
              onLoad={() => {}}
              isThereNext={''}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  TextColor: {
    color: 'white',
  },
  PokemonsContainer: {
    paddingHorizontal: 12,
  },
  ButtonContainer: {
    paddingHorizontal: '9%',
    paddingVertical: 12,
    width: '102%',
  },
});

export default favourites;
