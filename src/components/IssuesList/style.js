import { StyleSheet } from "react-native";

function Style(imageSize) {
  return StyleSheet.create({
    issuesList: {
      paddingHorizontal: 10,
    },
    issue: {
      marginVertical: 8,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#aaa',
      color: '#aaa',
    },
    issuePressable: {
      height: 130,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    placeholderImage: {
      height: imageSize || '100%',
      width: imageSize || '30%',
      borderRadius: 5,
      borderWidth: 1,
    },
    issueInfo: {
      height: 100,
      maxWidth: '68%',
      marginLeft: 20,
      marginRight: 10,
      paddingRight: 10,
      justifyContent: 'flex-start',
    },
    text: {
      color: '#ccc',
      fontSize: 14,
      fontWeight: 'bold',
      flexWrap: 'wrap',
    },
    titleTextWrap: {
      flexDirection: 'row',
    },
    textCommon: {
      color: '#ccc',
      fontSize: 15,
      flexWrap: 'wrap',
      marginBottom: 5,
    },
    textHeader: {
      color: '#ccc',
      fontSize: 18,
      flexWrap: 'wrap',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    detailIssueWrap: {
      padding: 10,
      paddingBottom: 0,
      maxHeight: '100%',
    },
    infoBox: {
      flexDirection: 'row',
    },
    infoWrap: {
      maxWidth: '70%',
      marginLeft: 10,
      textAlign: 'right',
      flexGrow: 1,
    },
    bodyWrap: {
      marginTop: 10,
    },
    bodyText: {
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#555',
    },
    commentSection: {
      marginTop: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#aaa',
      color: '#ddd',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
      borderRadius: 3,
    },
    textInputComment: {
      textAlignVertical: 'top',
    },
    buttonContainer: {
      marginTop: 10,
      marginBottom: 20,
    },
    comments: {
      marginBottom: 20,
    },
    singleComment: {
      flexDirection: 'row',
      minHeight: 140,
      width: '100%',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#777',
    },
    commentImage: {
      height: imageSize || '100%',
      width: imageSize || '30%',
      borderRadius: 5,
      borderWidth: 1,
    }
  })
};

export default Style;