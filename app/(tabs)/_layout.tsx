import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

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
          tabBarIcon: () => (
            <FontAwesome name='heart' color={'#fff'} size={18} />
          ),
        }}
      />
      <Tabs.Screen
        name='pokedex'
        options={{
          title: 'Pokedex',
          tabBarIcon: () => (
            <FontAwesome name='heart' color={'#fff'} size={18} />
          ),
        }}
      />
      <Tabs.Screen
        name='account'
        options={{
          title: 'Account',
        }}
      />
    </Tabs>
  );
}
