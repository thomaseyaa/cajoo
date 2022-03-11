import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity {...props}>
        <Image
          source={require('../../../../assets/img/icons/arrow.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Connexion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#FF3637',
    paddingTop: 60,
  },
  headerTitle: {
    color: 'white',
    fontFamily: 'Obviously',
    fontWeight: 'bold',
    fontSize: 19,
    alignSelf: 'center',
    marginTop: -28,
  },
  arrow: {
    marginLeft: 15,
    height: 25,
    width: 25,
  },
});

export default Header;
