import { Black } from './color';

export function hexToRgba(color: string, opacity: number): string {
  block:
  if (color[0] === '#') {
    let red: string;
    let green: string;
    let blue: string;
    const sub = color.substring(1);

    switch (sub.length / 2) {
      // #333, #abc
      case 1.5:
        red = sub[0];
        green = sub[1];
        blue = sub[2];
        break;

      // #333333, #abcdef
      case 3:
      // #33333333, #abcdef12
      case 4:
        red = sub[0] + sub[1];
        green = sub[2] + sub[3];
        blue = sub[4] + sub[5];
        break;

      default:
        break block;
    }
    
    return `rgba(${parseInt(red, 16)},${parseInt(green, 16)},${parseInt(blue, 16)},${opacity})`;
  }

  return hexToRgba(Black.L2, opacity);
}