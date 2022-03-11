import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  // Main
  main: {
    height: height,
    width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  // Center content
  centerContent: {
    paddingTop: 250,
    paddingBottom: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 286,
    height: 130,
    marginBottom: 50,
  },
  title: {
    fontFamily: 'Obviously',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#484966',
  },
  // Bottom content
  bottomContent: {
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF3637',
    width: '90%',
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
  },
  textButton1: {
    fontFamily: 'Obviously',
    color: 'white',
    fontSize: 15,
  },
  textLink: {
    color: '#FF3637',
    fontSize: 15,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default styles;
