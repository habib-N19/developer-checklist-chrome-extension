import { useDispatch, useSelector } from 'react-redux';
import {
  completedTasksCount,
  loadDataFromLocalStorage,
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
import { useState, useEffect } from 'react';
import { TTask } from '../Types/tasksTypes';
import LeftArrow from '../ui/LeftArrow';
import RightArrow from '../ui/RightArrow';

import SelectAll from '../ui/SelectAll';
import DeSelectAll from '../ui/DeSelectAll';
import PdfModal from './PdfModal';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const Tasks = () => {
  const [swiper, setSwiper] = useState(null);
  const dispatch = useDispatch();
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasks = useSelector((state: any) => {
    return state.rootTasks;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = useSelector((state: any) => state.rootTasks.completedTasksCount);
  console.log('count', count);
  console.log('redux tasks pre toggle initial state', tasks);
  useEffect(() => {
    dispatch(loadDataFromLocalStorage());
    dispatch(completedTasksCount());
  }, [dispatch]);

  const handleToggleComplete = (topicTitle, taskTitle, isComplete) => {
    dispatch(toggleComplete({ topicTitle, taskTitle, isComplete }));
    dispatch(completedTasksCount());
  };
  const handleSelectAll = (topicTitle: string) => {
    dispatch(markAllAsComplete({ topicTitle }));
    dispatch(completedTasksCount());
  };
  const handleDeSelectAll = (topicTitle: string) => {
    dispatch(markAllAsIncomplete({ topicTitle }));
    dispatch(completedTasksCount());
  };
  // console.log('after toggle post state', tasks.initialStateData[0]);
  // console.log('count after update', count);
  // console.log(tasks.initialStateData[0].tasks[0].isComplete);
  const totalTasks = tasks.initialStateData?.reduce((acc, task) => acc + task.tasks.length, 0);
  // console.log('totalTasks', totalTasks);
  const progress = Math.round(totalTasks > 0 ? (count / totalTasks) * 100 : 0);
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
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          {tasks.initialStateData?.map((tasks: TTask, index) => {
            return (
              <SwiperSlide key={index}>
                <div key={index} className="w-full">
                  <div className="relative flex mb-2 w-full justify-between items-center">
                    <button title="previous" onClick={prevHandler} className="btn btn-primary">
                      <LeftArrow />
                    </button>
                    <h3 className="text-center text-xl font-semibold">{tasks.title}</h3>
                    <button
                      onClick={nextHandler}
                      title="next topic"
                      className="inline-flex justify-end btn btn-primary">
                      <RightArrow />
                    </button>
                    {/* <div className="swiper-pagination absolute top-0"></div> */}
                  </div>
                  <div className="px-8 py-2 "></div>
                  <h4 className="text-center mb-3 text-sm text-gray-500 font-semibold">{tasks.subtitle}</h4>
                  {/* top nav of slider */}
                  <div className="flex w-full gap-2 items-center ">
                    <button onClick={() => handleSelectAll(tasks.title)} className="flex gap-1 items-center">
                      <SelectAll />
                      <p>Select All</p>
                    </button>
                    <button className="flex gap-1 items-center" onClick={() => handleDeSelectAll(tasks.title)}>
                      <DeSelectAll />
                      <p>Deselect All</p>
                    </button>

                    <div className="justify-self-end ml-auto w-fit">
                      <PdfModal />
                    </div>
                  </div>
                  <div className="pb-6 space-y-3">
                    {tasks.tasks.map((task, i) => {
                      return (
                        <div key={i} className="flex gap-3 p-2 items-center">
                          <input
                            type="checkbox"
                            checked={task?.isComplete}
                            onChange={() => {
                              handleToggleComplete(tasks.title, task.taskTitle, task.isComplete ? true : false);
                            }}
                            key={i}
                            style={{
                              minHeight: '24px',
                              minWidth: '24px',
                              borderRadius: '29px',
                            }}
                            className="rounded-lg bg-[#136DF5]"
                          />
                          <div className="">
                            <h2 className="text-base font-semibold">{task.taskTitle}</h2>
                            <p className="text-sm text-gray-500">{task.taskDescription}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="fixed right-2 bottom-3">
        <CircularProgress value={progress} color="#136DF5">
          <CircularProgressLabel>{progress} %</CircularProgressLabel>
        </CircularProgress>
      </div>
    </div>
  );
};

export default Tasks;
