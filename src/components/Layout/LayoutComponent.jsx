import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Components
import NavBar from './NavBar';

//Utils
import Style from './style';

const LayoutComponent = (props) => {
  const style = Style();
  
  return (
    <View style={style.wrapper}>
      <NavBar goBack={props.navigation ? props.navigation.goBack : undefined} title={props.route ? props.route.params.item.title : undefined} />
      <SafeAreaView style={style.childrenLayoutWrapper}>
        {props.children}
      </SafeAreaView>
    </View>
  );
}
 
export default React.memo(LayoutComponent);