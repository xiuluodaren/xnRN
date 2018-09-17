/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SectionList, Text, Button, View, Image, TouchableOpacity} from 'react-native';

type
Props = {};
export default class MyInfoEdit extends Component<Props> {
    static navigationOptions = {
        title: '信息编辑'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SectionList style={styles.SectionListStyle}
             renderItem={({item, index, section}) => (
                 <TouchableOpacity onPress={() => {
                     alert(index);

                     switch (index)
                     {
                         case 4:
                         {
                             navigate('UpdateMobile');
                             break;
                         }
                     }

                 }}>
                     <View  style={styles.list}>
                         <Text style={styles.button} key={index}>{item}</Text>
                         <Image style={styles.rightArrow} source={require("./imgs/right-arrow.png")}></Image>
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
             ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#EEEEEE'}}/>}
             SectionSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#EEEEEE'}}/>}
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
    SectionListStyle: {
        marginTop: 5,
        backgroundColor: '#EEEEEE'
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
    }
});
