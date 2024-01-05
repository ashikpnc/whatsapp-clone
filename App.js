import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListIItem';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import Navigator from './src/navigation';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatsScreen /> */}
      {/* <ChatScreen/> */}
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingVertical:50
  },
});
