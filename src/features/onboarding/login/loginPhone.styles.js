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
    marginBottom: 30,
  },
  viewPhone: {
    fontSize: 14,
    marginBottom: 20,
    width: '90%',
    padding: 5,
    backgroundColor: '#EAE8E8',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    marginLeft: 10,
    width: 23,
    height: 23,
  },
  down: {
    marginLeft: 7,
    width: 10,
    height: 10,
  },
  countryNum: {
    marginLeft: 15,
    fontFamily: 'Obviously',
    color: '#484969',
  },
  inputPhone: {
    height: 42,
    width: '90%',
    fontFamily: 'Obviously',
    color: '#484969',
  },
  // Footer
  footer: {
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textFooter: {
    color: '#484969',
    width: '89%',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 25,
  },
  linkFooter: {
    color: '#FF3637',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  buttonGo: {
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
  buttonCantGo: {
    backgroundColor: '#FF9999',
    width: '90%',
    height: 50,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 15,
  },
  textButton: {
    fontFamily: 'Obviously',
    color: 'white',
    fontSize: 15,
  },
});

export default styles;
