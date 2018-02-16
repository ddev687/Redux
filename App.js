import React ,{Component} from 'react';
import {View} from 'react-native';
import RegisterComponent from './Component/RegisterComponent';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from './Reducers/index'
import { createStore, applyMiddleware,compose } from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import GetEmp from './Component/GetEmpDetails';

class App extends Component{

  render()
  {
      /*const store = createStore(AppReducer, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f
      ));*/
    return(

        <View>
        <Provider store={(createStore(AppReducer, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f
        )))}>
            <GetEmp/>
        </Provider>
        </View>


    )
      let action = AppReducer('Use Redux');
      console.log('dispatching',action);
      store.dispatch(action);
      console.log('next State',store.getState());
      store.dispatch({type:'GET_DATA'});
      console.log(store);

  }
}
export default App;