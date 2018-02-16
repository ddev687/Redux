import {GET_DATA} from '../Actions/ActionType';

const INITIAL_STATE =
{
    EmpName:'',
    EmpSalary:'',
    EmpDesignation:'',
    select:[]
};

export default (state=INITIAL_STATE,action) => {
    switch(action.type){

        case GET_DATA :{
            console.log('DisplayData',action.payload);
            debugger;
            return {
                ...state,
              select:action.payload
            };
        }

         default:{
            return state;

        }
    }


}