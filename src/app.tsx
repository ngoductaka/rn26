import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  Box,
  useColorModeValue,
} from 'native-base';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const {width} = Dimensions.get('window');

function UseColorMode() {
  const {toggleColorMode} = useColorMode();
  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');
  return (
    <Box p="4" flex="1" bg={bg} w="100%" mt={10} safeArea>
      <Text fontSize="lg" display="flex" mb={20}>
        The active color mode is{' '}
        <Text bold fontSize="18px">
          {text}
        </Text>
      </Text>
      <Button onPress={toggleColorMode} h={10}>
        Toggle
      </Button>
    </Box>
  );
}

const Example = () => {
  return (
    <NativeBaseProvider>
      <UseColorMode />
    </NativeBaseProvider>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" w={width} bgColor={'red.300'}>
        <Icon name="rocket" size={30} color="#900" />
        <AntDesign name="retweet" size={30} color="#900" />
        <Entypo name="500px-with-circle" size={30} color="#900" />
        <Text>Icon</Text>
      </Center>
    </NativeBaseProvider>
  );
};
