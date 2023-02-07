import ChatItem from "./ChatItem";
import classes from "./Chats.module.css";
const Chats = () => {
  const DummyData = [
    {
      name: "Joel Ojerinde",
      message: "Hello",
      time: "2023-01-03T21:31:17.178Z",
    },
    {
      name: "Bolaji Ojerinde",
      message: "What is up?",
      time: "2023-06-03T21:31:17.178Z",
    },
  ];

  return (
    <ul className={classes.ul}>
      {DummyData.map((item, index) => (
        <ChatItem
          key={index}
          name={item.name}
          userId={index}
          message={item.message}
          time={item.time}
        />
      ))}
    </ul>
  );
};
export default Chats;
