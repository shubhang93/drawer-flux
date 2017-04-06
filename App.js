import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Router,  Scene, DefaultRenderer, Actions} from 'react-native-router-flux'
import Home from './Home'
import About from './About'
import Drawer from 'react-native-drawer'
import Jet from './Jet'
import MyDrawer from './MyDrawer'

const SideMenu = ({onPress}) => (
      <View style = {{paddingTop: 20}}>
        <Text onPress = {onPress}>Close {"\n"}</Text>
        <Text onPress = {() => Actions.home()}>Home {"\n"}</Text>
        <Text onPress = {() => Actions.about()}> About {"\n"}</Text>
        <Text onPress = {() => Actions.jet()}> Jet {"\n"}</Text>
      </View>
)

export default class App extends Component {
  state = {
    open: false
  }
  drawerButton = () => (
    <Text style = {{color: 'white'}} onPress = {() => Alert.alert('Drawer!')}>Drawer</Text>
  )
  render() {
    return (
        <Router>
             <Scene key="drawer" component={MyDrawer}>
                  <Scene key="main" tabs={false} >
                     <Scene key="home" component={Home} inital = {true}/>
                              <Scene key="jet" component={Jet}/>
                               <Scene key="about" component={About}/>

                  </Scene>
             </Scene> 
         </Router>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 /*<Router navigationBarStyle	 = {{backgroundColor: 'steelblue'}} renderRightButton={this.drawerButton}>
        <Scene key="root">
          <Scene key="home" component={Home} initial={true}/>
          <Scene key = "about" component = {About}/>
        </Scene>
      </Router>*/

       /* <Drawer 
      open={this.state.open}
        content = {<SideMenu onPress = {() => this.setState((prevState) => ({open: !prevState.open}))}/>}
          type="overlay"
           tapToClose={true}
            openDrawerOffset={0.2} 
  panCloseMask={0.2}
  closedDrawerOffset={-3}
    styles = {drawerStyles}
  >               
     <Router navigationBarStyle	 = {{backgroundColor: 'steelblue'}} renderRightButton={this.drawerButton}>
        <Scene key="root">
          <Scene key="home" component={Home} initial={true}/>
          <Scene key = "about" component = {About}/>
          <Scene key = "jet" component = {Jet}/>
        </Scene>
      </Router>    
     </Drawer>*/