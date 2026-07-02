'use client';

import Link from 'next/link';
import TodoApp from '../../components/Todo/TodoApp';

export default function TodosPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-3xl mx-auto mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">To‑Do (Local Storage)</h1>
        <Link href="/" className="text-sm text-blue-600">Back</Link>
      </header>

      <section className="max-w-3xl mx-auto">
        <TodoApp />
      </section>
    </main>
  );
}
