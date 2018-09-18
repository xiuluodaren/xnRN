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
export default class MyInfoEdit extends Component<Props> {
    static navigationOptions = {
        headerTitle: '信息编辑',
        headerTitleStyle: {
            //居中显示
            alignSelf : 'center',
        }
    };

    //第一行加一个输入框
    fun = (index) => {
        if (index == 0)
        {
            return(
                <TextInput
                    style={styles.textInput}
                    placeholder={"请输入姓名"}
                    onChangeText={(text) => this.setState({text})}
                />
            )
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <SectionList style={styles.SectionListStyle}
                 renderItem={({item, index, section}) => (
                     <TouchableOpacity onPress={() => {

                         switch (index)
                         {
                             case 4:
                             {
                                 navigate('UpdateMobile');
                                 break;
                             }
                         }

                     }}>
                         <View style={styles.list}>
                             <Text style={styles.button} key={index}>{item}</Text>
                             {
                                 this.fun(index)
                             }
                             <Image style={styles.rightarrow} source={require("./imgs/right-arrow.png")}></Image>
                         </View>
                     </TouchableOpacity>
                     )
                 }
                 sections={[
                     {data: ["姓名", "性别", "家庭住址", "工作经验", "手机号码"]}
                 ]}
                 ListHeaderComponent={() =>
                     <TouchableOpacity onPress={() => {
                        alert("准备上传头像")
                     }}>
                     <View  style={styles.list}>
                        <Text style={styles.header}>个人头像</Text>
                        <Image style={styles.avatar} source={require("./imgs/defaultAvatar.png")}></Image>
                        <Image style={styles.rightArrow} source={require("./imgs/right-arrow.png")}></Image>
                     </View>
                     </TouchableOpacity>
                 }
                 keyExtractor={(item, index) => item + index}
                 ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#e9e9e9'}}/>}
                 SectionSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#e9e9e9'}}/>}
                 recordInteraction={() => {
                     navigate('UpdateMobile');
                 }}
                />

                <TouchableOpacity onPress={() => {
                    alert("准备上传头像")
                }}>
                    <Text style={styles.saveBtn}>保存</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        color: '#000000',
        textAlign: 'left',
        flex: 1,
        backgroundColor: '#ffffff',
        height: 44,
        fontSize: 17,
        paddingTop: 10,
        paddingLeft: 20
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
    footer: {
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
        backgroundColor: '#e9e9e9',
        height:height - 49 - 64,
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
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 15,
    },
    saveBtn:{
        backgroundColor:'#5ac45a',
        color:'#FFFFFF',
        height:44,
        fontSize:20,
        textAlign:'center',
        paddingTop:12
    },
    textInput:{
        flex: 1,
        height:40,
        fontSize: 17,
        padding: 0
    }
});
