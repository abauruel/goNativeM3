import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, SafeAreaView,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

import {} from 'redux-saga';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    repoInputName: '',
  };

  navigationToFavorite = () => {
    console.tron.log('clicado');
    this.props.navigation.navigate('Favorite');
  };

  addRepository() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>GitMark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositorios aos seus favoritos
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="usuario/repositório"
              value={this.state.repoInputName}
              onChange={inputname => this.setState({ repoInputName })}
            />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={this.addRepository}
            >
              <Text style={styles.buttonTitle}>Adicionar favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigationToFavorite}>
            <Text style={styles.footerLink}>Meus Favoritos (3)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
