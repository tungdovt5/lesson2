import React, { Component } from 'react';
import { AppRegistry, FlatList,StyleSheet, Text, 
         View, Image , Alert, Platform, TouchableHighLight,TouchbaleOpacity          
} from 'react-native';

import {Nhietdodata} from '../data/Nhietdodata';
import {NhietdoStatus} from '../data/Nhietdodata';
import Icon from 'react-native-vector-icons/Ionicons';
 class NhietdoItem extends Component {
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'center',
                width: 90,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'grey',
                margin: 4,
            }}>

            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                margin: 20 
            }}>{this.props.item.hour}</Text>
            <Icon name={{ height: Platform.OS ==='ios'} ? this.props.item.status.ios: this.props.item.status.android }
                size={30}
                color='white'
            />
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                margin: 20 
            }}>{this.props.item.degrees}℉</Text>
            </View>
        )
    }

}
export default class Nhietdo extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: Platform.OS ==='ios' ? 34:0
            }}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
            }}>
                    <Image
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        width: null,
                        height: null,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                    
                        source={require('../components/image/1.jpeg')}
                    />
                </View>
                <View style={{height: 150}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:'bold',
                        color: 'black',
                        backgroundColor: 'transparent',
                        margin: 18
                    }}>Dự Báo Thời Tiết</Text>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5
                        }}
                        Nhietdo ={true}
                        data ={Nhietdodata}
                        renderItem={({item,index}) => {
                            return(
                                <NhietdoItem item={item} index={index} parenFastlis={this} >
                                </NhietdoItem>
                            );
                        }}>
                    </FlatList>    
                </View>
            </View>                
        );
    }
}