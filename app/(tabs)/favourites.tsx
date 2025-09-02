import { StyleSheet, Text, View } from 'react-native';


import { useFavouritesStore } from '@/store/favouritesStore';

const favourites = () => {
  const { currentFavouritesData } = useFavouritesStore();

  return (
    <View>
      <Text style={styles.TextColor}> Favourites </Text>
      <Text style={styles.TextColor}> {currentFavouritesData} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextColor: {
    color: 'white',
  },
});

export default favourites;
