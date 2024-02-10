// import SelectAll from '../ui/SelectAll';
// import DeSelectAll from '../ui/DeSelectAll';
// import PdfModal from './PdfModal';
// import { useDispatch } from 'react-redux';
// import { markAllAsComplete, markAllAsIncomplete } from '../redux/features/rootTasksSlice';

// const SliderTopNav = ({ topicTitle }: { topicTitle: string }) => {
//   const dispatch = useDispatch();
//   const handleSelectAll = (topicTitle: string) => {
//     dispatch(markAllAsComplete({ topicTitle }));
//   };
//   const handleDeSelectAll = (topicTitle: string) => {
//     dispatch(markAllAsIncomplete({ topicTitle }));
//   };
//   return (
//     <div className="flex w-full gap-2 items-center ">
//       <button onClick={() => handleSelectAll(topicTitle)} className="flex gap-1 items-center">
//         <SelectAll />
//         <p>Select All</p>
//       </button>
//       <button className="flex gap-1 items-center" onClick={() => handleDeSelectAll(topicTitle)}>
//         <DeSelectAll />
//         <p>Deselect All</p>
//       </button>

//       <div className="justify-self-end ml-auto w-fit">
//         <PdfModal />
//       </div>
//     </div>
//   );
// };

// export default SliderTopNav;
