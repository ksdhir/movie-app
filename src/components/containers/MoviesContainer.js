import { useEffect, useState } from 'react';
import { getMovies } from '../../services/service.js';
import { View, Text } from 'react-native';
import List from '../listItems/List.js';

import BtnBottomSheets from '../common/BtnBottomSheets.js';
import Loading from '../common/Loading.js';

const MoviesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    filterMovies('popular');
  }, []);

  function updateSelectedType(item) {
    filterMovies(item);
  }

  function filterMovies(movieType) {
    // loading on

    setIsLoading(true);

    getMovies(movieType).then((data) => {
      const filteredItems = data.results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          release_date: item.release_date,
          popularity: item.popularity,
          poster_path: item.poster_path,
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
              { title: 'now_playing' },
              { title: 'popular' },
              { title: 'top_rated' },
              { title: 'upcoming' },
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

export default MoviesContainer;
