import { FlatList, Image, Text, View } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
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
import storie12 from '../../Assets/pantera-negra.png';
import storie13 from '../../Assets/rocket.png';
import storie14 from '../../Assets/stan-lee.png';
import storie15 from '../../Assets/thor.png';
import storie16 from '../../Assets/viuva-negra.png';

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie1
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie2
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie3
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie4
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie5
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie6
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie7
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie8
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie9
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie10
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie11
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie12
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie13
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie14
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie15
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: storie16
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
            </View>
          )}
        />
      </View>
    </View>
  );
}
