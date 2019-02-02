import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '~/store/actions/favorites';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    repoNameInput: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
    loading: PropTypes.bool,
  };

  navigationToFavorite = () => {
    this.props.navigation.navigate('Favorite');
  };

  addRepository = () => {
    if (!this.state.repoNameInput.length) return;
    this.props.addFavoriteRequest(this.state.repoNameInput);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>GitMark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositorios aos seus favoritos
          </Text>
          <View style={styles.form}>
            {!!this.props.errorOnAdd && <Text style={styles.error}>{this.props.errorOnAdd}</Text>}
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="usuario/repositório"
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
            />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={this.addRepository}
            >
              {this.props.loading ? (
                <ActivityIndicator size="small" color={styles.loading.color} />
              ) : (
                <Text style={styles.buttonTitle}>Adicionar favoritos</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigationToFavorite}>
            <Text style={styles.footerLink}>
Meus Favoritos (
              {this.props.favoritesCount}
)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  errorOnAdd: state.favorites.errorOnAdd,
  loading: state.favorites.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
