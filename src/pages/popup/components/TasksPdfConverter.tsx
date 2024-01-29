import React from 'react';
// eslint-disable-next-line import/named
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import { useSelector } from 'react-redux';
// eslint-disable-next-line react/prop-types
const TasksPdfConverter = ({ tasks }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const tasks = useSelector((state: any) => {
  //   console.log(state);
  //   return state.rootTasks
  // });
  console.log('from converter', tasks);
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    task: {
      margin: 10,
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      // flexGrow: 1
    },
  });
  return (
    <Document>
      <View style={styles.section}>
        <Text>ideapeel</Text>
      </View>
      <View style={styles.section}>
        <Text>Tasks List</Text>
      </View>

      {// eslint-disable-next-line react/prop-types
      tasks?.map((task, index: number) => {
        return (
          <Page key={index} size="A4" style={styles.page}>
            <View style={styles.section} key={index}>
              <Text>{task.title}</Text>
              {task.tasks.map((task, i) => {
                return (
                  <View style={styles.task} key={i}>
                    <Text>{task.taskTitle}</Text>
                    <Text>{task.completed ? 'Completed' : 'Pending'}</Text>
                  </View>
                );
              })}
            </View>
          </Page>
        );
      })}
    </Document>
  );
};
export default TasksPdfConverter;
