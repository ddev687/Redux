import React , {Component} from 'react';
import {View} from 'react-native';
import ImageSlider from 'react-native-image-slider';



class Slider extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <View style={Styles.sliderStyle}>
                <ImageSlider images={[

                    '/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/hotels-4.jpg',
                    '/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/hotel-5.jpeg',
                    '/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/hotel-6.jpeg',
                    '/Users/developer145/Documents/Priyanshi/ReactNative/demoApp/images/mainhotel.jpg'
                ]}
                             position={this.state.position}
                             onPositionChanged={position => this.setState({position})}
                />
            </View>
        );
    }
}

const Styles = {

    sliderStyle:{

        height:'70%'
    }
}

export default Slider;



