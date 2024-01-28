import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete } from '../redux/features/rootTasksSlice';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
export type TTask = {
  title: string;
  subtitle: string;
  tasks: Array<{ taskTitle: string; taskDescription: string; completed: boolean }>;
};
const Tasks = () => {
  const [swiper, setSwiper] = useState(null);

  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasks = useSelector((state: any) => {
    // console.log(state);
    return state.rootTasks;
  });
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
  const handleToggleComplete = (i: number, index: number) => {
    console.log(i, index);
    dispatch(toggleComplete({ taskIndex: i, topicIndex: index }));
  };
  return (
    <div className="max-w-lg w-full mx-auto mt-6 space-y-1">
      <div className="w-full">
        {/* <PDFDownloadLink document={<TasksPdfConverter dummyTasks={dummyTasks} />}
                    fileName="developer-checklist.pdf"
                    className='text-indigo-600'>
                    {({ blob, url, loading, error }) =>
                        loading ? (
                            'loadings document...'
                        ) : (
                            <button onClick={() => console.log('clicked ')} className='btn btn-primary w-44'>

                                <Download />
                            </button>
                        )
                    }

                </PDFDownloadLink> */}
        <div className="flex justify-between">
          <button onClick={prevHandler} className="btn btn-primary w-44">
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
          <button onClick={nextHandler} className="btn btn-primary w-44">
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
      </div>
      <div className="h-96">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          autoHeight={true}
          onSwiper={handleSwiper}
          slidesPerView={1}
          loop={true}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          {tasks?.map((task: TTask, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="border h-fit mt-3  w-full p-4">
                <h3 className="text-2xl mb-3 font-bold">{task.title}</h3>
                <h4 className=" mb-3 text-sm text-gray-500 font-semibold">{task.subtitle}</h4>
                <div className=" space-y-3">
                  {task.tasks.map((task, i) => {
                    return (
                      <div key={i} className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onClick={() => {
                            handleToggleComplete(i, index);
                          }}
                          key={i}
                          className="h-6 w-6 rounded-md border-gray-300 
                                         text-indigo-600 cursor-pointer
                                         focus:ring-2 
                                         hover:ring-indigo-500
                                         hover:text-indigo-600
                                         "
                        />
                        <div>
                          <h2 className="text-base font-semibold">{task.taskTitle}</h2>
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
    </div>
  );
};

export default Tasks;
