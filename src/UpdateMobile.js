/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SectionList, Text, Button, View, Image, TouchableOpacity, TextInput} from 'react-native';

type
Props = {};
export default class MyInfoEdit extends Component<Props> {
    static navigationOptions = {
        title: '修改手机',
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
                             <View  style={styles.list}>
                                 <Text style={styles.button} key={index}>{item}</Text>
                                 <TextInput
                                     style={styles.textInput}
                                     placeholder={"请输入" + item}
                                     onChangeText={(text) => this.setState({text})}
                                     underlineColorAndroid="transparent"
                                     keyboardType="phone-pad"
                                 />
                             </View>
                         )
                         }
                         sections={[
                             {data: ["手机号", "验证码"]}
                         ]}
                         keyExtractor={(item, index) => item + index}
                         ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#e9e9e9'}}/>}
                         SectionSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#e9e9e9'}}/>}
                         recordInteraction={() => {
                             navigate('UpdateMobile');
                         }}
            />

        );
    }
}

const styles = StyleSheet.create({
    button: {
        color: '#000000',
        textAlign: 'left',
        backgroundColor: '#FFFFFF',
        height: 44,
        fontSize: 17,
        paddingTop: 10,
        paddingLeft: 20,
        width:80
    },
    header: {
        color: '#000000',
        textAlign: 'left',
        flex: 1,
        backgroundColor: '#ffffff',
        height: 100,
        fontSize: 17,
        paddingTop: 40,
        paddingLeft: 20
    },
    SectionListStyle: {
        marginTop: 5,
        backgroundColor: '#e9e9e9'
    },
    avatar: {
        width: 60,
        height: 60
    },
    rightArrow: {
        width: 24,
        height: 24
    },
    list:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 15,
        textAlign:'right'
    },
    textInput:{
        flex: 1,
        height:40,
        fontSize: 17,
        padding: 0
    }
});
