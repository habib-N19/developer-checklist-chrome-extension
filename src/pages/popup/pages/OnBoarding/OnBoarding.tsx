import { useNavigate } from 'react-router-dom';
import BlankStarredIcon from '../../ui/BlankStarredIcon';
import Delete from '../../ui/Delete';
import Download from '../../ui/Download';
import StarredIcon from '../../ui/StarredIcon';
import { useDispatch, useSelector } from 'react-redux';
import { TProject, addNewProject, loadDataFromLocalStorage, toggleStarred } from '../../redux/features/rootTasksSlice';
import { useState, useEffect } from 'react';
const OnBoarding = () => {
  const [validInput, setValidInput] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projects = useSelector((state: any) => state.rootTasks);
  useEffect(() => {
    dispatch(loadDataFromLocalStorage());
    // dispatch(completedTasksCount());
  }, [dispatch]);
  const handleMarkAsStarred = (projectTitle: string) => {
    dispatch(toggleStarred({ projectTitle }));
  };
  const handleDownload = project => {
    console.log(project);
  };
  const handleDelete = () => {
    console.log('Deleted');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidInput(e.target.value.trim().length > 0);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdAt = new Date().toISOString();
    const projectName = e.currentTarget.projectName.value;
    dispatch(addNewProject({ projectName, createdAt }));
    setValidInput((prev: boolean) => !prev);
    navigate('/tasks');
  };
  return (
    <div className=" max-w-[480px] mx-auto text-[#1D1B22]">
      <form onSubmit={handleSubmit} className=" px-[66px] py-10">
        <label htmlFor="projectName" className="font-semibold text-lg ">
          Create New Checklist
        </label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          required
          placeholder="Project Name"
          onChange={handleInputChange}
          className="py-3 px-4 outline-none focus:outline-blue-300  my-4  w-full rounded-xl"
        />
        <button
          disabled={!validInput}
          type="submit"
          className="disabled:bg-[#136df526] bg-[#136DF5] text-white font-semibold py-3 px-8 w-full rounded-lg">
          Create New
        </button>
      </form>
      <div className=" w-full ">
        <h3 className="text-lg font-semibold p-4">Recent Activity</h3>
        {projects.initialStateData.map((project: TProject, index: number) => (
          <div key={index} className="grid grid-cols-3 w-full px-8 py-4 justify-between">
            <div className="col-span-2">
              <button onClick={() => navigate('/tasks')} className="font-semibold text-base">
                {project.projectTitle}
              </button>
              <p className="text-[#84868D] text-sm">{new Date(project.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="col-span-1 flex gap-2 justify-self-end items-center">
              <button className="" onClick={() => handleMarkAsStarred(project.projectTitle)}>
                {project.isStarred ? <StarredIcon /> : <BlankStarredIcon />}
              </button>
              <button onClick={() => handleDownload(project)}>
                <Download />
              </button>
              <button onClick={handleDelete}>
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnBoarding;
