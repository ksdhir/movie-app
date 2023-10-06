import { useEffect, useState} from 'react';
import { getMovies } from '../../services/service.js';
import { View, Text } from 'react-native';
import List from '../listItems/List.js';

const MoviesContainer = ({ navigation }) => {

const [movies, setMovies] = useState([]);

  useEffect(() => {
      getMovies().then((data) => {
          
          console.log(data.results[0]);
          console.log(data.results[0].title);
          console.log(data.results[0].release_date);
          console.log(data.results[0].popularity);
          console.log(data.results[0].poster_path);



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
          console.log(filteredItems[0])

    });
  }, []);
    
    

  return (
    <View>
          {/* <Text h1>Movies List</Text> */}
          {/*  */}

          <List navigation={navigation} DATA={movies} />

    </View>
  );
};



export default MoviesContainer;
