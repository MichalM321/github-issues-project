import React, { useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { saveComment } from '../../store/actions';
import { getComments } from '../../store/selectors';

// Utils
import Style from './style';
import PlaceholderImage from '../../../assets/img/placeholder.jpg';
import PlaceholderUser from '../../../assets/img/user-placeholder.png';


const IssueDetailScreen = ({route}) => {
  const { item } = route.params;
  const style = Style(120);

  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const comments = useSelector((state) => getComments(state, item.id));
  const dispatch = useDispatch();

  const showValidationToast = () => {
    let validationText = '';

    if (!(commentText.length > 0)) validationText = 'Comment cannot be empty';
    if (!(commentName.length > 3)) validationText = 'Name must have more than 3 characters';
    if (validationText.length < 1) return;
    Toast.show({
      type: 'error',
      text1: validationText,
    });
  };

  const showCommentAddToast = () => {
    Toast.show({
      type: 'success',
      text1: 'You added a comment',
    });
  }

  const saveCommentFunc = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1)+'-'+today.getDate();
    const validation = commentName.length > 3 && commentText.length > 0;
    showValidationToast();
    if (validation) {
      dispatch(saveComment(item.id, commentText, commentName, date));
      showCommentAddToast();
      setCommentName('');
      setCommentText('');
    }
  };

  const getDate = useCallback((date) => {
    return (date.split("T") ? date.split("T")[0] : '');
  }, []);

  const getStatus = useCallback((closedAt) => {
    return (closedAt ? (closedAt.split("T") ? `Closed at ${closedAt.split("T")[0]}` : '') : 'Open');
  }, []);

  const renderComments = useCallback(() => {
    const commentsAll = comments.map((comment, index) => (
      <View 
        style={[style.singleComment, index === 0 ? { borderBottomWidth: 1 } : null]}
        key={`${comment.issueId}-${comment.comment}-${index}`}
      >
        <Image
          source={PlaceholderUser}
          style={style.commentImage}
        />
        <View style={style.infoWrap}>
          <Text style={style.text}>Commented at: {comment.date}</Text>
          <Text style={style.text}>By user: {comment.commentAuthor}</Text>
          <View style={style.titleTextWrap}>
            <Text style={style.textCommon}>Comment: {comment.comment}</Text>
          </View>
        </View>
      </View>
    )).reverse();

    return (
      <>
        {comments.length < 1 
        ? <Text style={style.textHeader}>Be first who comment this issue <FontAwesome5 name='arrow-up' color='#AAA' size={18}/></Text> 
        : <Text style={style.textHeader}>Comments:</Text>
        }
        {commentsAll}
      </>
    )

  }, [comments])
  

  return (
  <View style={style.detailIssueWrap}>
    <View style={style.infoBox}>
      <Image
        source={PlaceholderImage}
        style={style.placeholderImage}
      />
      <View style={style.infoWrap}>
        <Text style={style.textHeader}>{getDate(item.created_at)}</Text>
        <Text style={style.textCommon}>Status: {getStatus(item.closed_at)}</Text>
        <View style={style.titleTextWrap}>
          <Text style={style.textCommon}>Title: {item.title}</Text>
        </View>
      </View>
    </View>
    <ScrollView style={style.bodyWrap}>
      <View style={style.bodyText}>
        <Text style={[style.textCommon, { fontSize: 14 }]}>{item.body}</Text>
      </View>
      <View style={style.commentSection}>
        <View style={style.addComment}>
          <Text style={style.textHeader}>Add Comment: </Text>
          <TextInput
            maxLength={30}
            value={commentName}
            onChangeText={(text) => setCommentName(text)}
            style={style.textInput}
            placeholder="Name"
            placeholderTextColor={'#999'}
          />
          <TextInput
            multiline
            value={commentText}
            onChangeText={(text) => setCommentText(text)}
            style={[style.textInput, style.textInputComment]}
            numberOfLines={2}
            placeholder="Comment..."
            placeholderTextColor={'#999'}
            maxLength={300}
          />
          <View style={style.buttonContainer}>
            <Button title="Send" color="#4D6FA3" onPress={saveCommentFunc}/>
          </View>
        </View>
        <View style={style.comments}>
          {renderComments()}
        </View>
      </View>
    </ScrollView>
  </View>
  );
}
 
export default IssueDetailScreen;