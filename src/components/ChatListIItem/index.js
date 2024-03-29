import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      id={chat.id}
      onPress={() =>
        navigation.navigate("Chat", { id: chat.id, name: chat.user.name })
      }
      style={styles.container}
    >
      <Image source={{ uri: chat?.user?.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>{chat?.user?.name}</Text>
          <Text style={styles.time}>
            {dayjs(chat.lastMessage.createdAt).fromNow()}
          </Text>
        </View>
        <Text style={styles.subTitle}>{chat?.lastMessage?.text}</Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  time: {
    color: "#669bfa",
    fontWeight: "500",
  },
  subTitle: {
    color: "grey",
  },
});
