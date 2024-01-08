import React, { useEffect } from 'react';
import { Text, Box, Pressable, Center, NativeBaseProvider, Image, View } from 'native-base';
import {
  useNavigation,
} from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Platform, ActivityIndicator } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/user.slice';
import axios from 'axios';
const URL_BASE = 'https://fc37-2402-9d80-271-77a9-2d96-9cf9-e18a-e069.ngrok-free.app'

const Home = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const [img, setImg] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  const uploadImg = async (result) => {
    try {
      const uri = result.assets[0].uri;
      const filetype = result.assets[0].type;
      const name = result.assets[0].fileName;

      const data = new FormData();
      console.log("boldy", {
        name: name,
        type: filetype,
        uri:
          Platform.OS === "android"
            ? uri
            : uri.replace("file://", "")
      });
      data.append("avatar", {
        name: name,
        type: filetype,
        uri:
          Platform.OS === "android"
            ? uri
            : uri.replace("file://", "")
      });
      setLoading(true)
      const { data: fileUploaded } = await axios.post(`${URL_BASE}/file/avatar`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          // Authorization: authToken
        }
      })
      setLoading(false)
      console.log('result_Upload_img', fileUploaded);
      setImg(fileUploaded)

    } catch (error) {
      setLoading(false)
      console.log('error======', error);
    }

  }

  const selectImage = async () => {
    const result = await launchImageLibrary({});
    uploadImg(result);

  }
  const openCamera = async () => {
    const result = await launchCamera({});
    uploadImg(result);
    console.log('result_launchCamera', result);
  }
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
          dispatch(logOut())
        }}>
        <Text>Logout</Text>
      </Pressable>
      <Pressable
        onPress={selectImage}>
        <Text>Open ImageLibrary</Text>
      </Pressable>
      <Pressable
        onPress={openCamera}>
        <Text>Open Camera</Text>
      </Pressable>
      {loading ?
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View> : null}
      {img?.filename ? <Image height={300} width={300} src={`${URL_BASE}/${img.filename}`}
      // source={{uri: `${URL_BASE}/${img.filename}`}}
      /> : <Text>Chưa có ảnh</Text>}
    </Center>
  );
};

export default Home;