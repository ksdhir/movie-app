import { useState } from 'react';
import { searchMovies } from '../../services/service.js';
import { View, Text } from 'react-native';
import List from '../listItems/List.js';
import { Button } from '@rneui/themed';

import BtnBottomSheets from '../common/BtnBottomSheets.js';
import Loading from '../common/Loading.js';

// import { SearchBar } from 'react-native-elements';
import { SearchBar } from '@rneui/themed';

const SearchesContainer = ({ navigation }) => {
  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const [search, setSearch] = useState('');
  const [movieType, setMovieType] = useState('Multi');

  const [movies, setMovies] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  function updateSelectedType(item) {
    setMovieType(item);
  }

  function searchNow() {
    // validate if search exists and is not empty
    if (search.length && search !== ' ') {
      setIsError(false);
      setIsLoading(true);
      setIsSearchClicked(true);

      searchMovies(movieType.toLowerCase(), search).then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
    } else {
      setIsError(true);
    }
  }

  return (
    <View>
      {/* Search Menu List */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          Search Movie/TV Show Name
          <Text style={{color: "red"}}>
            *
          </Text>
        </Text>
        <View
          style={{
            width: '100%',
            paddingLeft: 32,
            paddingRight: 32,
            marginBottom: 16,
          }}
        >
          <SearchBar
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: isError ? 1 : 0,
              border: 'none',
              outline: 'none',
              borderTopColor: isError ? 'red' : 'transparent',
              borderBottomColor: isError ? 'red' : 'transparent',
              borderColor: 'red',
              padding: 0,
              borderRadius: isError ? 4 : 0,
            }}
            placeholder="i.e James Bond, CSI"
            onChangeText={(text) => updateSearch(text)}
            value={search}
          />
        </View>
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          Choose Search Type
          <Text style={{color: "red"}}>
            *
          </Text>
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            marginBottom: 8,
            textAlign: 'center',
            width: '100%',
            paddingLeft: 32,
            paddingRight: 32,
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          {/* Two items side by side a button on left and a button on right */}

          <View
            style={{
              flex: 1,
            }}
          >
            <BtnBottomSheets
              sheetItems={[
                { title: 'Multi' },
                { title: 'Movie' },
                { title: 'TV' },
              ]}
              defaultItem={'Multi'}
              onSelected={(item) => updateSelectedType(item)}
              isError={isError}
            />
          </View>

          <View>
            <Button
              onPress={() => searchNow()}
              title={'Search'}
              containerStyle={{
                height: 40,
              }}
            />
          </View>
        </View>

        {/* Error Message */}
        <View
          style={{
            display: isError ? 'block' : 'none',
            alignSelf: 'left',
            paddingLeft: 32,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: 'red',
            }}
          >
            Movie/TV Show Name is required
          </Text>
        </View>

        {/* Normal Message */}

        <View
          style={{
            display: !isError ? 'block' : 'none',
            alignSelf: 'left',
            paddingLeft: 32,
          }}
        >
          <Text
            style={{
              fontSize: 14,
            }}
          >
            Please select a search type
          </Text>
        </View>

      </View>

      {/* Default State message */}

      {!isSearchClicked && (
        <>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              color: 'gray',
              marginTop: 64,
            }}
          >
            Please initiate a search
          </Text>
        </>
      )}

      {/* Search Results */}

      {isLoading && <Loading />}

      {!isLoading && movies.length > 0 && (
        <List navigation={navigation} DATA={movies} />
      )}
    </View>
  );
};

export default SearchesContainer;
