import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  addFavouritePokemon,
  getFavouritePokemons,
} from '@/services/favouritesService';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { HearIconEnum } from '@/utils/constants/iconConstants';
import { HeartIcon } from '@/utils/types/Icons';

export const Favourites = () => {
  const [isPokemonSaved, setIsPokemonSaved] = useState<boolean>(false);
  const [pokemonFavouritesList, setPokemonFavouritesList] = useState<number[]>(
    []
  );
  const [isLoadingFavourites, setIsLoadingFavourites] =
    useState<boolean>(false);
  const [icon, setIcon] = useState<HeartIcon>(HearIconEnum.Outline);

  const pokemonData = usePokemonDetailStore(
    (state) => state.currentPokemonData
  );

  const fetchFavourites = useCallback(async () => {
    try {
      setIsLoadingFavourites(true);
      const favourites = await getFavouritePokemons();
      setPokemonFavouritesList(favourites);
      console.log(pokemonFavouritesList);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingFavourites(false);
    }
  }, []);

  const addFavourite = async () => {
    try {
      await addFavouritePokemon(pokemonData?.id);
      await fetchFavourites();
    } catch (error) {
      console.error('Error fetching favourites:', error);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, [fetchFavourites]);

  useEffect(() => {
    if (pokemonFavouritesList.length > 0 && pokemonData?.id) {
      const isSaved = pokemonFavouritesList.includes(pokemonData?.id);
      setIsPokemonSaved(isSaved);
    }

    console.log(pokemonFavouritesList);
  }, [pokemonData, pokemonData?.id]);

  useEffect(() => {
    if (isPokemonSaved) {
      setIcon(HearIconEnum.Filled);
    } else {
      setIcon(HearIconEnum.Outline);
    }
  }, [isPokemonSaved, icon]);

  console.log(icon);

  return (
    <View style={styles.iconContainer}>
      {icon === HearIconEnum.Outline ? (
        <FontAwesome
          name={HearIconEnum.Outline}
          size={24}
          color='white'
          onPress={addFavourite}
          style={styles.iconStyles}
        />
      ) : (
        <FontAwesome
          name={HearIconEnum.Filled}
          size={24}
          color='white'
          onPress={addFavourite}
          style={styles.iconStyles}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  iconStyles: { color: 'white' },
});
