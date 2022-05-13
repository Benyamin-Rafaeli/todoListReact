import { generateId } from '../helpers';
import create from 'zustand';

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (title: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [{ id: 'sjfowjf', title: 'My default task', createdAt: 987698 }],
  createTask: (title: string) => {
    const { tasks } = get();
    const newTask = { id: generateId(), title, createdAt: Date.now() };
    set({ tasks: [newTask].concat(tasks) });
  },
  updateTask: (id: string, title: string) => {
    const { tasks } = get();
    set({ tasks: tasks.map((task: Task) => ({ ...task, title: task.id === id ? title : task.title })) });
  },
  removeTask: (id: string) => {
    const { tasks } = get();
    set({ tasks: tasks.filter((task: Task) => task.id !== id) });
  },
}));
