// import { useRef, useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
// import autoTable from 'jspdf-autotable'
import 'jspdf-autotable';

interface jsPDFWithAutoTable extends jsPDF {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autoTable: (options: any) => jsPDF;
}

const TempPdf = () => {
  // const [projectName, setProjectName] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasksData = useSelector((state: any) => state.rootTasks);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({ format: 'a4', unit: 'px' }) as jsPDFWithAutoTable;
    tasksData.initialStateData.forEach(task => {
      // setProjectName(task.title)
      generateTasks(doc, task.title, task.tasks);
      doc.addPage(); // Add a new page for each project
    });
    doc.save(`checklist.pdf`);
  };
  const generateTasks = (doc, title, tasks) => {
    doc.text(title, 20, 20);
    doc.autoTable({
      startY: 50,
      head: [['Task', 'Status']],
      body: tasks.map(task => [task.taskTitle, task.completed ? 'Completed' : 'Pending']),
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
