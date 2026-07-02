import create from 'zustand';
import { persist } from 'zustand/middleware';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

type TodoState = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  clearCompleted: () => void;
};

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (text: string) =>
        set((state) => ({
          todos: [
            {
              id: String(Date.now()) + Math.random().toString(36).slice(2, 7),
              text,
              completed: false,
              createdAt: Date.now(),
            },
            ...state.todos,
          ],
        })),
      toggle: (id: string) =>
        set((state) => ({
          todos: state.todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
        })),
      remove: (id: string) => set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
      clearCompleted: () => set((state) => ({ todos: state.todos.filter((t) => !t.completed) })),
    }),
    {
      name: 'todos-storage', // key in localStorage
      getStorage: () => (typeof window !== 'undefined' ? window.localStorage : undefined),
    }
  )
);
