import { useState } from 'react';
import { Button, BottomSheet, ListItem } from '@rneui/themed';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const BtnBottomSheets = ({
  isError,
  sheetItems,
  defaultItem,
  onSelected = () => [],
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  function updateSelectedItem(item) {
    setSelectedItem(item);
    setVisible(false);

    // call parent function to update selectedItem
    onSelected(item);
  }

  return (
    <>
      <Button
        onPress={() => setVisible(true)}
        buttonStyle={{
          backgroundColor: 'white',
          borderRadius: 3,
          borderColor: isError ? 'red' : 'black',
          borderWidth: 1,
        }}
        containerStyle={{
          height: 40,
        }}
        titleStyle={{ color: 'black' }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {selectedItem}
          </Text>
          <AntDesign name="down" size={16} color="black" />
        </View>
      </Button>
      {/* Bottom Sheet - React native element */}
      <BottomSheet isVisible={visible}>
        <View
          style={{
            backgroundColor: 'white',
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 16,
            paddingTop: 16,
          }}
        >
          {sheetItems.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={{
                backgroundColor: l.title == selectedItem ? '#177166' : 'white',
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 8,
              }}
              onPress={() => updateSelectedItem(l.title)}
            >
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    color: l.title == selectedItem ? 'white' : 'black',
                  }}
                >
                  {l.title}
                  <View
                    style={{
                      display: l.title == selectedItem ? 'block' : 'none',
                      paddingLeft: 8,
                      marginBottom: -2,
                    }}
                  >
                    <FontAwesome name="check" size={24} color="white" />
                  </View>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </BottomSheet>
    </>
  );
};

export default BtnBottomSheets;
