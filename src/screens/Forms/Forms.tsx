import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { BatImage } from '../../components/Image/BatImage';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

export function Forms({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Novo estado para exibir mensagem de sucesso
  const [successMessage, setSuccessMessage] = useState('');

  const handleButtonPress = () => {
    if (validateForm()) {
      setSuccessMessage('Formulário enviado com sucesso!'); // Atualiza a mensagem de sucesso
      console.log({ name, email, phone, message });
    }
  };

  const validateForm = () => {
    let hasError = false;
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setMessageError('');

    if (!name) {
      setNameError('Por favor, insira o seu nome.');
      hasError = true;
    }

    if (!email) {
      setEmailError('Por favor, insira o seu email.');
      hasError = true;
    } else if (!email.includes('@')) {
      setEmailError('Por favor, insira um email válido.');
      hasError = true;
    }

    if (!phone) {
      setPhoneError('Por favor, insira o seu telefone.');
      hasError = true;
    }

    if (!message) {
      setMessageError('Por favor, descreva a emergência.');
      hasError = true;
    }

    if (hasError) {
      setSuccessMessage(''); // Limpa a mensagem de sucesso se houver erro
    }

    return !hasError;
  };

  return (
    <View style={styles.container}>
      <View style={styles.formsContainer}>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BatImage />
        </TouchableOpacity>
        </View>

        <Input 
          title="Nome"
          value={name}
          onChangeText={setName}
          error={nameError}
        />

        <Input 
          title="Email"
          value={email}
          onChangeText={setEmail}
          error={emailError}
        />

        <Input 
          title="Telefone"
          value={phone}
          onChangeText={setPhone}
          error={phoneError}
        />

        <Input 
          title="Mensagem"
          value={message}
          onChangeText={setMessage}
          error={messageError}
        />

        {successMessage ? (
          <Text style={styles.sucessText}>{successMessage}</Text> // Exibe a mensagem de sucesso
        ) : null}

        <Button 
          title="Enviar" 
          onPress={handleButtonPress} 
        />
      </View>
    </View>
  );
}
