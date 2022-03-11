import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  // Main
  main: {
    height: height,
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  // Content
  content: {
    marginBottom: 350,
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Obviously',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#484969',
    marginBottom: 10,
  },
  subtitle: {
    color: '#484969',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  viewInput: {
    width: '90%',
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  inputNumber: {
    borderRadius: 12,
    margin: 5,
    padding: 20,
    backgroundColor: '#EAE8E8',
    width: '22%',
    textAlign: 'center',
  },
  textLink: {
    color: '#FF3637',
    fontSize: 12,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default styles;
