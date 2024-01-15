import axios from 'axios';
import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    ImageBackground,
    Alert,
    ActivityIndicator,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

import Carousel from 'react-native-snap-carousel';

const App = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [listImg, setListImg] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        axios.get('https://picsum.photos/v2/list?page=2&limit=10')
            .then(res => {
                console.log(res.data, 'dddd')
                setListImg(res.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                Alert.alert('Error', err.message)
            })
    }, []);
    console.log(activeIndex)

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={{ uri: listImg[activeIndex].download_url }}
                style={{
                    flex: 1, resizeMode: 'cover',
                    justifyContent: 'center', position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    opacity: 0.3
                }} />
            <SafeAreaView style={{ flex: 1, paddingTop: 50, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', zIndex: 2 }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => carousel = ref}
                        data={carouselItems}
                        sliderWidth={width-30}
                        itemWidth={width-30}
                        renderItem={({ item, index }) => _renderItem({ item, listImg, index })}
                        onSnapToItem={index => setActiveIndex(index)} />
                </View>
            </SafeAreaView>
        </View>


    );
};

export default App;

const _renderItem = ({ item, index, listImg }) => {
    return (
        <View style={{
            backgroundColor: 'floralwhite',
            borderRadius: 5,
            height: 250,
            // padding: 50,
            marginLeft: 5,
            marginRight: 5,
        }}>
            <View style={{ flex: 1, backgroundColor: 'red', borderRadius: 10, overflow: 'hidden' }}>
                <ImageBackground source={{ uri: listImg[index].download_url }} style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}>
                    <Text style={{ fontSize: 30 }}>{item.title}</Text>
                    <Text>{item.text}</Text>
                </ImageBackground>
            </View>
        </View>

    )
}

const carouselItems = [
    {
        title: "Item 1",
        text: "Text 1",
        img: 'https://picsum.photos/200',
    },
    {
        title: "Item 2",
        text: "Text 2",
        img: 'https://picsum.photos/200',
    },
    {
        title: "Item 3",
        text: "Text 3",
        img: 'https://picsum.photos/200',
    },
    {
        title: "Item 4",
        text: "Text 4",
        img: 'https://picsum.photos/200',
    },
    {
        title: "Item 5",
        text: "Text 5",
        img: 'https://picsum.photos/200',
    },
]

