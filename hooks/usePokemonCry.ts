import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export const usePokemonCry = (cryUrl: string | undefined) => {
  const [isPokeCryLoading, setIsPokeCryLoading] = useState<boolean>(false);
  const [pokemonCry, setPokemonCry] = useState<any>(null);

  const playPokeCry = async () => {
    console.log('Cargando grito');
    setIsPokeCryLoading(true);
    if (!cryUrl) {
      console.log('URL de grito no disponible');
      setIsPokeCryLoading(false);
      return;
    }

    try {
      const { sound } = await Audio.Sound.createAsync({ uri: cryUrl });
      setPokemonCry(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error al reproducir', error);
    } finally {
      setIsPokeCryLoading(false);
    }
  };

  useEffect(() => {
    return pokemonCry
      ? () => {
          pokemonCry.unloadAsync();
        }
      : undefined;
  }, [pokemonCry]);

  return { playPokeCry, isPokeCryLoading };
};
