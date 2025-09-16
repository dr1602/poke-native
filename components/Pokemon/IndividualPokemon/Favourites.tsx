import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';

import { useFetchFavourites } from '@/hooks/favouritesActions/useFetchFavourites';
import { useModifyFavourites } from '@/hooks/favouritesActions/useModifyFavourites';
import { useModifyFavouritesLargerData } from '@/hooks/favouritesDataActions/useModifyFavouritesData';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { HeartIconEnum } from '@/utils/constants/iconConstants';
import { HeartIcon } from '@/utils/types/Icons';

export const Favourites = () => {
  const [icon, setIcon] = useState<HeartIcon>(HeartIconEnum.Outline);

  const pokemonData = usePokemonDetailStore(
    (state) => state.currentPokemonData
  );

  const { isPokemonSaved, isLoadingFetchFavourites, fetchFavourites } =
    useFetchFavourites(pokemonData?.id);

  const { isLoadingModifyFavourites, modifyFavourites } = useModifyFavourites();
  const { modifyFavouritesLargerData } = useModifyFavouritesLargerData();

  console.log('pokemonData', pokemonData);

  const handleModifyFavourites = async () => {
    if (!pokemonData) return;

    await modifyFavourites(pokemonData?.id);
    await modifyFavouritesLargerData(pokemonData);

    fetchFavourites();
  };

  useEffect(() => {
    fetchFavourites();
    if (isPokemonSaved) {
      setIcon(HeartIconEnum.Filled);
    } else {
      setIcon(HeartIconEnum.Outline);
    }
  }, [isPokemonSaved, icon, fetchFavourites]);

  const shouldRenderOutlineHeartIcon = icon === HeartIconEnum.Outline;
  const isLoading = isLoadingFetchFavourites || isLoadingModifyFavourites;

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
            name={HeartIconEnum.Outline}
            size={24}
            color='white'
            onPress={handleModifyFavourites}
            style={styles.iconStyles}
          />
        </Case>
        <Default>
          <FontAwesome
            name={HeartIconEnum.Filled}
            size={24}
            color='white'
            onPress={handleModifyFavourites}
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
