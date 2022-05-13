import { useToDoStore } from '../../data/stores/useToDoStore';
import styles from './index.module.scss';
import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore(state => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  useEffect(() => createTask('idjshgiu'), []);

  console.log(111, tasks);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}></section>
      <section className={styles.articleSection}></section>
    </article>
  );
};
