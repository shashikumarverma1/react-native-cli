import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#81fca0" : "#81fca0",
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "#81fca0" }}
    >
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={styles.mainContainer}
      >
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        <Image source={require('./assets/man.png')} style={{marginBottom:-30}} />
        </View>
        <View style={{paddingLeft:25}}>
          <Text style={styles.cardText}>Card</Text>
          <Text style={styles.description}>Simple and easy to use app</Text>
        </View>

        <View style={[styles.boxContainer, styles.center, { alignItems: "center", marginTop: 35 }]}>
          {[
            { title: "Text", discription: "descriotp" },
            { title: "Address", discription: "descriotp" },
            { title: "Charachator", discription: "descriotp" },
            { title: "Bank card", discription: "descriotp" },
            { title: "Password", discription: "descriotp" },
            { title: "Logistic", discription: "descriotp" },
      
          ].map((e, index) => {
            return (
              <View key={index} style={[styles.cordContainer, styles.center, { alignItems: "center" }]}>

                <View>
                  <View style={styles.center}>
                    <Image source={require('./assets/profilepic.png')} />
                  </View>

                  <Text style={styles.title}>{e.title}</Text>
                  <Text style={styles.des}>{e.discription}</Text>
                </View>
              </View>
            )
          })}
        </View>
        <View style={[styles.bottom , styles.flex , {alignItems:"center"}]}>
        <Image source={require('./assets/man.png')} />
        <View style={{paddingLeft:15}}>
        <Text style={[styles.title , {textAlign:"left"}]}>Settings</Text>
        <Text style={styles.des}>Settings Settings Settings</Text>
        </View>
        
        </View>
        <View style={styles.center}>
        <Text style={styles.bottomLine}></Text>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomLine:{
    backgroundColor:"#ffffff", 
    width:150,
    height:8,
    borderRadius:20,
    textAlign:"center",
    marginTop:28,
    marginBottom:15
  },
  flex:{
    display:"flex",
    flexDirection:"row",
  },
  bottom:{
    backgroundColor:"#ffffff", 
    marginHorizontal:20 ,
    borderRadius:10,
    padding:16
  },
  center: {
    display: "flex", flexDirection: "row", justifyContent: "center",
    marginBottom: 10
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 5 ,
    color:"#9ea3a0"
  },
  des: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 15,
    color: "#d9dedb"
  },
  mainContainer: {
    paddingHorizontal: 10,
    height: "100%",
    paddingTop:15
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // margin: 5,
  },
  cordContainer: {
    backgroundColor: "#ffffff",
    width: "46%",
    margin: 5,
    height: 200,
    borderRadius: 20
  },
  cardText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 30,
  },
  description: {
    color: "#ffffff",
    marginTop: 5,
    fontWeight: "500",
    fontSize: 20,
  }
});

export default App;
