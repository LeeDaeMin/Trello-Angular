export interface toDo {
  id: number;
  title: string;
}

export interface Column{
  title: string;
  todos: toDo[];
}
