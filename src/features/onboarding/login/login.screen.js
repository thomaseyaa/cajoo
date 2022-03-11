import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './login.styles';
import Header from './components/header';

class Login extends React.Component {
  openPreviousLanding = () => {
    this.props.navigation.navigate('landing');
  };
  openLoginPhoneLanding = () => {
    this.props.navigation.navigate('loginPhone');
  };
  render() {
    return (
      <View style={styles.main}>
        <Header onPress={this.openPreviousLanding} />
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Connecez vous simplement !</Text>
          <TouchableOpacity style={styles.button1}>
            <Image
              source={require('../../../assets/img/icons/apple.png')}
              style={styles.apple}
            />
            <Text style={styles.textButton1}>Connecez avec Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Image
              source={require('../../../assets/img/icons/facebook.png')}
              style={styles.facebook}
            />
            <Text style={styles.textButton3}>Connecez avec Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Image
              source={require('../../../assets/img/icons/google.png')}
              style={styles.google}
            />
            <Text style={styles.textButton3}>Connecez avec Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button4}
            onPress={this.openLoginPhoneLanding}>
            <Image
              source={require('../../../assets/img/icons/phone.png')}
              style={styles.phone}
            />
            <Text style={styles.textButton4}>Avec votre numéro !</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
