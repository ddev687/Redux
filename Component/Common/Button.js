import React from 'react';
import {TouchableOpacity,Text,View} from 'react-native';


const Button = () => {

    return (
    <View>
        <TouchableOpacity style={styles.buttonStyle}>

            <Text style={styles.textStyle}>
                SIGN UP
            </Text>

        </TouchableOpacity>
    </View>
    );

};

const styles = {

    textStyle:{

        alignSelf:'center',
        fontSize:20,
        color:'#040604'


    },
    buttonStyle: {
        borderRadius: 3,
        flex: 1,
        marginTop: '10%',
        backgroundColor:'#65C912'
    }


};

export  {Button};



