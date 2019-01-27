import Color from 'color';

export default {
  white: '#FFF',
  lighter: '#EEE',
  ligth: '#DDD',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',

  primary: '#7A91CA',
  primaryDark: Color('#7A91CA').darken(0.1),
  secundary: '#444A5A',
  success: '#9DCA83',
  danger: '#E37a7a',

  transparent: 'transparent',
  darkTransparent: 'rgba(0, 0, 0,0.6)',
  whiteTransparent: 'rgba(255,255,255, 0.3)',
};
