import { useDispatch, useSelector } from 'react-redux';
import {
  TProject,
  TTopic,
  // completedTasksCount,
  markAllAsComplete,
  markAllAsIncomplete,
  toggleComplete,
} from '../redux/features/rootTasksSlice';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import LeftArrow from '../ui/LeftArrow';
import RightArrow from '../ui/RightArrow';
import SelectAll from '../ui/SelectAll';
import DeSelectAll from '../ui/DeSelectAll';
import Download from '../ui/Download';
import { PdfGenerator } from '../utils/PdfGenerator';
import PdfModal from './PdfModal';
import CustomCheckbox from '../ui/CustomCheckbox';
// import { Progress } from '@chakra-ui/react';
export type TTasksProps = {
  project: TProject;
};
// : React.FC<TTasksProps>
const Tasks = ({ project }: TTasksProps) => {
  const [swiper, setSwiper] = useState(null);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = useSelector((state: any) => state.rootTasks.completedTasksCount);
  console.log('count', count);
  console.log('redux tasks pre toggle initial state', project);
  // useEffect(() => {
  //   dispatch(loadDataFromLocalStorage());
  //   // dispatch(completedTasksCount());
  // }, [dispatch]);

  const handleToggleComplete = (projectName, topicTitle, taskTitle, isComplete) => {
    dispatch(toggleComplete({ projectName, topicTitle, taskTitle, isComplete }));
    // dispatch(completedTasksCount());
  };
  const handleSelectAll = (projectName: string, topicTitle: string) => {
    dispatch(markAllAsComplete({ projectName, topicTitle }));
    // dispatch(completedTasksCount());
  };
  const handleDeSelectAll = (projectName: string, topicTitle: string) => {
    dispatch(markAllAsIncomplete({ projectName, topicTitle }));
    // dispatch(completedTasksCount());
  };
  // console.log('after toggle post state', tasks.initialStateData[0]);
  // console.log('count after update', count);
  // console.log(tasks.initialStateData[0].tasks[0].isComplete);
  // const totalTasks = projects.initialStateData?.topic.reduce((acc, topic) => acc + topic.tasks.length, 0);
  // console.log('totalTasks', totalTasks);
  // const progress = Math.round(totalTasks > 0 ? (count / totalTasks) * 100 : 0);
  // console.log('progress', progress);
  const prevHandler = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const nextHandler = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const handleSwiper = swiper => {
    setSwiper(swiper);
  };
  const handleDownload = project => {
    console.log('from tasks', project);
    const generatePdf = PdfGenerator({ project });
    generatePdf();
  };
  return (
    <div className="relative max-w-lg w-full mx-auto space-y-1">
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          autoHeight={true}
          onSwiper={handleSwiper}
          slidesPerView={1}
          loop={true}
          // navigation
          // pagination={{ clickable: true, el: '.swiper-pagination' }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          {project.topics?.map((topic: TTopic, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="w-full">
                <div className="relative flex pb-6 w-full justify-between items-center">
                  <button title="previous" onClick={prevHandler} className="btn btn-primary">
                    <LeftArrow />
                  </button>
                  <h3 className="text-center text-xl font-semibold">{topic.title}</h3>

                  <button onClick={nextHandler} title="next topic" className="inline-flex justify-end btn btn-primary">
                    <RightArrow />
                  </button>
                  {/* <div className="swiper-pagination absolute top-0"></div> */}
                </div>
                {/* <div className="px-8 py-2 "></div> */}
                <h4 className="text-center mb-3 text-sm text-gray-500 font-semibold">{topic.subtitle}</h4>
                {/* top nav of slider */}
                <div className="flex border-y border-y-[#ECEEFC] py-4 mb-4  w-full gap-2 items-center ">
                  <button
                    onClick={() => handleSelectAll(project.projectTitle, topic.title)}
                    className="flex gap-1 items-center">
                    <SelectAll />
                    <p>Select All</p>
                  </button>
                  <button
                    className="flex gap-1 items-center"
                    onClick={() => handleDeSelectAll(project.projectTitle, topic.title)}>
                    <DeSelectAll />
                    <p>Deselect All</p>
                  </button>

                  <div className="justify-self-end ml-auto">
                    <button>
                      <PdfModal project={project} />
                    </button>
                    <button onClick={() => handleDownload(project)}>
                      <Download />
                    </button>
                  </div>
                </div>
                <div className="pb-6 px-4 space-y-3">
                  {topic.tasks.map((task, i) => {
                    return (
                      <div key={i} className="flex gap-3 items-center">
                        {/* <input
                          type="checkbox"
                          checked={task?.isComplete}

                          onChange={() => {
                            handleToggleComplete(
                              project.projectTitle,
                              topic.title,
                              task.taskTitle,
                              task.isComplete ? true : false,
                            );
                          }}
                          key={i}
                          // style={{
                          //   minHeight: '24px',
                          //   minWidth: '24px',
                          //   borderRadius: '29px',
                          // }}
                          // className="rounded-lg bg-[#136DF5]"
                          className='hidden'
                        /> */}
                        <CustomCheckbox
                          handleChecked={() => {
                            handleToggleComplete(
                              project.projectTitle,
                              topic.title,
                              task.taskTitle,
                              task.isComplete ? true : false,
                            );
                          }}
                          checked={task.isComplete}
                        />
                        <div className="">
                          <h4
                            // onChange={() => {
                            //   handleToggleComplete(
                            //     project.projectTitle,
                            //     topic.title,
                            //     task.taskTitle,
                            //     task.isComplete ? true : false,
                            //   );
                            // }}

                            className="text-base font-semibold">
                            {task.taskTitle}
                          </h4>
                          <p className="text-sm text-gray-500">{task.taskDescription}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full z-100 left-0 fixed bottom-0 rounded-b">{/* <Progress value={progress}></Progress> */}</div>
    </div>
  );
};

export default Tasks;
