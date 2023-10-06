import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import { Image, Button } from '@rneui/themed';

const List = ({ navigation, DATA }) => {
  const Item = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.img}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>

      <View style={styles.itemDetail}>
        <Text style={{ fontWeight: 'bold', width: '80%' }}>{item.title}</Text>

        <Text style={{ fontSize: 12 }}>Popularity: {item.popularity}</Text>

        <Text style={{ fontSize: 12 }}>Release Date: {item.release_date}</Text>

        <Button
          title="More Details"
          titleStyle={{ fontSize: 14 }}
          color="#31adcd"
          onPress={() => {
            navigation.navigate("show", {
              id: item.id,
              title: item.title ?? item.name,
              type: item.isTV ? "tv" : "movie",
            });
          }}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      style={styles.list}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
    padding: 16,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },

  imgContainer: {
    width: 100,
  },

  img: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },

  itemDetail: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#2c3e50',
  },
});

export default List;
