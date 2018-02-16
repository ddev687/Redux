import React ,{Component} from 'react';
import {View,Alert,TouchableOpacity,Text} from 'react-native';
import {Button,Input,Header,Card} from "./Common";
import {NameChanged,DesiChanged,SalaryChanged,CreateUser} from "../Actions/Action";
import {connect} from 'react-redux';
import axios from 'axios';

class RegisterComponent extends Component{
    constructor(props)
    {
        super(props);

    }

    state = {EmpName:'',EmpSalary:'',EmpDesignation:''}

    onButtonClick(){


      if(this.props.EmpName===''&& this.props.EmpDesignation===''&& this.props.EmpSalary==='' )
      {
          alert("Please fill the details")
      }
      else{

          this.props.CreateUser(this.props.EmpName,this.props.EmpSalary,this.props.EmpDesignation).then((res)=>{
              console.log(res);
              debugger
              Alert.alert("userCreated");
          }).catch((err)=>{
              console.log('error', err);
              debugger
              Alert.alert('error');
          })
      }
    }
    render()
    {


        return(

                <View>
                    <Input
                        label={'EmployeeName : '}
                        value={this.state.EmpName}
                        onChangeText={(text) => {this.setState(text)}}
                    >
                    </Input>
                    <Input
                        label={'EmployeeSalary:'}
                        value={this.state.EmpSalary}
                        onChangeText={(text) => {this.setState(text)}}
                    >
                    </Input>
                    <Input
                        label={'EmployeeDesignation:'}
                        value={this.state.EmpDesignation}
                        onChangeText={(text) => {this.setState(text)}}
                    >
                    </Input>
                   {/* <Button onPress={() => this.onButtonClick.bind(this)} />*/}
                    <TouchableOpacity style={{borderRadius: 3,
                        marginTop: '2%',
                        height:'10%',
                        width:'50%',
                        marginLeft:'25%'
                        ,          justifyContent:'center'
                        ,         backgroundColor:'#65C912'}}
                                      onPress={() => {this.onButtonClick()}}
                    >

                        <Text style={{textAlign:'center',
                            fontSize:20,
                            color:'#040604'}}>
                            SIGN IN
                        </Text>

                    </TouchableOpacity>
                </View>

        );
    }
}
const mapStateToProps=state=>{
    console.log(state);
    return{
        EmpName:state.Emp.EmpName,
        EmpSalary:state.Emp.EmpSalary,
        EmpDesignation:state.Emp.EmpDesignation

    }
};
/*function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NameChanged,SalaryChanged,DesiChanged,CreateUser, dispatch),
        routerActions: bindActionCreators({pushState}, dispatch)
    }
}*/

//export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
export default connect(mapStateToProps,{
    NameChanged,SalaryChanged,DesiChanged,CreateUser
})(RegisterComponent);