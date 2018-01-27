import React from 'react';
import { connect } from 'react-redux';
import Pokedex from './components/Pokedex';

const App = () => <Pokedex />

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);