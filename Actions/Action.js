import {NAME_SAVE,SALARY_SAVE,DESI_SAVE,SAVE_SUCCESS} from './ActionType';
import Constant from '../ApiCall/ApiConst'
import {CallApi} from '../ApiCall/apiCall';

export const NameChanged = (text) => {
    return { type: NAME_SAVE, payload: text };
};

export const SalaryChanged = (text) => {
    return { type: SALARY_SAVE, payload: text };
};

export const DesiChanged = (text) => {
    return { type: DESI_SAVE, payload: text };
};
export const CreateUser=(EmpName,EmpSalary,EmpDesignation)=>{
    debugger;
    return (dispatch,getState) => {
        return CallApi(Constant.BASE_URL + Constant.insert, 'post', {
            EmpName: EmpName,
            EmpSalary: EmpSalary,
            EmpDesignation: EmpDesignation
        }, {})
            .then((response) => {
                debugger;
                console.log("response -> ", Constant.BASE_URL + Constant.insert);


                dispatch({type: SAVE_SUCCESS, payload: response.data});

                // return dispatch=>({
                //     type: SAVE_SUCCESS,
                //     payload: response.data,
                // });
                //return Promise.resolve(response);
            })
            .catch((error) => {
                console.log("error -> " + Constant.BASE_URL + Constant.insert);
            })
    }
}






