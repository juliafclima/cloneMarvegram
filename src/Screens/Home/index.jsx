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

import { useNavigation } from '@react-navigation/native';

const storieData = [
  { id: '1', photoURL: storie2, nome: 'Cap Marvel' },
  { id: '2', photoURL: storie3, nome: 'Cosmo' },
  { id: '3', photoURL: storie5, nome: 'Dr Estranho' },
  { id: '4', photoURL: storie7, nome: 'Miranha' },
  { id: '5', photoURL: storie8, nome: 'Tony' },
  { id: '6', photoURL: storie9, nome: 'Hulk' },
  { id: '7', photoURL: storie1, nome: 'Groot' },
  { id: '8', photoURL: storie10, nome: 'Miles' },
  { id: '9', photoURL: storie11, nome: 'She Hulk' },
  { id: '10', photoURL: storie13, nome: 'Rocket' },
  { id: '11', photoURL: storie15, nome: 'Thor' },
  { id: '12', photoURL: storie16, nome: 'Viúva Negra' },
];

const postData = [
  {
    id: '1',
    header: { imageUri: storie1, nome: 'Baby Groot' },
    content: { imageUri: require('../../Assets/iamgroot.png') },
    footer: { likes: 123, comments: 37575, caption: "I'M GROOT!" },
  },
  {
    id: '2',
    header: { imageUri: storie7, nome: 'Spider Man' },
    content: { imageUri: require('../../Assets/miranhamanos.png') },
    footer: { likes: 456, comments: 56363, caption: 'Miranhas!' },
  },
  {
    id: '3',
    header: { imageUri: storie8, nome: 'Tony Stark' },
    content: { imageUri: require('../../Assets/ironman.jpg') },
    footer: { likes: 456, comments: 1343245, caption: 'TBT de um dia ai' },
  },
  {
    id: '4',
    header: { imageUri: storie9, nome: 'Hulk' },
    content: { imageUri: require('../../Assets/odeioescada.jpg') },
    footer: { likes: 456, comments: 41314, caption: 'ODEIOOO ESCADAAAAA' },
  },
];

export const Home = () => {

  const [comment, setComment] = useState('');
  const [likedPosts, setLikedPosts] = useState([]);

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handlePostComment = () => {
    setComment('');
  };

  const handleToggleLike = (postId) => {
    setLikedPosts((prevLikedPosts) => {
      if (prevLikedPosts.includes(postId)) {
        return prevLikedPosts.filter((id) => id !== postId);
      } else {
        return [...prevLikedPosts, postId];
      }
    });
  };

  const isPostLiked = (postId) => likedPosts.includes(postId);

  const renderStorieItem = ({ item }) => (
    <View style={styles.storiesCard} key={item.id}>
      <Image source={item.photoURL} style={styles.storiesCardImage} />
      <Text style={styles.storiesCardNome}>{item.nome}</Text>
    </View>
  );

  const renderPostItem = ({ item }) => (
    <>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderLeft}>
            <Image style={styles.contentHeaderLeftImage} source={{ uri: item.header.imageUri }} />
            <Text style={styles.contentHeaderLeftText}>{item.header.nome}</Text>
          </View>
          <View style={styles.contentHeaderPoints}>
            {[1, 2, 3].map((_, index) => (
              <FontAwesome key={index} name="circle" size={4} color="white" />
            ))}
          </View>
        </View>
        <View style={styles.contentImage}>
          <Image source={item.content.imageUri} style={styles.contentImage} />
        </View>
      </View>

      <View style={styles.contentFooter}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View style={styles.contentFooterLeft}>
            <TouchableOpacity onPress={() => handleToggleLike(item.id)}>
              <AntDesign name={isPostLiked(item.id) ? 'heart' : 'hearto'} size={24} color={isPostLiked(item.id) ? 'red' : 'white'} />
            </TouchableOpacity>
            <AntDesign name="message1" size={24} color="white" />
            <FontAwesome name="share" size={24} color="white" />
          </View>
          <Feather name="bookmark" size={24} color="white" />
        </View>
        <View style={{ gap: 8, marginTop: 12, paddingLeft: 5 }}>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.header.nome}</Text>
            <Text style={{ color: '#fff' }}>{item.footer.caption}</Text>
          </View>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 11 }}>Ver tradução</Text>
          <Text style={{ color: '#fff', fontWeight: '300' }}>Ver todos os {item.footer.comments} comentários</Text>
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
              value={comment}
              onChangeText={handleCommentChange}
            />
            <TouchableOpacity onPress={handlePostComment}>
              <Text style={{ color: 'blue', fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 5, marginLeft: '0%' }}>
                <Ionicons name="ios-send-sharp" size={20} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );

  const navigation = useNavigation();
  
  const handleNavigateToMensagem = () => {
    navigation.navigate('Mensagem');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white' }}>MARVELGRAM</Text>
        <View style={styles.headerOptions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="message-circle" size={24} color="white" onPress={handleNavigateToMensagem} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
        <View style={styles.stories}>
          <FlatList
            horizontal={true}
            data={storieData}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={renderStorieItem}
          />
        </View>

        <FlatList
          data={postData}
          keyExtractor={(item) => item.id}
          renderItem={renderPostItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
