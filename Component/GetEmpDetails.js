import React ,{Component} from 'react';
import {View,Alert,TouchableOpacity,Text} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { EmpAction } from '../Actions/getEmpAction';

class GetEmpDetails extends Component{
    constructor(props){

        super(props);
        this.state = {

            select:props.select
        }
    }

    componentDidMount(){

        const { dispatch } = this.props;
       // console.log("Display Dispatch",dispatch);
        this.props.onEmpAction();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    render()
    {

        console.log('PROPS',this.props)
        // console.log(this.props.actions.EmpAction);
        // Alert.alert("Display Dsata"+this.props.actions.EmpAction);
        return(

            <View>
                <Text>Hi
                </Text>
            </View>
        );
    }

}
const mapStateToProps=state=>{
    debugger;
    console.log("display state",state);
    return {
       select:state.GetEmp.select
    };
}
/*export default connect(mapStateToProps, {EmpAction
})(GetEmpDetails);*/
function mapDispatchToProps(dispatch) {
    return {
        onEmpAction: () => {
            dispatch(EmpAction());
        }
        // dispatch,
        // actions: bindActionCreators(EmpAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetEmpDetails);
