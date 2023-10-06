import { useEffect, useState } from 'react';
import { getMovies } from '../../services/service.js';
import { View, Text } from 'react-native';
import List from '../listItems/List.js';

import BtnBottomSheets from '../common/BtnBottomSheets.js';
import Loading from '../common/Loading.js';

const TVShowsContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    filterMovies('popular');
  }, []);

  function updateSelectedType(item) {
    filterMovies(item);
  }

  function filterMovies(filterBy) {
    // loading on

    setIsLoading(true);

    getMovies(filterBy, "tv").then((data) => {
      const filteredItems = data.results.map((item) => {
        return {
          id: item.id,
          title: item.name,
          release_date: item.release_date ?? item.first_air_date,
          popularity: item.popularity,
          poster_path: item.poster_path,
          isTV: true,
        };
      });

      setMovies(filteredItems);
      // loading off
      setIsLoading(false);
    });
  }

  return (
    <View>
      {/* <Text h1>Movies List</Text> */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: '70%',
          }}
        >
          <BtnBottomSheets
            sheetItems={[
              { title: 'airing_today' },
              { title: 'on_the_air' },
              { title: 'popular' },
              { title: 'top_rated' },
            ]}
            defaultItem={'popular'}
            onSelected={(item) => updateSelectedType(item)}
          />
        </View>
      </View>

      {isLoading && <Loading />}

      {!isLoading && (
        <View>
          <List navigation={navigation} DATA={movies} />
        </View>
      )}
    </View>
  );
};

export default TVShowsContainer;
