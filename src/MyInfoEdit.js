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
        <SectionList
            renderItem={({ item, index, section }) => <Button style={styles.button1} title={item} onPress={() => {
                navigate('UpdateMobile');
            }}/>
            }
            sections={[
                { title: "个人头像", data: ["个人头像"] },
                { title: "姓名", data: ["姓名", "性别", "家庭住址", "工作经验", "手机号码"] }
            ]}
            keyExtractor={(item, index) => item + index}
        />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
