import { useNavigate } from 'react-router-dom';
import BlankStarredIcon from '../../ui/BlankStarredIcon';
import Delete from '../../ui/Delete';
import Download from '../../ui/Download';
import StarredIcon from '../../ui/StarredIcon';
const OnBoarding = () => {
  const isStarred = false;
  const navigate = useNavigate();
  const handleMarkAsStarred = () => {
    console.log('Marked as starred');
  };
  const handleDownload = () => {
    console.log('Downloaded');
  };
  const handleDelete = () => {
    console.log('Deleted');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdAt = new Date().toISOString();
    const projectName = e.currentTarget.projectName.value;
    console.log(projectName, createdAt);
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
          placeholder="Project Name"
          className="py-3 px-4 border-[#ECEEFC] border  my-4     w-full rounded-xl"
        />
        <button type="submit" className="bg-[#136DF5] text-white font-semibold py-3 px-8 w-full rounded-lg">
          Create New
        </button>
      </form>
      <div className=" w-full ">
        <h3 className="text-lg font-semibold p-4">Recent Activity</h3>
        <div className="grid grid-cols-3 w-full px-8 py-4 justify-between">
          <div className="col-span-2">
            <button onClick={() => navigate('/tasks')} className="font-semibold text-base">
              BitsyFlow Checklist
            </button>
            <p className="text-[#84868D] text-sm">10:30pm - 5/02/2024</p>
          </div>
          <div className="col-span-1 flex gap-2 justify-self-end items-center">
            <button className="border" onClick={handleMarkAsStarred}>
              {isStarred ? <StarredIcon /> : <BlankStarredIcon />}
            </button>
            <button onClick={handleDownload}>
              <Download />
            </button>
            <button onClick={handleDelete}>
              <Delete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
