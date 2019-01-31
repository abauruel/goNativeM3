import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  empty: {
    alignSelf: 'center',
    paddingTop: metrics.basePadding,
  },
});

export default styles;
