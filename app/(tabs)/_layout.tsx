import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

const pokeImage: string = '../../assets/images/pokeball.png';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        // estas options quitan a index del tab navigator
        options={{
          href: null,
        }}
        // estas options quitan a index del tab navigator y ayuda a redireccionar
        redirect={true}
      />

      <Tabs.Screen
        name='favourites'
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='heart' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='pokedex'
        options={{
          headerTitle: 'Pokedex',
          tabBarLabel: '',
          tabBarIcon: () => RenderImage(),
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name='account'
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const RenderImage = () => {
  return (
    // require solo acepta rutas estáticas
    <Image
      source={require(pokeImage)}
      style={{ width: 65, height: 67, top: -21 }}
    />
  );
};
