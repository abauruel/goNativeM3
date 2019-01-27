import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, SafeAreaView,
} from 'react-native';

import styles from './styles';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  navigationToFavorite = () => {
    console.tron.log('clicado');
    this.props.navigation.navigate('Favorite');
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
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="usuario/repositório"
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => {}}>
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
