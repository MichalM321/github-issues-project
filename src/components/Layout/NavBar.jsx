import React from 'react';
import { View, StatusBar, Text, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Style from './style';


const NavBar = ({goBack, title}) => {
  const style = Style();

  return (
    <View>
      <StatusBar backgroundColor={style.statusBar.backgroundColor}/>
      <View style={style.navbar}>
        {goBack 
        ? (
          <Pressable onPress={goBack} style={style.backButton}>
            <FontAwesome5 name='angle-left' color='#AAA' size={26}/>
          </Pressable>
        ) : null}
        <Text style={style.navTitle}>{title ? title.substring(0, 20) + '...' : 'GH Issues'}</Text>
      </View>
    </View>
  );
}
 
export default NavBar;