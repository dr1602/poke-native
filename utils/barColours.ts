import { DimensionValue } from 'react-native';

export const barColours = (statNumber: number) => {
  const color =
    statNumber > 100
      ? '#E7D40A'
      : statNumber > 69
      ? '#02AC66'
      : statNumber > 33
      ? '#024A86'
      : '#EF280F';

  return {
    backgroundColor: color,
    width: `${statNumber}%` as DimensionValue,
  };
};
