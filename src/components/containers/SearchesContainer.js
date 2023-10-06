import { useEffect, useState } from 'react';
import { getMovies } from '../../services/service.js';
import { View, Text } from 'react-native';
import List from '../listItems/List.js';
import { Button } from '@rneui/themed';             
import { AntDesign } from '@expo/vector-icons';

import BtnBottomSheets from '../common/BtnBottomSheets.js';

// import { SearchBar } from 'react-native-elements';
import { SearchBar } from '@rneui/themed';

const SearchesContainer = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    getMovies().then((data) => {
      //   console.log(data.results[0]);
      //   console.log(data.results[0].title);
      //   console.log(data.results[0].release_date);
      //   console.log(data.results[0].popularity);
      //   console.log(data.results[0].poster_path);

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
      console.log(filteredItems[0]);
    });
  }, []);



  function updateSelectedType(item) {
    // setSearch(item);


  };

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
        </Text>
        <View style={{ width: '100%', paddingLeft: 24, paddingRight: 24, marginBottom: 16 }}>
          <SearchBar
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              border: 'none',
              outline: 'none',
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent',
            }}
            placeholder="i.e James Bond, CSI"
            onChangeText={this.updateSearch}
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
              sheetItems={[{ title: 'Multi' }, { title: 'Movie' },{ title: 'TV' }]}
              defaultItem={"Multi"}
              onSelected={(item) => updateSelectedType(item)}
            />
           
          </View>

          <View>
            <Button
              title={'Search'}
              containerStyle={{
                height: 40,
              }}
            />
          </View>
        </View>
      </View>

      {/* Search Results */}

      <List navigation={navigation} DATA={movies} />
    </View>
  );
};

export default SearchesContainer;
