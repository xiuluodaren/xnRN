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
            renderItem={({ item, index, section }) => <Button style={styles.button1} title="下一页" onPress={() => {
                navigate('UpdateMobile');
            }}/>
            }
            renderSectionHeader={({ section: { title } }) => (
                <Text style={{ fontWeight: "bold" }}>{title}</Text>
            )}
            sections={[
                { title: "Title1", data: ["item1", "item2"] },
                { title: "Title2", data: ["item3", "item4"] },
                { title: "Title3", data: ["item5", "item6"] }
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
