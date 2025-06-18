import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          href: null,
        }}
        redirect={true}
      />
      <Tabs.Screen
        name='pokedex'
        options={{
          title: 'Pokedex',
        }}
      />
      <Tabs.Screen
        name='favourites'
        options={{
          title: 'Favourites',
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
