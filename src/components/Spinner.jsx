// import  {BeatLoader}  from "react-spinners"

// const override= {
//   display:'block',
//   margin: ' 50% auto'
// };

// const Spinner = ({loading}) => {
//   return (
//     <div className="flex justify-center">
//     <BeatLoader 
//       color='#444444'
//       loading = {loading}
//       cssOverride={override}
//       size = {20}
//     />
//     </div>
//   )
// }

// export default Spinner;

import React from 'react'

const Spinner = () => {

  return (
    <div className='h-screen bg-yellow-900'>
      <div className='flex justify-center items-center h-screen font-bold animate-sliderightto'>
        <img className='w-12 h-10 rounded-full mr-2 animate-rotate' src='src/assets/images/images (1).jpeg'/>
        <div className='mr-2 text-white animate-sliderightto1'>M</div>
        <div className='mr-2 animate-sliderightto2'>A</div>
        <div className='mr-2 text-white animate-sliderightto3'>Z</div>
        <div className='mr-2 text-yellow-600 animate-sliderightto4'>O</div>
        <div className='mr-2 animate-sliderightto5'>N</div>
      </div>
    </div>
  )
}

export default Spinner