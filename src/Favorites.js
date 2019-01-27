import React from 'react';

import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';
// import styles from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTodo: {
    flexDirection: 'row',
  },
});

const Favorites = () => (
  <View style={styles.container}>
    <View style={styles.containerTodo} />
  </View>
);

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
