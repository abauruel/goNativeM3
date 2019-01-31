import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
  },
  info: {
    margin: metrics.baseMargin,
    flex: 1,
  },
  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 12,
  },
  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },
});

export default styles;
