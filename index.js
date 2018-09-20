/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MyInfoEdit from './src/MyInfoEdit';
import UpdateMobile from './src/UpdateMobile';
import Experienc from "./src/Experienc";
import Gender from "./src/Gender";

import { StackNavigator } from 'react-navigation';

//进行导航的注册
const app = StackNavigator(
    {
        MyInfoEdit: { screen: MyInfoEdit },
        UpdateMobile: { screen: UpdateMobile },
        Experienc: { screen: Experienc },
        Gender: { screen: Gender },
    }
);

AppRegistry.registerComponent(appName, () => app);
