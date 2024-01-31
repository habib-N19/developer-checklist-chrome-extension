import { useDispatch, useSelector } from 'react-redux';
import { completedTasksCount, loadDataFromLocalStorage, toggleComplete } from '../redux/features/rootTasksSlice';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useEffect } from 'react';
import PdfModal from './PdfModal';
import { TTask } from '../Types/tasksTypes';

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
  console.log('after toggle post state', tasks.initialStateData[0]);
  console.log('count after update', count);
  console.log(tasks.initialStateData[0].tasks[0].isComplete);

  const totalTasks = tasks.initialStateData?.reduce((acc, task) => acc + task.tasks.length, 0);
  console.log('totalTasks', totalTasks);
  const progress = totalTasks > 0 ? (count / totalTasks) * 100 : 0;
  console.log('progress', progress);
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
    <div className="max-w-lg w-full mx-auto mt-6 space-y-1">
      <div className="w-full">
        <PdfModal></PdfModal>
        <div className="relative flex justify-between">
          <button title="previous" onClick={prevHandler} className="btn btn-primary w-44">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={nextHandler} title="next topic" className=" inline-flex justify-end btn btn-primary w-44">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <div className="swiper-pagination absolute top-0"></div>
      </div>
      <p>
        {tasks.initialStateData[0].tasks[0].isComplete ? '' : ''} {count}
      </p>
      <div className="py-6">
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
                <div key={index} className="mt-3 w-full">
                  <h3 className="text-2xl mb-3 font-bold">{tasks.title}</h3>
                  <h4 className=" mb-3 text-sm text-gray-500 font-semibold">{tasks.subtitle}</h4>
                  <div className="pb-6 space-y-3">
                    {tasks.tasks.map((task, i) => {
                      return (
                        <div key={i} className="flex gap-3 p-2 items-center">
                          <input
                            type="checkbox"
                            checked={task?.isComplete}
                            onClick={() => {
                              // console.log('uporer console', task.isComplete);
                              handleToggleComplete(tasks.title, task.taskTitle, task.isComplete ? true : false);
                              // console.log('inside checkbox', task.isComplete);
                            }}
                            key={i}
                            style={{
                              minHeight: '24px',
                              minWidth: '24px',
                            }}
                            className="rounded-md border-gray-300 
                                         text-indigo-600 cursor-pointer
                                         focus:ring-2 
                                         hover:ring-indigo-500
                                         hover:text-indigo-600
                                         "
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
    </div>
  );
};

export default Tasks;
