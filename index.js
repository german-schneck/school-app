/**
 * This is a pilot version of a software for managing different classes/courses in a school.
 * The application is currently under testing to evaluate its usefulness for the teaching personnel.
 * @author German D. Schneck <german.schneck@gmail.com>
 */

//
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Application
import App from './src';

AppRegistry.registerComponent(appName, () => App);
