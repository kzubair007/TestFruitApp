/* eslint-disable */
import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions, ScrollView, StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

const HomeScreen= ()=>{

    return(

        <ScrollView>
        <View style={styles.header}>
            <View>
            <View style={{flexDirection: "row", marginTop: 15}}>
                <Image source={{uri: 'https://img.icons8.com/ios-glyphs/72/minus.png'}} style={{width: 20, height:20,marginLeft:7}}/>
            <View style={{height:25, width:2, backgroundColor: 'grey',marginLeft: 10 }}></View>
            <View style={{marginLeft: 10}}>
                <Text>Healthy fruits</Text>
            </View>
            </View>

            <View style={{marginTop:10, alignItems: "center"}}>
                <Image
                    style={{height:150, width:400}}
                    source={{
                        uri: 'https://www.tasafoods.com/images/slides/slide-mango.jpg',
                    }}
                />
                <Image
                    style={{height:150, width:400}}
                    source={{
                        uri: 'https://images.everydayhealth.com/images/diabetes/type-2-diabetes/best-fruits-for-a-diabetes-friendly-diet-08-1440x810.jpg',
                    }}
                />
                <Image
                    style={{height:150, width:400}}
                    source={{
                        uri: 'https://www.tasafoods.com/images/slides/slide-white-guava.jpg',
                    }}
                />
            </View>
            </View>
            <View style={styles.footer}>
                <View style={{marginLeft:15, marginTop:20}}>
                    <Text style={{fontSize: 20}}>Nutrition fact</Text>
                     <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                          <Text style={{fontSize: 12, marginTop:5}}>Serving size</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12, marginTop:5}}>100g</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewOne}></View>
                <View style={{marginLeft:15}}>
                    <Text style={{fontSize: 12}}>Amount per serving</Text>
                </View>
                <View style={{flexDirection: 'row',marginLeft:10}}>
                    <View style={{flex:3}}>
                        <Text style={{fontSize: 40}}>Calories</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 40}}>89</Text>
                    </View>
                </View>
                <View style={styles.viewOne}></View>
                <View><Text style={{alignSelf: 'flex-end'}}>% Daily value *</Text></View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:17}}>
                    <View>
                        <Text> Saturated fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:200}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewOne}></View>
                <View style={{flexDirection: 'row', marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>
                <View style={styles.viewTwo}/>
                <View style={{flexDirection: 'row',marginTop:3, marginLeft:7}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}> Total fat </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text>0.3 g</Text>
                    </View>
                    <View style={{marginLeft:240}}>
                        <Text>0%</Text>
                    </View>
                </View>



            </View>
        </View>
            <View style={{marginTop:20,marginLeft:20}}>
                <Text style={styles.title}>
                    Delivering with love and care for you to relish
                </Text>
            </View>
            <View style={{marginTop: 10}}/>
            <View style={styles.viewOne}/>
            <View style={{marginTop:10, marginLeft: 20}}>
                <Text style={{fontWeight: 'bold',color: 'gray'}}>About Demo Group</Text>
                <Text style={{marginTop:10, color: "grey"}}>Leading the crops Division to demo Group is India's best branded
                fruit company and a market leader in controlled cultivation and marketing of high quality fruits to domestic
                and international customers in a socially responsible manner</Text>
                <Text style={{marginTop: 20, color: 'grey'}}>We are happy to serve fresh and delicious fruits.</Text>
            </View>
            <View style={{paddingVertical:15}}/>
            <View style={styles.viewOne} />
        </ScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: 370,
        marginTop:-10,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        height:480,
        borderBottomWidth:2,
        borderBottomColor:"gray"
    },
    title: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "monospace"
    },
    viewOne: {
        height: 3,
        backgroundColor: "black",
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:10
    },
    viewTwo: {
        height: 1.5,
        backgroundColor: "grey",
        marginTop:3,
        marginLeft:10,
        marginRight:10
    }
});
