import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete } from '../redux/features/rootTasksSlice';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import PdfModal from './PdfModal';
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
          {tasks?.map((task: TTask, index) => {
            return (
              <SwiperSlide key={index}>
                <div key={index} className="mt-3 w-full">
                  <h3 className="text-2xl mb-3 font-bold">{task.title}</h3>
                  <h4 className=" mb-3 text-sm text-gray-500 font-semibold">{task.subtitle}</h4>
                  <div className="pb-6 space-y-3">
                    {task.tasks.map((task, i) => {
                      return (
                        <div key={i} className="flex gap-3 p-2 items-center">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onClick={() => {
                              handleToggleComplete(i, index);
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
