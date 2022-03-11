/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from "react-native"
import type {Node} from 'react';
import feed from "./assets/data/feed"

import {
  SafeAreaView,

  StyleSheet,

} from 'react-native';
import Post from './src/components/Post';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';

const App: () => Node = () => {


  return (
    <SafeAreaView >
      <DestinationSearch/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
