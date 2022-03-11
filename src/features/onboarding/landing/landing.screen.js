import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './landing.styles';

class Landing extends React.Component {
  openLoginLanding = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.centerContent}>
          <Image
            source={require('../../../assets/img/cajoo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Vos courses en 3 clics !</Text>
        </View>
        <View style={styles.bottomContent}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.openLoginLanding}>
            <Text style={styles.textButton1}>ME CONNECTER 👋</Text>
          </TouchableOpacity>
          <Text style={styles.textLink}>Découvrir l'app</Text>
        </View>
      </View>
    );
  }
}

export default Landing;
