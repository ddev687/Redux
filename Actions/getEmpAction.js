import {GET_DATA} from './ActionType';
import Constant from '../ApiCall/ApiConst'
import {CallApi} from '../ApiCall/apiCall';

export const EmpAction = () => {

    return CallApi(Constant.BASE_URL + Constant.select, 'get', {}, {})
        .then((response) => {
            console.log("response get -> " + Constant.BASE_URL + Constant.select);
            console.log("response", response);

            return {
                type: GET_DATA,
                payload: response.data,
            };
        })
        .catch((error) => {
            console.log("error get -> " + error);

        })

};