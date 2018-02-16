import {combineReducers} from 'redux';
import EmpReducer from './EmpReducer';
import GetEmpReducer from './GetEmpReducer';

const AppReducer = combineReducers({
    Emp:EmpReducer,
    GetEmp : GetEmpReducer
});
export default AppReducer;