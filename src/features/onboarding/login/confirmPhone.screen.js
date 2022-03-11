import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './confirmPhone.styles';
import Header from './components/header';

class confirmPhone extends React.Component {
  openPreviousLanding = () => {
    this.props.navigation.navigate('loginPhone');
  };
  render() {
    return (
      <View style={styles.main}>
        <Header onPress={this.openPreviousLanding} />
        <View style={styles.content}>
          <Text style={styles.title}>Confirmez votre numéro !</Text>
          <Text style={styles.subtitle}>
            Entrez le code envoyé au +33123456789
          </Text>
          <View style={styles.viewInput}>
            <TextInput style={styles.inputNumber} keyboardType="numeric" />
            <TextInput style={styles.inputNumber} keyboardType="numeric" />
            <TextInput style={styles.inputNumber} keyboardType="numeric" />
            <TextInput style={styles.inputNumber} keyboardType="numeric" />
          </View>
          <Text style={styles.subtitle}>
            Vous n'avez pas reçu le code ?{' '}
            <Text style={styles.textLink}>Renvoyer</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default confirmPhone;
