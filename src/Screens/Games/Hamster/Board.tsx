import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Item from './Item';

export type Props = {
    rows: number;
    columns: number;
    onHamsterHit: (target: number) => void;
    showHamster: {x: number, y: number, time: number, hamster: any}[];
}

const width = Dimensions.get('window').width;

const Board: React.FC<Props> = ({rows, columns, showHamster, onHamsterHit}) => {
    const [data, setData] = useState<{time: number, hamster: any}[]>([]);
    
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                arr.push({time: 0, hamster: null});
            }
        }
        console.log('setting: array:'+arr.length)
        setData(arr);
    }, [])

    useEffect(() => {
        if (data.length == 0) return
        let arr: {time: number, hamster: any}[] = [];
        let k = -1;
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= columns; j++) {
                k++;
                let value = data[k];
                showHamster.forEach(item => {
                    if (item.x == j && item.y == i) {
                        value.time = item.time;
                        value.hamster = item.hamster;
                    }
                });
                arr.push(value)
            }
        }
        setData(arr);
    }, [showHamster])
    
    return (
        <View style={styles.container}>
            {
                data.map((item, index) => <Item key={index} time={item.time} hamster={item.hamster} width={10} onHamsterHit={onHamsterHit}/>)
            }
        </View>
    )
}

export default Board

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center'
    }
})