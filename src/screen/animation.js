import React, { useRef, useEffect } from 'react';
import { Button, Animated, View, StyleSheet, Text, Easing, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

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
        );
    })
    return (
        <Animated.View style={[styles.container, {
            backgroundColor: loopAnimation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['#C06C84', '#6C5B7B', '#C06C84'],
            }),
        }]}>
            {/* Element */}
            <Animated.View style={[styles.box, {
                opacity: fadeAnimation,
                backgroundColor: fadeAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['#000', '#fff'],
                }),

                height: fadeAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 200],
                }),
                width: fadeAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 200],
                }),
                borderRadius: fadeAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [5, 100],
                }),

                transform: [{
                    translateY: fadeAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -200],
                    })
                }]
            }]} />
            <Animated.View style={[styles.box1, {
                // transform: [{
                //     scale: springAnimation.interpolate({
                //         inputRange: [1, 2],
                //         outputRange: [1, 1.1 * height],
                //     })
                // }],
                height: springAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [100, 1.1 * height],
                }),
                width: springAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [100, 1.1 * height],
                }),
                borderRadius: springAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [50, 1.1 * height / 2],
                }),
            }]} />

            <Button
                onPress={action2}
                title='[timing] show' />
            <Button
                onPress={action1}
                title='[timing] hidden' />
            <Button
                onPress={action3}
                title='[spring] zoom out' />
            <Button
                onPress={action4}
                title='[spring] zoom in' />

        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'red',
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
