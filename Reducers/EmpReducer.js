import {NAME_SAVE, SALARY_SAVE, DESI_SAVE, SAVE_SUCCESS} from '../Actions/ActionType'
const INITIAL_STATE ={
    EmpName:'',
    EmpSalary:'',
    EmpDesignation:'',
    SavesData:{}
};
export default(state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        case NAME_SAVE:{
            return{
                ...state,
                EmpName:action.payload
            }
        }
        case SALARY_SAVE:{
            return{
                ...state,
                EmpSalary:action.payload
            }
        }
        case DESI_SAVE:{
            return{
                ...state,
                EmpDesignation:action.payload
            }
        }
        case SAVE_SUCCESS:
            {
            return{
                ...state,
                SavesData:action.payload
            }
        }
         default:{
             return state
          }
    }
}
