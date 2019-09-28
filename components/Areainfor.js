import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, FlatList, View, 
    TouchableHighlight,Image } from 'react-native';
    const ZipItem = ({place, code, navigate}) => (
        <TouchableHighlight onPress={() => navigate('cal')}>
        </TouchableHighlight>
       )
    
    const _keyExtractor = item => item.code
    export default class WeatherScreen extends React.Component {
     static navigationOptions = ({navigation}) => {
     return {
     headerTitle: (<Text style={{color:'orange',fontSize: 20, fontWeight: 'bold'}}>Information</Text>),
     }
     }
     render() {
     const { navigate } = this.props.navigation;
     return (
        <View >
        <Image style={styles.Image}
        source={require('./assets/cylinder.png')} />
        <Text>
        ในทางเรขาคณิต ทรงกระบอก (อังกฤษ: cylinder) เป็นกราฟสามมิติที่เกิดจากสมการ ทรงกระบอกที่มีรัศมี r และความสูง h จะสามารถหาปริมาตรของทรงกระบอกหาได้จากสูตร และพื้นที่ผิวของทรงกระบอกหาได้จากสูตร
        </Text>
    </View>
     );
     }
    }
    const styles = StyleSheet.create({
        zipItem: {
            alignItems: 'center', paddingTop: 10, flexDirection: 'row', flex: 1,
           backgroundColor: '#82caaf', padding: '10%', marginTop: 20,
        },
        zipItem2: {
            alignItems: 'center', 
            
        },
        zipPlace: {
            textAlign:'left',
           
            color:'white',
        },
        zipCode: {
            textAlign:'left',
           
            color:'white',
        },
        container: {
            flex: 1,
            backgroundColor: '#82caaf',
            alignItems: 'center',
            justifyContent: 'center',
        },
        view: {
            width: 300,
            height: 50,
            backgroundColor: '#82caaf',
            margin: 10,
            padding: 10,
            alignItems: 'center',
        },
        withBorderRadius: {
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5
            /* the same is ofr the borderBottomRight/Left */
        },
        withBottomBorder: {
            borderBottomColor: '#82caaf',
            borderBottomWidth: 1,
            backgroundColor: '#82caaf'
        },
        Image :{
           
            //width: 150,
          //  height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: 'contain',
            borderTopLeftRadius: 5,paddingTop: 10,
            
            //marginTop: 'center',
        }
    
    });