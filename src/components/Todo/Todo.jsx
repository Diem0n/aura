import React from "react";
import todo from "../../assets/icons/todo.svg";
import IconContainer from "../IconContainer/IconContainer";
const Todo = () => {
  const handlePress = () =>{
    console.log('handle press todo')
  }
  return (
    <div className="u-center-vertical">
      <IconContainer handlePress={handlePress} icon={todo} tooltip={'Todo'} />
    </div>
  );
};

export default Todo;
