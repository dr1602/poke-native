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
      console.log(pokemonFavouritesList);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingFetchFavourites(false);
    }
  }, []);

  useEffect(() => {
    fetchFavourites();
  }, [fetchFavourites]);

  useEffect(() => {
    if (pokemonFavouritesList.length > 0 && pokemonId) {
      const isSaved = pokemonFavouritesList.includes(pokemonId);
      setIsPokemonSaved(isSaved);
    }
  }, [pokemonFavouritesList.length, pokemonId]);

  return { pokemonFavouritesList, isPokemonSaved, isLoadingFetchFavourites };
};
