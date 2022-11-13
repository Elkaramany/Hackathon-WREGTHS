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
    columnWrap: {
        display: 'flex',
        flexDirection: 'column',
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

export {Colors, textInputTheme, GlobalStyles, IOS, ANDROID, WIDTH, HEIGHT};
