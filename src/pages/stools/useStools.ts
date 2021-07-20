import { useState } from "react";
import { createContainer } from "unstated-next";

export const useStools = () => {
  const [current, setCurrent] = useState("home");
  const handleChange = (id: string) => {
    setCurrent(id);
  };
  return {
    current,
    handleChange,
  };
};

export const StoolsContainer = createContainer(useStools);
