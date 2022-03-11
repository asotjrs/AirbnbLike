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

const App: () => Node = () => {


  return (
    <SafeAreaView >
        <Post post={feed[0]}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
