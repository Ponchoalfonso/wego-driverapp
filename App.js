import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: null,
        password: null,
    };
}

logIn = () => {
    getToken(this.state.username, this.state.password)
    .then(data => {
        global.token = data.token;
        Actions.home()
    })
    .catch(error => { console.warn(`${error}`)});
}

  render() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
        source={require('./assets/WeGoLogo.png')}
      />
    <TextInput
                    style={styles.textInput}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    placeholder={'Correo electrónico'}
                    placeholderTextColor={'#000035'}
                    onSubmitEditing={() => { this.password.TextInput.focus(); }}
                    returnKeyType={'next'}
                    autoCompleteType='email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry= {true}
                    placeholder={'Contraseña'}
                    placeholderTextColor={'#000035'}
                    ref={input => {this.passwordTextInput = input; } }
                    returnKeyType={'done'}
                    onSubmitEditing={this.ingresar}
                    autoCompleteType='password'
                />
                <TouchableOpacity onPress={this.logIn} style={styles.boton}>
                    <Text style={styles.textoBoton}>
                        Log in
                    </Text>
                </TouchableOpacity>
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
  textInput: {
    borderRadius:30,
    borderColor: 'white',
    marginTop: 40,
    color: 'black',
    fontSize: 20
  },
});
