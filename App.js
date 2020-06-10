import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, TextInput} from 'react-native';
import PasswordField from 'react-native-password-field';

export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
        source={require('./assets/WeGoLogo.png')}
      />
    <TextInput
      style={styles.inputText}
      placeholder='email'
    />
    <TextInput
      style={styles.inputText}
      placeholder='password'
    />
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#735aff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 20,
    height: 150,
    width: 200,
    resizeMode: 'contain',
  },
  inputText: {
    borderRadius:30,
    borderColor: 'white',
    marginTop: 40,
    color: 'black',
    fontSize: 20
  },
  inputPassword: {
    color: 'white'
  }
});
