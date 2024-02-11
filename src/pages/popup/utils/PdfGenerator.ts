// eslint-disable-next-line import/no-named-as-default
import jsPDF from 'jspdf';
import 'jspdf-autotable';
interface jsPDFWithAutoTable extends jsPDF {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autoTable: (options: any) => jsPDF;
}

export const PdfGenerator = ({ project }) => {
  //   console.log('from generator pdf', project);
  const generateTasks = (doc, title: string, tasks) => {
    doc.text(title, 20, 20);
    doc.autoTable({
      startY: 50,
      head: [['Task', 'Status']],
      body: tasks.map(task => [task.taskTitle, task.isComplete ? 'Completed' : 'Pending']),
    });
  };
  const handleGeneratePdf = () => {
    const doc = new jsPDF({ format: 'a4', unit: 'px' }) as jsPDFWithAutoTable;
    project.topics.forEach(topic => {
      generateTasks(doc, topic.title, topic.tasks);
      doc.addPage();
    });
    doc.save(`${project.projectTitle}.pdf`);
  };
  return handleGeneratePdf;
};
