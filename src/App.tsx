import { makeStyles, Overflow, OverflowItem } from "@fluentui/react-components";
import { useEffect, useId } from "react";
import ContentView from "./components/Content/ContentView";
import SideBar from "./components/SideBar/SideBar";
import { MockbuiltInLists, MockCustomLists } from "./mock/MockLists";
import { useTodoStore } from "./store/todoStore";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    width: "1080px",
    height: "720px",
    border: "1px solid #000",
    padding: "2rem",
  },
});

export default function App() {
  const styles = useStyles();

  const initLists = useTodoStore((state) => state.initLists);

  useEffect(() => {
    initLists("builtIn", MockbuiltInLists);
    initLists("custom", MockCustomLists);
  }, [initLists]);

  return (
    <Overflow>
      <OverflowItem id={useId()}>
        <div className={styles.root}>
          <SideBar />
          <ContentView />
        </div>
      </OverflowItem>
    </Overflow>
  );
}
