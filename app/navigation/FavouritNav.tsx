import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourites from '../(tabs)/FavouritesScreen';

export const FavouritNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Favourite' component={Favourites} />
    </Stack.Navigator>
  );
};
