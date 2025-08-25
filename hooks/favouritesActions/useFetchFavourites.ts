import { useCallback, useEffect, useState } from 'react';

import { getFavouritePokemons } from '@/services/favouritesService';

export const useFetchFavourites = (pokemonId: number | undefined) => {
  const [pokemonFavouritesList, setPokemonFavouritesList] = useState<number[]>(
    []
  );
  const [isPokemonSaved, setIsPokemonSaved] = useState<boolean>(false);
  const [isLoadingFetchFavourites, setIsLoadingFetchFavourites] =
    useState<boolean>(false);

  const fetchFavourites = useCallback(async () => {
    try {
      setIsLoadingFetchFavourites(true);
      const favourites = await getFavouritePokemons();
      setPokemonFavouritesList(favourites);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingFetchFavourites(false);
    }
  }, []);

  useEffect(() => {
    if (pokemonId) {
      const isSaved = pokemonFavouritesList.includes(pokemonId);
      setIsPokemonSaved(isSaved);
    }
  }, [pokemonFavouritesList, pokemonId]);

  return {
    pokemonFavouritesList,
    isPokemonSaved,
    isLoadingFetchFavourites,
    fetchFavourites,
  };
};
