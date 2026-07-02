'use client';

import React from 'react';
import { Todo } from '../../store/todoStore';
import { useTodoStore } from '../../store/todoStore';

export default function TodoItem({ todo }: { todo: Todo }) {
  const toggle = useTodoStore((s) => s.toggle);
  const remove = useTodoStore((s) => s.remove);

  return (
    <li className="flex items-center justify-between border rounded p-2">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
          className="w-4 h-4"
        />
        <span className={`text-sm ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      </label>

      <div className="flex items-center gap-2">
        <small className="text-xs text-gray-400">{new Date(todo.createdAt).toLocaleTimeString()}</small>
        <button
          onClick={() => remove(todo.id)}
          className="text-red-600 text-sm"
          aria-label={`Supprimer ${todo.text}`}
        >
          Suppr
        </button>
      </div>
    </li>
  );
}
