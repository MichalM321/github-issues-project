import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxStore from './src/store/store';

// Components
import LayoutComponent from './src/components/Layout/LayoutComponent';
import IssuesList from './src/components/IssuesList/IssuesList';
import IssueDetailScreen from './src/components/IssuesList/IssueDetailScreen';
import Lottie from './src/components/Lottie/Lottie';

// Utils
import Animation from './assets/img/loading-animation.json';
import { GH_TOKEN } from '@env';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();


export default function App() {
  const { store, persistor }= ReduxStore();
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchIssues = () => {
    fetch(`https://api.github.com/repos/facebook/react-native/issues?per_page=10&page=${page}`, {
      headers: {
        Authorization : `token ${GH_TOKEN}`
      }
    })
    .then((res) => res.json())
    .then((res) => {
      setPage(prevState => prevState + 1);
      setIssues([...issues, ...res]);
      setIsLoading(false);
    })
    .catch((err) => {
      setPage(1);
      setIsError(true);
      setIsLoading(false);
      setIssues([])
    })
  };

  useEffect(() => {
    fetchIssues();
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={{backgroundColor: '#0d1117'}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Home"
              >    
                {props => (
                <LayoutComponent>
                  {!isError && (
                    <IssuesList
                      {...props}
                      issues={issues}
                      fetchIssues={fetchIssues}
                    />
                  )}
                  {isLoading && <Lottie source={Animation}/>}
                </LayoutComponent>)}
              </Stack.Screen>
              <Stack.Screen
                name="Detail-Issue"
                options={{
                  cardOverlayEnabled: true,
                  cardStyle: {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {props => (
                <LayoutComponent
                  {...props} 
                >
                  <IssueDetailScreen {...props}/>
                </LayoutComponent>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
          <Toast/>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
