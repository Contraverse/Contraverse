import React, {Component} from 'react';
import Router from './src/navigation';
import { Provider } from 'react-redux';
import firebase from '@firebase/app';
import { GoogleSignin } from 'react-native-google-signin';
import LoadingScreen from './src/screens/LoadingScreen';
import store from './src/reducers';
import config from './config/firebase';
import googleConfig from './config/googleSignin';

export default class App extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    await firebase.initializeApp(config.api);
    await GoogleSignin.configure(googleConfig);
    this.setState({ loading: false });
  }

  render() {
    if(this.state.loading)
      return <LoadingScreen />;
    console.log("Main");
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}