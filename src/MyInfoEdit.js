/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,SectionList, Text,Button, View} from 'react-native';

type Props = {};
export default class MyInfoEdit extends Component<Props> {
    static navigationOptions = {
        title: '信息编辑'
    };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <SectionList style={styles.SectionListStyle}
            renderItem={({ item, index, section }) => <Text style={styles.button} key={index}>{item}</Text>}
            sections={[
                { data: ["个人头像"] },
                { data: ["姓名", "性别", "家庭住址", "工作经验", "手机号码"] }
            ]}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#EEEEEE'}}/>}
            SectionSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#EEEEEE'}}/>}
            recordInteraction = {() =>{
                navigate('UpdateMobile');
            }}
        />

    );
  }
}

const styles = StyleSheet.create({
    button:{
        color:'#000000',
        textAlign : 'left',
        flex:1,
        backgroundColor:'#ffffff',
        height:44,
        fontSize:17,
        paddingTop:10,
        paddingLeft:20
    },
    SectionListStyle:{
        marginTop:5,
        backgroundColor: '#EEEEEE'
    }
});
