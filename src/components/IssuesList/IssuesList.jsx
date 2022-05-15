import React, { useCallback } from 'react';
import { FlatList, View, Text, Pressable, Image } from 'react-native';
import Placeholder from '../../../assets/img/placeholder.jpg';
import Style from './style';

const itemHeight = 140;
const IssuesList = ({issues, fetchIssues, navigation}) => {
  const style = Style();

  const getDate = useCallback((date) => {
    return (date.split("T") ? date.split("T")[0] : '');
  }, []);

  const getStatus = useCallback((closedAt) => {
    return (closedAt ? (closedAt.split("T") ? `Closed at ${closedAt.split("T")[0]}` : '') : 'Open');
  }, [])
  
  

  const renderItem = useCallback(({item, index}) => (
    <View 
      style={[style.issue, index === 0 && { marginTop: 16 }]}
    >
      <Pressable 
        onPress={() => { 
          navigation.navigate('Detail-Issue', { item })
        }}
        style={style.issuePressable}
        android_ripple={{
          color: '#2d3137',
        }}
      >
        <Image
          source={Placeholder}
          style={style.placeholderImage}
        />
        <View style={style.issueInfo}>
          <Text style={style.text}>
            Issue date: {getDate(item.created_at)}
          </Text>
          <Text style={style.text}>
            Status: {getStatus(item.closed_at)}
          </Text>
          <View style={style.titleTextWrap}>
            <Text style={style.textCommon} numberOfLines={3}>Title: {item.title}</Text>
          </View>
        </View>
      </Pressable>   
    </View>
  ), []);

  const getItemLayout = useCallback((data, index) => (
    { length: itemHeight, offset: itemHeight * index, index }
  ), []);
  
  return (
  <FlatList
    style={style.issuesList}
    data={issues}
    renderItem={renderItem}
    windowSize={3}
    getItemLayout={getItemLayout}
    keyExtractor={(item) => `${item.id}-${item.created_at}`}
    onEndReached={fetchIssues}
    onEndReachedThreshold={0.1}
  >

  </FlatList>
  );
}
 
export default IssuesList;