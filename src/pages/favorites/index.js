import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from '~/pages/favorites/styles';
import FavoriteItem from './components/favoriteItems';

export default class Favorite extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  state = {
    favorites: [{ fullname: 'Alex Claude' }],
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.state.favorites.length ? (
          <Text style={styles.empty}> Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
