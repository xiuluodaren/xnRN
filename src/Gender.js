/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SectionList, Text, Button, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

type
Props = {};
export default class Experienc extends Component<Props> {
    static navigationOptions = {
        title: '选择性别',
        headerTitleStyle: {
            //居中显示
            alignSelf : 'center',
        }
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <SectionList style={styles.SectionListStyle}
                 renderItem={({item, index, section}) => (
                     <TouchableOpacity onPress={() => {
                         alert(item);
                     }}>
                         <Text style={styles.button} key={index}>{item}</Text>
                     </TouchableOpacity>
                    )
                 }
                 sections={[
                     {data: ["男","女"]}
                 ]}
                 keyExtractor={(item, index) => item + index}
                 ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#e9e9e9'}}/>}
                 SectionSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#e9e9e9'}}/>}
            />
        );
    }
}

const styles = StyleSheet.create({
    button: {
        color: '#000000',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        height: 44,
        fontSize: 17,
        flex:1,
        paddingTop: 10
    },
    SectionListStyle: {
        marginTop: 5,
        backgroundColor: '#e9e9e9',
        height:height - 49 - 64,
        flex:1
    },
});
