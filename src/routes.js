import { createStackNavigator, createAppContainer } from 'react-navigation';

import { colors } from '~/styles';
import Main from '~/pages/Main';
import Favorite from '~/pages/favorites';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Favorite: { screen: Favorite },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark,
        },

        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
