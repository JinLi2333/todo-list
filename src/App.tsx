import { makeStyles, Overflow, OverflowItem } from "@fluentui/react-components";
import { useEffect, useId } from "react";
import AbortControllerTest from "./components/Content/AbortControllerTest";
import ContentView from "./components/Content/ContentView";
import SideBar from "./components/SideBar/SideBar";
import { builtInLists, customLists } from "./mock/Lists";
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
    initLists("builtIn", builtInLists);
    initLists("custom", customLists);
  }, [initLists]);

  return (
    <Overflow>
      <OverflowItem id={useId()}>
        <div className={styles.root}>
          <SideBar />
          <AbortControllerTest />
          {/* <ContentView /> */}
        </div>
      </OverflowItem>
    </Overflow>
  );
}
