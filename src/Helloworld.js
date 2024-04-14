import { StyleSheet, Text, View } from 'react-native';


const Helloworld=()=> {
    return (
      <View style={Mystyle.ViewStyle}>
        <Text style={Mystyle.TextStyle}> Hello World</Text>
      </View>
    );
  }
  
  export default Helloworld

  const Mystyle = StyleSheet.create({
    ViewStyle: {
      width:100,
      height:100,
      backgroundColor:'aqua',
      alignItems:'center',
      justifyContent:'center',
    },
    TextStyle:{
        fontSize:20,
        fontWeight:'bold',
    },
  });