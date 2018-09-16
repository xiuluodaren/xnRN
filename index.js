/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MyInfoEdit from './src/MyInfoEdit';
import UpdateMobile from './src/UpdateMobile';

import { StackNavigator } from 'react-navigation';

//进行导航的注册
const app = StackNavigator(
    {
        MyInfoEdit: { screen: MyInfoEdit },
        UpdateMobile: { screen: UpdateMobile },
    }
);

AppRegistry.registerComponent(appName, () => app);
