// eslint-disable-next-line import/no-named-as-default
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { TProject, TTopic } from '../redux/features/rootTasksSlice';
interface jsPDFWithAutoTable extends jsPDF {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autoTable: (options: any) => jsPDF;
}
type TTasksProps = {
  project: TProject;
};

const TempPdf = ({ project }: TTasksProps) => {
  console.log('pdf page', project);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({ format: 'a4', unit: 'px' }) as jsPDFWithAutoTable;
    project.topics?.tasks.forEach((topic: TTopic) => {
      generateTasks(doc, topic.title, topic.tasks);
      doc.addPage();
    });
    doc.save(`checklist.pdf`);
  };
  const generateTasks = (doc, title: string, tasks) => {
    doc.text(title, 20, 20);
    doc.autoTable({
      startY: 50,
      head: [['Task', 'Status']],
      body: tasks.tasks.map(task => [task.taskTitle, task.isComplete ? 'Completed' : 'Pending']),
    });
  };

  return (
    <div>
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
    </div>
  );
};

export default TempPdf;
