import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './loginPhone.styles';
import Header from './components/header';
import {validatePhone} from './helpers/loginPhone.helpers';

class LoginPhone extends React.Component {
  openPreviousLanding = () => {
    this.props.navigation.navigate('login');
  };
  submitPhone = () => {
    if (this.state.canGo) {
      this.props.navigation.navigate('confirmPhone');
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      canGo: false,
    };
  }
  onChangePhone = phone => {
    this.setState({
      phone,
    });
    if (validatePhone(phone)) {
      this.setState({
        canGo: true,
      });
    } else {
      this.setState({
        canGo: false,
      });
    }
  };
  render() {
    return (
      <View style={styles.main}>
        <Header onPress={this.openPreviousLanding} />
        <View style={styles.content}>
          <Text style={styles.title}>Quel est votre numéro ?</Text>
          <Text style={styles.subtitle}>
            Pour que notre livreur puisse vous contacter 😄
          </Text>
          <View style={styles.viewPhone}>
            <Image
              style={styles.flag}
              source={require('../../../assets/img/icons/flag.png')}
            />
            <Image
              style={styles.down}
              source={require('../../../assets/img/icons/down.png')}
            />
            <Text style={styles.countryNum}>+33 </Text>
            <TextInput
              style={styles.inputPhone}
              keyboardType="numeric"
              onChangeText={phone => this.onChangePhone(phone)}
              value={this.state.phone}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>
            En cliquant sur "CONTINUER", vous acceprez la{' '}
            <Text style={styles.linkFooter}>Politique de Confidentialité,</Text>{' '}
            les <Text style={styles.linkFooter}>CGU</Text> et les{' '}
            <Text style={styles.linkFooter}>CGV</Text> de Cajoo.
          </Text>
          <TouchableOpacity
            style={this.state.canGo ? styles.buttonGo : styles.buttonCantGo}
            onPress={this.submitPhone}>
            <Text style={styles.textButton}>Continuer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginPhone;
