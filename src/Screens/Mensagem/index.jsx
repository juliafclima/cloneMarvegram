import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { estilos } from './estilo.jsx';

export const Mensagem = () => {
  const [mensagens, setMensagens] = useState([
    { id: '1', texto: 'Oi!', remetente: 'usuário' },
    { id: '2', texto: 'Olá! Como você está?', remetente: 'outro' },
    { id: '3', texto: 'Já assistiu The Marvels?', remetente: 'outro' }
  ]);

  const [novaMensagem, setNovaMensagem] = useState('');

  const handleEnviarMensagem = () => {
    if (novaMensagem.trim() === '') return;

    const novaMsg = { id: String(mensagens.length + 1), texto: novaMensagem, remetente: 'usuário' };
    setMensagens([...mensagens, novaMsg]);
    setNovaMensagem('');
  };

  return (
    <View style={estilos.container}>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.remetente === 'usuário' ? estilos.mensagemUsuario : estilos.mensagemOutro}>
            <Text style={estilos.textoMensagem}>{item.texto}</Text>
          </View>
        )}
      />
      <View style={estilos.containerInput}>
        <TextInput
          style={estilos.input}
          placeholder="Digite sua mensagem..."
          value={novaMensagem}
          onChangeText={(texto) => setNovaMensagem(texto)}
        />
        <TouchableOpacity style={estilos.botaoEnviar} onPress={handleEnviarMensagem}>
          <Text style={estilos.textoBotaoEnviar}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};