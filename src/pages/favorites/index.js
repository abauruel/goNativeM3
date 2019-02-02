import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from '~/pages/favorites/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteItem from './components/favoriteItems';

class Favorite extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  static propTypes = {
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
  };

  renderList = () => (
    <FlatList
      data={this.props.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.props.favorites.length ? (
          <Text style={styles.empty}> Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites.data,
});

export default connect(mapStateToProps)(Favorite);
