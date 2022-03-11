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
    marginBottom: 220,
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    fontFamily: 'Obviously',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#484969',
    marginBottom: 32,
  },
  button1: {
    backgroundColor: 'black',
    width: '90%',
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 15,
  },
  textButton1: {
    fontFamily: 'Obviously',
    color: 'white',
    fontSize: 15,
  },
  apple: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  button2: {
    backgroundColor: '#2579EA',
    width: '90%',
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 15,
  },
  textButton2: {
    fontFamily: 'Obviously',
    color: 'white',
    fontSize: 15,
  },
  facebook: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
  button3: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    marginBottom: 15,
    border: 10,
  },
  textButton3: {
    fontFamily: 'Obviously',
    color: 'black',
    fontSize: 15,
  },
  google: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  button4: {
    backgroundColor: '#FF3637',
    width: '90%',
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 15,
  },
  textButton4: {
    fontFamily: 'Obviously',
    color: 'white',
    fontSize: 15,
  },
  phone: {
    height: 18,
    width: 18,
    marginRight: 10,
  },
});

export default styles;
