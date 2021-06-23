import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button, Divider } from "react-native-elements";
import { LineChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import insertComponent from "./components/insertComponent";
function Modal(){
  return(
    <insertComponent />
  )
}

export default function App() {

  const [graph, setGraph] = React.useState(false);
  const [insert, setInsert] = React.useState(false);
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const day = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  React.useEffect(()=>{
    Modal();
  },insert);
  const axesSvg = { fontSize: 10, fill: "grey" };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", marginHorizontal: 14 }}
    >
      <View style={{ top:40, height:40, justifyContent:'center'}}>
        <Text style={{fontSize:28, fontWeight:'bold', textAlign:'justify'}}>Check Health</Text>
      </View>
      <View style={{ top: 40,height: 400, padding: 20, flexDirection: "row"}}>
        <YAxis
          data={graph ? data: day}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={verticalContentInset}
            svg={{ stroke: "rgb(134, 65, 244)" }}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={data}
            formatLabel={(value, index) => day[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
      </View>
      <View style={{flex:2, flexDirection:'row', justifyContent:'space-around',marginTop:20}}>
        <Button title="혈당" containerStyle={{width:100,height:40}} buttonStyle={{backgroundColor:'#fff'}} titleStyle={{color:'#000', fontSize:18}} onPress={()=>{setGraph(false)}}/>
        <Button title="혈압" containerStyle={{width:100,height:40}} buttonStyle={{backgroundColor:'#fff'}} titleStyle={{color:'#000', fontSize:18}} onPress={()=>{setGraph(true)}}/>
      </View>
      <View style={{bottom:24}}>
        <Button title={"혈당 또는 혈압 입력"} containerStyle={{borderRadius: 10, borderWidth:3, }} buttonStyle={{backgroundColor:'#fff',}} titleStyle={{color:'#000', fontSize:18}} onPress={()=>{setInsert(!insert)}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
