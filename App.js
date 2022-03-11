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
import Home from './src/screens/Home';
import {
  SafeAreaView,

  StyleSheet,

} from 'react-native';
import Post from './src/components/Post';

const App: () => Node = () => {


  return (
    <SafeAreaView >
        <Post/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
