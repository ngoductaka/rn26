import React from 'react';
import {
  View, // tương ứng vs thẻ div trong web (thường dùng để layout component )
  Text, // tương ứng vs thẻ p trong web (thường dùng để hiển thị text) string phải được bọc trong Text
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {Box, Pressable, Center} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');
console.log('0000', width);

export const FormInput = ({
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

export const PasswordInput = ({label = 'Password', value, onChange}: any) => {
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
