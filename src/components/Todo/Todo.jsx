import todo from "../../assets/icons/todo.svg";
import { IconContainer } from "../index";
const Todo = () => {
  const handlePress = () => {
    console.log("handle press todo");
  };
  return (
    <div className="u-center-vertical">
      <IconContainer
        alt={"Todo"}
        handlePress={handlePress}
        icon={todo}
        tooltip={"Todo"}
        role="button"
      />
    </div>
  );
};

export default Todo;
