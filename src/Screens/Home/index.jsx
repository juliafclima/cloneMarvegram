import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { styles } from '../Home/style';

import storie1 from '../../Assets/baby-groot.png';
import storie2 from '../../Assets/capita-marvel.png';
import storie3 from '../../Assets/cosmo.png';
import storie5 from '../../Assets/doutor-estranho.png';
import storie7 from '../../Assets/homem-aranha.png';
import storie8 from '../../Assets/homem-de-ferro.png';
import storie9 from '../../Assets/hulk.png';
import storie10 from '../../Assets/miles-morales.png';
import storie11 from '../../Assets/mulher-hulk.png';
import storie13 from '../../Assets/rocket.png';
import storie15 from '../../Assets/thor.png';
import storie16 from '../../Assets/viuva-negra.png';
import storie17 from '../../Assets/avante.webp';

import { useNavigation } from '@react-navigation/native';

const dadosHistorias = [
  { id: '1', urlFoto: storie2, nome: 'Cap Marvel' },
  { id: '2', urlFoto: storie3, nome: 'Cosmo' },
  { id: '3', urlFoto: storie5, nome: 'Dr Estranho' },
  { id: '4', urlFoto: storie7, nome: 'Homem-Aranha' },
  { id: '5', urlFoto: storie8, nome: 'Tony' },
  { id: '6', urlFoto: storie9, nome: 'Hulk' },
  { id: '7', urlFoto: storie1, nome: 'Groot' },
  { id: '8', urlFoto: storie10, nome: 'Miles' },
  { id: '9', urlFoto: storie11, nome: 'She Hulk' },
  { id: '10', urlFoto: storie13, nome: 'Rocket' },
  { id: '11', urlFoto: storie15, nome: 'Thor' },
  { id: '12', urlFoto: storie16, nome: 'Viúva Negra' },
];

const dadosPostagens = [
  {
    id: '1',
    cabecalho: { uriImagem: storie1, nome: 'Baby Groot' },
    conteudo: { uriImagem: require('../../Assets/iamgroot.png') },
    rodape: { curtidas: 123, comentarios: 37575, legenda: "EU SOU GROOT!" },
  },
  {
    id: '2',
    cabecalho: { uriImagem: storie7, nome: 'Homem-Aranha' },
    conteudo: { uriImagem: require('../../Assets/miranhamanos.png') },
    rodape: { curtidas: 456, comentarios: 56363, legenda: 'Miranhas!' },
  },
  {
    id: '3',
    cabecalho: { uriImagem: storie8, nome: 'Tony Stark' },
    conteudo: { uriImagem: require('../../Assets/ironman.jpg') },
    rodape: { curtidas: 456, comentarios: 1343245, legenda: 'TBT de um dia aí' },
  },
  {
    id: '4',
    cabecalho: { uriImagem: storie9, nome: 'Hulk' },
    conteudo: { uriImagem: require('../../Assets/odeioescada.jpg') },
    rodape: { curtidas: 456, comentarios: 41314, legenda: 'ODEIOOO ESCADAAAAA' },
  },
  {
    id: '5',
    cabecalho: { uriImagem: storie17, nome: 'Capitão América' },
    conteudo: { uriImagem: require('../../Assets/avante.webp') },
    rodape: { curtidas: 456, comentarios: 1334, legenda: 'Vingadores, Avante' },
  },
];

export const Home = () => {
  const [comentario, setComentario] = useState('');
  const [postagensCurtidas, setPostagensCurtidas] = useState([]);

  const handleMudancaComentario = (texto) => {
    setComentario(texto);
  };

  const handlePostarComentario = () => {
    setComentario('');
  };

  const handleAlternarCurtida = (idPostagem) => {
    setPostagensCurtidas((postagensCurtidasAnteriores) => {
      if (postagensCurtidasAnteriores.includes(idPostagem)) {
        return postagensCurtidasAnteriores.filter((id) => id !== idPostagem);
      } else {
        return [...postagensCurtidasAnteriores, idPostagem];
      }
    });
  };

  const postagemCurtida = (idPostagem) => postagensCurtidas.includes(idPostagem);

  const renderizarItemHistoria = ({ item }) => (
    <View style={styles.storiesCard} key={item.id}>
      <Image source={item.urlFoto} style={styles.storiesCardImage} />
      <Text style={styles.storiesCardNome}>{item.nome}</Text>
    </View>
  );

  const renderizarItemPostagem = ({ item }) => (
    <>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderEsquerda}>
            <Image style={styles.contentHeaderEsquerdaImagem} source={{ uri: item.cabecalho.uriImagem }} />
            <Text style={styles.contentHeaderEsquerdaTexto}>{item.cabecalho.nome}</Text>
          </View>
          <View style={styles.contentHeaderPontos}>
            {[1, 2, 3].map((_, index) => (
              <FontAwesome key={index} name="circle" size={4} color="white" />
            ))}
          </View>
        </View>
        <View style={styles.contentImage}>
          <Image source={item.conteudo.uriImagem} style={styles.contentImage} />
        </View>
      </View>

      <View style={styles.contentFooter}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View style={styles.contentFooterEsquerda}>
            <TouchableOpacity onPress={() => handleAlternarCurtida(item.id)}>
              <AntDesign name={postagemCurtida(item.id) ? 'heart' : 'hearto'} size={24} color={postagemCurtida(item.id) ? 'red' : 'white'} />
            </TouchableOpacity>
            <AntDesign name="message1" size={24} color="white" />
            <FontAwesome name="share" size={24} color="white" />
          </View>
          <Feather name="bookmark" size={24} color="white" />
        </View>
        <View style={{ gap: 8, marginTop: 12, paddingLeft: 5 }}>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.cabecalho.nome}</Text>
            <Text style={{ color: '#fff' }}>{item.rodape.legenda}</Text>
          </View>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 11 }}>Ver tradução</Text>
          <Text style={{ color: '#fff', fontWeight: '300' }}>Ver todos os {item.rodape.comentarios} comentários</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingBottom: 8,
                color: 'white',
                underlineColorAndroid: 'transparent',
              }}
              placeholder="Adicione um comentário..."
              value={comentario}
              onChangeText={handleMudancaComentario}
            />
            <TouchableOpacity onPress={handlePostarComentario}>
              <Text style={{ color: 'blue', fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 5, marginLeft: '0%' }}>
                <Ionicons name="ios-send-sharp" size={20} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );

  const navegacao = useNavigation();

  const handleNavegarParaMensagem = () => {
    navegacao.navigate('Mensagem');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white' }}>MARVELGRAM</Text>
        <View style={styles.headerOpcoes}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="message-circle" size={24} color="white" onPress={handleNavegarParaMensagem} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
        <View style={styles.stories}>
          <FlatList
            horizontal={true}
            data={dadosHistorias}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={renderizarItemHistoria}
          />
        </View>

        <FlatList
          data={dadosPostagens}
          keyExtractor={(item) => item.id}
          renderItem={renderizarItemPostagem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
