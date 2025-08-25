import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';

import { useAddFavourites } from '@/hooks/favouritesActions/useAddFavourites';
import { useDeleteFavourites } from '@/hooks/favouritesActions/useDeleteFavourites';
import { useFetchFavourites } from '@/hooks/favouritesActions/useFetchFavourites';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { HearIconEnum } from '@/utils/constants/iconConstants';
import { HeartIcon } from '@/utils/types/Icons';

export const Favourites = () => {
  const [icon, setIcon] = useState<HeartIcon>(HearIconEnum.Outline);

  const pokemonData = usePokemonDetailStore(
    (state) => state.currentPokemonData
  );

  const { isPokemonSaved, isLoadingFetchFavourites, fetchFavourites } =
    useFetchFavourites(pokemonData?.id);
  const { isLoadingAddFavourites, addFavourite } = useAddFavourites();
  const { isLoadingDeleteFavourites, deleteFavourite } = useDeleteFavourites();

  const AddAndFetchFavourites = async () => {
    await addFavourite(pokemonData?.id);
    fetchFavourites();
  };

  const DeleteAndFetchFavourites = async () => {
    fetchFavourites();
    await deleteFavourite(pokemonData?.id);
    fetchFavourites();
  };

  useEffect(() => {
    if (isPokemonSaved) {
      setIcon(HearIconEnum.Filled);
    } else {
      setIcon(HearIconEnum.Outline);
    }
  }, [isPokemonSaved, icon]);

  const shouldRenderOutlineHeartIcon = icon === HearIconEnum.Outline;
  const isLoading =
    isLoadingFetchFavourites ||
    isLoadingAddFavourites ||
    isLoadingDeleteFavourites;

  return (
    <View style={styles.iconContainer}>
      <Switch>
        <Case condition={isLoading}>
          <ActivityIndicator
            size='small'
            style={styles.Spinner}
            color={'#fff'}
          />
        </Case>
        <Case condition={shouldRenderOutlineHeartIcon}>
          <FontAwesome
            name={HearIconEnum.Outline}
            size={24}
            color='white'
            onPress={AddAndFetchFavourites}
            style={styles.iconStyles}
          />
        </Case>
        <Default>
          <FontAwesome
            name={HearIconEnum.Filled}
            size={24}
            color='white'
            onPress={DeleteAndFetchFavourites}
            style={styles.iconStyles}
          />
        </Default>
      </Switch>
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
  Spinner: {
    marginTop: 30,
    marginBottom: Platform.OS === 'android' ? 60 : 30,
  },
});
