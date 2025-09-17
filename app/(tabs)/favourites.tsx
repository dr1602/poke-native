import { useEffect } from 'react';
import { When } from 'react-if';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NotLogged } from '@/components/Generic/NotLogged';
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

    fetchFavourites();
  };

  useEffect(() => {
    if (
      allFavouritesData?.length !== currentFavouritesByIdData.length &&
      !!authData
    ) {
      fetchFavourites();
    }
  }, [
    currentFavouritesByIdData.length,
    allFavouritesData?.length,
    authData,
    fetchFavourites,
  ]);

  return (
    <>
      <When condition={!authData}>
        <View style={styles.Container}>
          <NotLogged />
        </View>
      </When>
      <When condition={allFavouritesData?.length === 0 && !!authData}>
        <Text style={styles.TextColor}>No hay favoritos!</Text>
      </When>
      {!!allFavouritesData && allFavouritesData?.length > 0 && !!authData && (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.ButtonContainer}>
            <Button title='Delete all' onPress={deleteAction} />
          </View>

          <View style={{ flex: 1, ...styles.PokemonsContainer }}>
            <PokemonList
              pokemons={allFavouritesData}
              onLoad={() => {}}
              isThereNext={''}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
  },
  TextColor: {
    color: 'white',
  },
  PokemonsContainer: {
    paddingHorizontal: 12,
  },
  ButtonContainer: {
    paddingHorizontal: '9%',
    paddingBottom: 12,
    width: '102%',
  },
});

export default favourites;
