export const completedTasksCount = tasks => {
  let completedTasks = 0;
  tasks.forEach(task => {
    if (task.isComplete) {
      completedTasks++;
    }
  });
  return completedTasks;
};
