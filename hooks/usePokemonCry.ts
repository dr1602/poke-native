import { useState } from 'react';
import Sound from 'react-native-sound';

export const usePokemonCry = () => {
  const [isPlayingCry, setIsPlayingCry] = useState<boolean>(false);

  const playCry = (cryUrl: string) => {
    if (!cryUrl) {
      console.log('URL de grito no disponible');
      return;
    }

    const soundIstance = new Sound(cryUrl, undefined, (error) => {
      if (error) {
        console.error('Error al cargar el sonido', error);
        return;
      }

      setIsPlayingCry(true);
      soundIstance.play((success) => {
        if (success) {
          console.log('Reproducción exitosa');
        } else {
          console.log('Reproducción fallida');
        }
        soundIstance.release();
        setIsPlayingCry(false);
      });
    });
  };

  return { playCry, isPlayingCry };
};
