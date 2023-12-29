import React, {useEffect} from 'react';
import {Text, Box, Pressable, Center, NativeBaseProvider} from 'native-base';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {get} from 'lodash';
import Login from './login';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <Center flex={1}>
      <Pressable
        onPress={() => {
          navigation.navigate('Detail', {
            productId: '123',
            productName: 'Coca Cola',
          });
        }}>
        <Text>View Details 1</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Detail', {
            productId: '123',
            productName: 'Pepsi',
          });
        }}>
        <Text>View Details 2</Text>
      </Pressable>
    </Center>
  );
};
const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Center flex={1}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go back</Text>
      </Pressable>
    </Center>
  );
};

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
        component={Detail}
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
        component={Login}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* {!isLogin ? <AuthStack /> : <AppStack />} */}
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
            component={Detail}
          />
        </Tab.Navigator>
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
