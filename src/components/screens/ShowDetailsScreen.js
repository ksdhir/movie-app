import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import Loading from '../common/Loading.js';
import { getFilmDetail } from '../../services/service.js';
import { Image } from '@rneui/themed';

const ShowDetailsScreen = ({ navigation, route }) => {
  const { id, title, type } = route.params;

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Update the title of the screen
    navigation.setOptions({
      title,
      headerBackTitle: 'Back to Screen',
    });

    // loading on
    setIsLoading(true);

    getFilmDetail(id, type).then((data) => {
      setDetails(data);

      setIsLoading(false);
    });
  }, []);

  return (
    <View>
      {isLoading && <Loading />}

      {!isLoading && (
        <ScrollView style={styles.scrollviewStyle}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 36,
              marginBottom: 16,
              fontWeight: 'bold',
              fontSize: 24,
            }}
          >
            {details.title ?? details.name}
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
              }}
              style={{ width: 250, height: 250 }}
            />
          </View>

          <Text style={styles.detailsContainer}>{details.overview}</Text>

          <Text style={{ textAlign: 'left', marginTop: 16, paddingLeft: 32 }}>
            Popularity: {details.popularity} | Release Date:{' '}
            {details.release_date ?? details.first_air_date}
          </Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollviewStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    height: '100%',
    gap: 16,
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  detailsContainer: {
    paddingLeft: 22,
    width: 320,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

export default ShowDetailsScreen;
