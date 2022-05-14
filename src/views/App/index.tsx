import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from '../components/inputPlus';
import styles from './index.module.scss';
import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore(state => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  useEffect(() => {
    createTask('idjshgiu');
  }, []);

  console.log(tasks);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}></section>
      <InputPlus
        onAdd={title => {
          if (title) {
            createTask(title);
          }
        }}
      />
      <section className={styles.articleSection}>{!tasks.length && <p className={styles.articleText}> There is no one tasks. </p> }</section>
    </article>
  );
};
