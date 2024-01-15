import React, { useRef, useEffect } from 'react';
import { Button, Animated, View, StyleSheet, Text, Easing, Dimensions, FlatList, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';


const AnimationScreen = () => {
    // animation value 
    const loop = useRef(null);
    const loopAnimation = useRef(new Animated.Value(0)).current;
    const fadeAnimation = useRef(
        new Animated.Value(1)
    ).current;
    const springAnimation = useRef(
        new Animated.Value(1)
    ).current;

    const action1 = () => {
        // animation action type

        console.log('action1', loop.current);
        loop.current.start();
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 2000,
        }).start();
    }
    const action2 = () => {
        console.log('action2', loop.current);
        loop.current.stop();
        // animation action type
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce,
        }).start();
    }
    const action3 = () => {
        Animated.spring(springAnimation, {
            toValue: 2,
            friction: 8,
            tension: 100,
        }).start();
    }
    const action4 = () => {
        Animated.spring(springAnimation, {
            toValue: 1,
            friction: 8,
            tension: 100,
        }).start();
    }
    useEffect(() => {
        loop.current = Animated.loop(
            Animated.timing(loopAnimation, {
                toValue: 1,
                duration: 10000,
            })
        ).start();
    })
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <Animatable.View animation={'fadeInRight'} delay={index * 200} style={[styles.box]}>
                                <Text>{item.title}</Text>
                            </Animatable.View>
                        )
                    }}
                />

            </View>
        </SafeAreaView>
    );
};


const data = [
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',

    },
    {
        title: 'a',
        color: 'red',

    },
    {
        title: 'a',
        color: 'red',

    },
    {
        title: 'a',
        color: 'red',

    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    },
    {
        title: 'a',
        color: 'red',
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
    },
    box: {
        // backgroundColor: 'red',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        zIndex: 0,
        opacity: 0.5,
        position: 'absolute',
    },
});

export default AnimationScreen;
