import React, {useEffect} from 'react';
import {Text, Box, Pressable, Center, NativeBaseProvider} from 'native-base';
import {
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {get} from 'lodash';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

const Setting = () => {
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

export default Setting