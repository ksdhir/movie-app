import { View, Text } from 'react-native';
import MoviesContainer from '../containers/MoviesContainer.js';
import SearchesContainer from '../containers/SearchesContainer.js';
import TVShowsContainer from '../containers/TVShowsContainer.js';
import { Tab } from '@rneui/themed';
import { TabView } from '@rneui/base';
import { useState } from 'react';

const IndexScreen = ({ navigation }) => {
  const [tabIndex, setIndex] = useState(0);

  return (
    <>
      <Tab
        value={tabIndex}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'black',
          height: 3,
        }}
      >
        <Tab.Item
          title="Movies"
          titleStyle={{
            color: tabIndex === 0 ? 'black' : 'gray',
            fontSize: 12,
          }}
        />

        <Tab.Item
          title="Search Results"
          titleStyle={{
            color: tabIndex === 1 ? 'black' : 'gray',
            fontSize: 12,
          }}
        />

        <Tab.Item
          title="TV Shows"
          titleStyle={{
            color: tabIndex === 2 ? 'black' : 'gray',
            fontSize: 12,
          }}
        />
      </Tab>

      <TabView value={tabIndex} onChange={setIndex}>
        <TabView.Item
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MoviesContainer navigation={navigation} />
        </TabView.Item>

        <TabView.Item  style={{
          width: '100%'
          }}>
          <SearchesContainer navigation={navigation} />
        </TabView.Item>

        <TabView.Item style={{width: '100%' }}>
          <TVShowsContainer navigation={navigation} />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default IndexScreen;
