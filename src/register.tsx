import React from 'react';
import {
  View, // tương ứng vs thẻ div trong web (thường dùng để layout component )
  Text, // tương ứng vs thẻ p trong web (thường dùng để hiển thị text) string phải được bọc trong Text
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import {NativeBaseProvider, Box, Pressable, Center} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
console.log('0000', width);

export default function App({navigation}: any): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <Box style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <LinearGradient
            colors={['#432C40', '#F64040']}
            style={styles.container}>
            <StatusBar hidden />
            <Header />
            <FormLogin />
            <Footer />
          </LinearGradient>
        </KeyboardAwareScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
const Header = () => (
  <View
    style={{
      flex: 2,
      position: 'relative',
    }}>
    <View style={[styles.egg2, styles.shadow]}></View>
    <View
      style={[
        styles.egg,
        {
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
      ]}>
      <View
        style={{
          transform: [
            {
              scaleX: 1 / 1.1,
            },
          ],
          marginBottom: 20,
          marginLeft: 10,
        }}>
        <Text style={styles.textHeader}>Wellcome</Text>
        <Text style={styles.textHeader}></Text>
      </View>
    </View>
  </View>
);

const FormLogin = () => {
  const nagivation = useNavigation();
  const [data, setData] = React.useState<any>([]);
  const onSubmit = async () => {
    try {
      console.log('data', data);
      const result = await axios.post('http://localhost:3000/auth/register', data);
      console.log('result', result.data);
      nagivation.navigate('Login');
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', error?.message);
    }
  };
  return (
    <View
      style={{
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: width / 10,
      }}>
      <FormInput
        label="Email / Username"
        value={data.name}
        onChange={(text: any) =>
          setData({
            ...data,
            name: text,
          })
        }
      />
      <PasswordInput
        value={data.password}
        onChange={(text: any) =>
          setData({
            ...data,
            password: text,
          })
        }
      />
      <FormInput
        label="Age"
        value={data.age}
        onChange={(text: any) =>
          setData({
            ...data,
            age: text,
          })
        }
        keyboardType="numeric"
        wrapperStyle={{marginTop: 20}}
      />
      <View style={{alignItems: 'flex-end', marginVertical: 25}}>
        <Text>Forgot password</Text>
      </View>
      <View>
        <Pressable
          onPress={() => {
            onSubmit();
          }}
          style={[
            {
              backgroundColor: '#F64040',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            },
            styles.shadow,
          ]}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '800'}}>
            Sign in
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const Footer = () => (
  <View
    style={{
      flex: 1,
      position: 'relative',
    }}>
    <View style={[styles.footerCircle]}></View>

    <View
      style={{
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: '600'}}>
        Don't have an account? <Text style={{color: '#F64040'}}> SIGN UP</Text>
      </Text>
    </View>
  </View>
);

const FormInput = ({
  label,
  value,
  onChange,
  wrapperStyle = {},
  keyboardType,
}: any) => {
  return (
    <View style={wrapperStyle}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const PasswordInput = ({label = 'Password', value, onChange}: any) => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  return (
    <View style={{marginTop: 20}}>
      <Text style={styles.title}>{label}</Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={!isShowPassword}
          style={[styles.input, {flex: 1, color: '#F64040'}]}
        />
        <Pressable
          // h="70%"
          w="10"
          onPress={() => setIsShowPassword(!isShowPassword)}
          justifyContent={'center'}
          alignItems={'center'}>
          <Icon
            name={isShowPassword ? 'eye' : 'eye-with-line'}
            size={20}
            color="#F8706E"
          />
        </Pressable>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  footerCircle: {
    height: width * 1.6,
    width: width * 1.6,
    borderRadius: width,
    bottom: -width * 1.4,
    left: -width * 0.3,
    position: 'absolute',
    backgroundColor: '#432C40',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,

    // zIndex: 1000,
  },
  title: {
    fontSize: 16,
    color: '#888',
  },
  input: {
    borderBottomColor: '#F8706E',
    borderBottomWidth: 1,
    height: 50,
    color: '#F8706E',
    fontSize: 20,
  },
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#640c0c',
    height: height,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  egg2: {
    width: (4 * width) / 5,
    height: (4 * width) / 5,
    borderRadius: 200,
    backgroundColor: '#F64040',
    position: 'absolute',
    top: -width / 7,
    right: -width / 7,
    zIndex: 1000,
  },
  egg: {
    width: width / 1.12,
    height: width / 1.12,
    borderRadius: width / 1.572,
    transform: [{scaleX: 1.1}],
    position: 'absolute',
    top: -width / 7.86,
    left: -width / 5.614,
    backgroundColor: '#432C40',
    zIndex: 1001,
  },
  textHeader: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
