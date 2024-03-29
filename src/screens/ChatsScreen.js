// import { FlatList } from "react-native"
// import ChatListItem from "../components/ChatListIItem"
// import chats from "../../assets/data/chats.json"

// const ChatsScreen = () => {
//     return (<FlatList data={chats} renderItem={(item)=>(<ChatListItem chat={item}/>)}/>)
// }

// export default ChatsScreen

import { FlatList } from "react-native";
import ChatListItem from "../components/ChatListIItem";
import chats from "../../assets/data/chats.json";

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreen;