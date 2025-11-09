import { satisfaction } from '@src/constants/satisfaction'
import React from 'react'

const SatisfactionSummary = () => {
  return (
    <div className="text-sm text-slate-600 w-full">
    {/* Last Week */}
    <div className='flex items-center'> 
      <div className="flex items-start border-r border-grey-500 pr-4">
        <img src='/statistic/satisfaction_1.svg' alt='last_week' className='w-5 object-cover mt-2' />
        <div className='pl-2'>
            <p className='text-4 text-grey-500'>Last Week</p>
            <p className='text-[.875rem]'>{satisfaction.lastWeek.reduce((num, acc) => acc + num, 0)}</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 pl-4">
        {satisfaction.days.map((d, i) => (
          <div key={d} className="text-center">
            <div className="text-4 text-slate-400">{d}</div>
            <div className='text-[.875rem]'>{satisfaction.lastWeek[i]}</div>
          </div>
        ))}
      </div>
    </div>

    {/* This Week */}
    <div className='flex items-center mt-4'> 
      <div className="flex items-start border-r border-grey-500 pr-4">
        <img src='/statistic/satisfaction_2.svg' alt='last_week' className='w-5 object-cover mt-2' />
        <div className='pl-2'>
            <p className='text-4 text-grey-500'>This Week</p>
            <p className='text-[.875rem]'>{satisfaction.lastWeek.reduce((num, acc) => acc + num, 0)}</p>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 pl-4">
        {satisfaction.days.map((d, i) => (
          <div key={d} className="text-center">
            <div className="text-4 text-slate-400">{d}</div>
            <div className='text-[.875rem]'>{satisfaction.thisWeek[i]}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SatisfactionSummary