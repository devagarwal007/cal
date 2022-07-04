import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection:'column'}} >
    <View style={{flex:1}}>
    <View style={styles.viewStyle}>
      <Text style={{
        fontSize:18,height:44,
        marginTop:10,
        flex:1,
      }}>Loan amount</Text>
      <TextInput style={{
        height:44,
        backgroundColor: '#fff',
        marginLeft:10,
        flex:1,
        borderRadius:8,
        paddingHorizontal:10,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}></TextInput>
       
    </View>
    <View style={[styles.viewStyle]}>
    <Text style={{
      fontSize:18,height:44,
      marginTop:10,
      flex:1,
      justifyContent: 'flex-start'
    }}>Rate of Interest</Text>
    <TextInput style={{
      height:44,
      backgroundColor: '#fff',
      marginLeft:10,
      flex:1,
      borderRadius:8,
      paddingHorizontal:10,
      justifyContent: 'flex-end',
      borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }}></TextInput>
  </View>
  <View style={[styles.viewStyle]}>
    <Text style={{
      fontSize:18,height:44,
      marginTop:10,
      flex:1,
      justifyContent: 'flex-start'
    }}>Tenure (years)</Text>
    <TextInput style={{
      height:44,
      backgroundColor: '#fff',
      marginLeft:10,
      flex:1,
      borderRadius:8,
      paddingHorizontal:10,
      justifyContent: 'flex-end',
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
    }}></TextInput>
  </View>
  <View style={[styles.viewStyle]}>
    <Text style={{
      fontSize:18,height:44,
      marginTop:10,
      flex:1,
      justifyContent: 'flex-start'
    }}>EMI</Text>
    <TextInput style={{
      height:44,
      backgroundColor: '#fff',
      marginLeft:10,
      flex:1,
      borderRadius:8,
      paddingHorizontal:10,
      justifyContent: 'flex-end',
      borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }}></TextInput>
  </View><View style={[styles.viewStyle]}>
    <Text style={{
      fontSize:18,height:44,
      marginTop:10,
      flex:1,
      justifyContent: 'flex-start'
    }}>Pay extra EMI every year</Text>
    <TextInput style={{
      height:44,
      backgroundColor: '#fff',
      marginLeft:10,
      flex:1,
      borderRadius:8,
      paddingHorizontal:10,
      justifyContent: 'flex-end',
      borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }}></TextInput>
  </View>
  <View style={[styles.viewStyle]}>
    <Text style={{
      fontSize:18,height:44,
      marginTop:10,
      flex:1,
      justifyContent: 'flex-start'
    }}>Hike EMI by __% every year</Text>
    <TextInput style={{
      height:44,
      backgroundColor: '#fff',
      marginLeft:10,
      flex:1,
      borderRadius:8,
      paddingHorizontal:10,
      justifyContent: 'flex-end',
      borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }}></TextInput>
  </View>

  <StatusBar style="light" />
  
    </View>
    <View style={{flex:1}}>
    <Button
    title="Press me"
  />
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewStyle:{
    flex: 1,
    direction:'rtl',
    flexDirection:"row",
    margin:20,
    marginTop:40,
  }
});
