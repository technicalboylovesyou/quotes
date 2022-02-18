import * as React from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import QuotesItem from '../QuotesItem';
import {styles} from "./styles";

export const QuotesList = (props) => {
  const renderItem = ({item}) => {
    return <QuotesItem item={item}/>;
  };
  return (
    <View style={{width: '100%'}}>
      <View
        style={{flexDirection: 'row'}}
      >
        <Text style={styles.headerCell}>Направление обмена</Text>
        <Text style={styles.headerCell}>Последняя цена</Text>
        <Text style={styles.headerCell}>Самая высокая цена</Text>
        <Text style={styles.headerCell}>Процент изменения</Text>
      </View>
      {props.data.length === 0 && <View style={styles.spinner}>
        <ActivityIndicator size={"large"}/>
      </View>}
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
