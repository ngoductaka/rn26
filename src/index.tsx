import React, {useEffect} from 'react';
import {Text, Box, Pressable, Center, NativeBaseProvider} from 'native-base';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {get} from 'lodash';
import Login from './login';
import Register from './register';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import { logOut } from './redux/user.slice';
import Home from './screen/home';
import Setting from './screen/setting';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route?.params?.productName,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          //   headerBackVisible: false,
          //   headerBackButtonMenuEnabled: false,
          headerBackTitleVisible: false,
          //   headerBackTitle: 'Back',
        })}
        name="Detail"
        component={Setting}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={() => <Login />}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: renderTabIcon(route),
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen
      options={{headerShown: false}}
      name="Home"
      component={HomeStack}
    />
    <Tab.Screen
      options={{headerShown: false}}
      name="Settings"
      component={Setting}
    />
  </Tab.Navigator>
);
const Tab = createBottomTabNavigator();

const App = () => {
  const isLogin = useSelector((state: any) => {
    console.log('state', state);
    return state.user.isLogin;
  });

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {!isLogin ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

const renderTabIcon =
  (route: any) =>
  ({focused, color, size}: any) => {
    const name = get(
      mapIcon,
      `${route.name}.${focused ? 'focused' : 'non_focused'}`,
    );
    return <Ionicons name={name} size={size} color={color} />;
  };

const mapIcon = {
  Home: {
    focused: 'home',
    non_focused: 'home-outline',
  },
  Settings: {
    focused: 'settings',
    non_focused: 'settings-outline',
  },
};
