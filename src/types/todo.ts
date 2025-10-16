export type TodoList = {
  id: string;
  title: string;
  iconId: number;
};

export type TodoItem = {
  id: string;
  listIds: string[];
  title: string;
  completed: boolean;
};

export type ListType = "builtIn" | "custom";

export type TodoStoreState = {
  builtInLists: TodoList[];
  customLists: TodoList[];
  selectedListId: string | null;
  todoItems: TodoItem[];

  // List actions
  initLists: (listType: ListType, lists: TodoList[]) => void;
  addList: (title: string) => void;
  selectList: (listId: string) => void;
  removeList: (listId: string) => void;

  // Todo actions
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
};
