import { FlatList, Image, ScrollView, Text, View } from "react-native";

import { AntDesign, Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../Home/style';

import storie1 from '../../Assets/baby-groot.png';
import storie2 from '../../Assets/capita-marvel.png';
import storie3 from '../../Assets/cosmo.png';
import storie4 from '../../Assets/deadpool.png';
import storie5 from '../../Assets/doutor-estranho.png';
import storie6 from '../../Assets/feiticeira-escarlate.png';
import storie7 from '../../Assets/homem-aranha.png';
import storie8 from '../../Assets/homem-de-ferro.png';
import storie9 from '../../Assets/hulk.png';
import storie10 from '../../Assets/miles-morales.png';
import storie11 from '../../Assets/mulher-hulk.png';
import storie13 from '../../Assets/rocket.png';
import storie14 from '../../Assets/stan-lee.png';
import storie15 from '../../Assets/thor.png';
import storie16 from '../../Assets/viuva-negra.png';

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie1,
    nome: 'Groot',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie2,
    nome: 'Cap Marvel',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie3,
    nome: 'Cosmo',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie4,
    nome: 'Deadpool',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie5,
    nome: 'Dr Estranho',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie6,
    nome: 'Wanda',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie7,
    nome: 'Miranha',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie8,
    nome: 'Tony',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie9,
    nome: 'Hulk',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie10,
    nome: 'Miles',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie11,
    nome: 'She Hulk',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie13,
    nome: 'Rocket',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie14,
    nome: 'Stan Lee',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie15,
    nome: 'Thor',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie16,
    nome: 'Viúva Negra',
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white' }}>MARVELGRAM</Text>
        <View style={styles.headerOptions}>
          <AntDesign name="hearto" size={24} color="white" />
          <Feather name="message-circle" size={24} color="white" />
        </View>
      </View>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.stories}>
          <FlatList
            horizontal={true}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.storiesCard} key={item.id}>
                <Image
                  source={item.photoURL}
                  style={styles.storiesCardImage}
                />
                <Text style={styles.storiesCardNome}>{item.nome}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: storie1 }}
              />
              <Text style={styles.contentHeaderLeftText}>Baby Groot</Text>
            </View>
            <View style={styles.contentHeaderPoints}>
              <FontAwesome name="circle" size={4} color="white" />
              <FontAwesome name="circle" size={4} color="white" />
              <FontAwesome name="circle" size={4} color="white" />
            </View>
          </View>
          <View style={styles.contentImage}>
            <Image
              source={require('../../Assets/iamgroot.png')}
              style={styles.contentImage}
            />
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <View style={styles.contentFooterLeft}>
              <AntDesign name="hearto" size={24} color="white" />
              <AntDesign name="message1" size={24} color="white" />
              <FontAwesome name="share" size={24} color="white" />
            </View>
            <Feather name="bookmark" size={24} color="white" />
          </View>
          <View style={{ gap: 8, marginTop: 12, paddingLeft: 6 }}>
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Baby Groot</Text>
              <Text style={{ color: '#fff' }}>I'M GROOT!</Text>
            </View>
            <Text style={{ color: '#fff' }}>Ver tradução</Text>
            <Text style={{ color: '#fff' }}>Ver todos os 3 comentários</Text>
            <Text style={{ color: '#fff' }}>Adicione um comentário...</Text>
          </View>
        </View>

        {/* SEGUNDO POST */}

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: storie7 }}
              />
              <Text style={styles.contentHeaderLeftText}>Spider Man</Text>
            </View>
            <View style={styles.contentHeaderPoints}>
              <FontAwesome name="circle" size={4} color="white" />
              <FontAwesome name="circle" size={4} color="white" />
              <FontAwesome name="circle" size={4} color="white" />
            </View>
          </View>
          <View style={styles.contentImage}>
            <Image
              source={require('../../Assets/miranhamanos.png')}
              style={styles.contentImage}
            />
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <View style={styles.contentFooterLeft}>
              <AntDesign name="hearto" size={24} color="white" />
              <AntDesign name="message1" size={24} color="white" />
              <FontAwesome name="share" size={24} color="white" />
            </View>
            <Feather name="bookmark" size={24} color="white" />
          </View>
          <View style={{ gap: 8, marginTop: 12, paddingLeft: 6 }}>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Spider Man</Text>
              <Text style={{ color: '#fff' }}>Mais que miranhas, manos!</Text>
            </View>
            <Text style={{ color: '#fff' }}>Ver tradução</Text>
            <Text style={{ color: '#fff' }}>Ver todos os 6 comentários</Text>
            <Text style={{ color: '#fff' }}>Adicione um comentário...</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
