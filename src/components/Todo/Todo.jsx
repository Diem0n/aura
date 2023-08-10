
import todo from "../../assets/icons/todo.svg";
import IconContainer from "../IconContainer/IconContainer";
const Todo = () => {
  return (
    <div className="u-center-vertical">
      <IconContainer icon={todo} tooltip={'Todo'} />
    </div>
  );
};

export default Todo;
