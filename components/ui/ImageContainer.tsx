import { Image } from 'react-native';

export const renderImage = (imgUrl: string) => {
  return <Image source={require(imgUrl)} />;
};
