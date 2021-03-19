import { useState } from "react";

const useLongPress = () => {
  const [isLongPress, setIsLongPress] = useState(false);

  const handleMouseDown = () => {
    setIsLongPress(true);
  }

  const handleMouseUp = () => {
    setIsLongPress(false);
  }

  return {
    isLongPress,
    handleMouseDown,
    handleMouseUp
  }
}

export default useLongPress;