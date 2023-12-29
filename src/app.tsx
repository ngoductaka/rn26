import React, {useState} from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  Box,
  useColorModeValue,
  ThemeProvider,
  extendTheme,
} from 'native-base';
import {Dimensions, Appearance} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  createNativeStackNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/native-stack';
const {width} = Dimensions.get('window');
const lightTheme = {
  colors: {
    main: {
      '50': '#60c5e7',
      '100': '#52bde1',
      '200': '#44b5da',
      '300': '#36acd3',
      '400': '#2ca2c9',
      '500': '#2d98bb',
      '600': '#2f8eae',
      '700': '#2f85a1',
      '800': '#2f7b95',
      '900': '#2f7289',
    },
  },

  fontSizes: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 29,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
};
const darkTheme = {
  colors: {
    main: {
      '50': '#6f6fa5',
      '100': '#63638f',
      '200': '#5b5b76',
      '300': '#51515f',
      '400': '#42424d',
      '500': '#3c3c3f',
      '600': '#353533',
      '700': '#2d2d27',
      '800': '#24241c',
      '900': '#1a1a13',
    },
  },
};

export default () => {
  const mode = Appearance.getColorScheme();
  const [theme, setTheme] = useState(mode);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  console.log('modetheme', mode);
  const customTheme = extendTheme(theme === 'light' ? lightTheme : darkTheme);
  return (
    <NativeBaseProvider theme={customTheme}>
      <Box flex={1} bg={'main.50'} safeArea>
        <Center flex={1}>
          <Text fontSize={'lg'}>theme color {theme}</Text>
          <Button
            bg={'main.900'}
            color={'main.100'}
            onPress={() => {
              toggleTheme();
            }}
            h={10}>
            Toggle
          </Button>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

function UseColorMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  console.log('colorMode', colorMode);
  return (
    <Center
      flex="1"
      p="4"
      bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}>
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{' '}
        <Text bold fontSize="lg">
          {colorMode}
        </Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

// 1.
// theme
// uứng dụng trong thực tê
// 2. navigation
// bottom tab
// stack
// ứng dụng trong thực tế
