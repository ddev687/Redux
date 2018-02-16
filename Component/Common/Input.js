import React from 'react';
import {Text,View,TextInput} from 'react-native';


const Input = ({label,palceholder,onChangeText,value,secureTextEntry}) => {

    return (
        <View style={{height:'20%',marginLeft:'5%'}}>
            <Text style={Styles.textStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    palceholder={palceholder}
                    onChangeText={onChangeText}
                    value={value}
                    style={Styles.inputStyle}></TextInput>
        </View>

    );


};


const Styles = {
    inputStyle:{
        fontSize:20,
        justifyContent:'center',
        color:'#000',
        flex:1,
        borderWidth:1

    },
    textStyle:{

        color:'#000',
        fontSize:20,
        flex:1

    }

};
export {Input};