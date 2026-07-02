'use client';

import React, { useState } from 'react';
import { useTodoStore } from '../../store/todoStore';
import TodoItem from './TodoItem';

export default function TodoApp() {
  const [text, setText] = useState('');
  const todos = useTodoStore((s) => s.todos);
  const addTodo = useTodoStore((s) => s.addTodo);
  const clearCompleted = useTodoStore((s) => s.clearCompleted);

  const onAdd = (e?: React.FormEvent) => {
    e?.preventDefault();
    const t = text.trim();
    if (!t) return;
    addTodo(t);
    setText('');
  };

  return (
    <div className="bg-white shadow-sm rounded p-4">
      <form onSubmit={onAdd} className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded px-3 py-2 focus:outline-none"
          placeholder="Nouvelle tâche"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>

      <div className="mt-4">
        {todos.length === 0 ? (
          <p className="text-sm text-gray-500">Aucune tâche. Ajoute-en une !</p>
        ) : (
          <ul className="space-y-2">
            {todos.map((t) => (
              <TodoItem key={t.id} todo={t} />
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <small className="text-xs text-gray-500">Les tâches sont sauvegardées localement.</small>
        <button
          onClick={() => clearCompleted()}
          className="text-sm text-red-600"
        >
          Supprimer terminées
        </button>
      </div>
    </div>
  );
}
