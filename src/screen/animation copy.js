import React, { useRef, useEffect } from 'react';
import { Button, Animated, View, StyleSheet, Text, Easing, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const AnimationScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const size = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const action1 = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
    }
    const action2 = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }

    const action3 = () => {
        Animated.spring(size, {
            toValue: 2,
            friction: 2,
            tension: 160,
            useNativeDriver: false,
        }).start();
    }
    const action4 = () => {
        Animated.timing(size, {
            toValue: 1,
            useNativeDriver: false,
        }).start();
    }

    return (
        <View style={styles.container}>
            {/* <Animated.View style={[styles.box1, {
                transform: [{
                    scale: size.interpolate({
                        inputRange: [1, 2],
                        outputRange: [1, 1.1 * height],
                    })
                }],
                borderRadius: size.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0.5, 1.1 * height / 2],
                }),
            }]} /> */}
            <Animated.View style={[styles.box, {
                opacity: fadeAnim,
            }]} />
            <Button onPress={action2} title='[timing] show' />
            <Button onPress={action1} title='[timing] hidden' />
            <Button onPress={action3} title='[spring] x2 width' />
            <Button onPress={action4} title='[spring] x1 width' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red',
    },
    box1: {
        width: 1,
        height: 1,
        backgroundColor: 'blue',
        zIndex: 0,
        opacity: 0.5,
        position: 'absolute',
    },
});

export default AnimationScreen;
