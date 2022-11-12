import {scale, verticalScale} from 'react-native-size-matters';
import {Platform, StyleSheet, Dimensions} from 'react-native';

const IOS: boolean = Platform.OS === 'ios';
const ANDROID: boolean = Platform.OS === 'android';
const WIDTH: number = Dimensions.get('window').width;
const HEIGHT: number = Dimensions.get('window').height;

const Colors = {
    backGround: '#FFF',
    primary: '#204ECF',
    secondary: '#03CC83',
    tertiary: '#262D3D',
};

const GlobalStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextStyle: {
        fontSize: verticalScale(5),
        fontWeight: '400',
        color: Colors.secondary,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    columnAround: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    textInputContainer: {
        marginBottom: verticalScale(30),
        width: scale(90),
        borderRadius: scale(50),
    },
    buttonContainer: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(2.4),
        borderRadius: scale(3),
        margin: verticalScale(2),
    },
    buttonText: {
        fontSize: verticalScale(3),
        fontWeight: 'bold',
        color: Colors.primary,
    },
    headerContainer: {
        height: verticalScale(20),
    },
    regularText: {
        fontSize: scale(20),
        color: Colors.tertiary,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: verticalScale(15),
    },
    bottomAbsoluted: {
        position: 'absolute',
        bottom: 0,
        marginBottom: verticalScale(15),
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

const textInputTheme = {
    colors: {
        placeholder: Colors.primary,
        text: Colors.primary,
        primary: Colors.primary,
        underlineColor: Colors.primary,
        background: Colors.primary,
    },
};

const Emojis = [
    {name: 'grinning face', unicode: '1f600'},
    {name: 'face with tears of joy', unicode: '1f602'},
    {name: 'smiling face with halo', unicode: '1f607'},
    {name: 'thinking face', unicode: '1f914'},
    {name: 'partying face', unicode: '1f973'},
    {name: 'nerd face', unicode: '1f913'},
    {name: 'alien', unicode: '1f47d'},
    {name: 'robot', unicode: '1f916'},
    {name: 'smiling cat face with heart-eyes', unicode: '1f63b'},
    {name: 'kiss mark', unicode: '1f48b'},
    {name: 'sweat droplets', unicode: '1f4a6'},
    {name: 'brain', unicode: '1f9e0'},
    {name: 'fire', unicode: '1f525'},
    {name: 'sparkles', unicode: '2728'},
    {name: 'star', unicode: '2b50'},
    {name: 'sun', unicode: '2600'},
    {name: 'moon', unicode: '1f319'},
    {name: 'cloud', unicode: '2601'},
    {name: 'snowflake', unicode: '2744'},
    {name: 'snowman', unicode: '26c4'},
    {name: 'rainbow', unicode: '1f308'},
    {name: 'umbrella', unicode: '2602'},
].map(e => ({
    name: e.name,
    unicode: String.fromCodePoint(parseInt(e.unicode, 16)),
}));

export {
    Colors,
    textInputTheme,
    GlobalStyles,
    IOS,
    ANDROID,
    WIDTH,
    HEIGHT,
    Emojis,
};
