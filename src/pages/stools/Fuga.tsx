import { StoolsContainer } from "./useStools";
export const Fuga = () => {
  const { current } = StoolsContainer.useContainer();
  return <>{current}</>;
};
