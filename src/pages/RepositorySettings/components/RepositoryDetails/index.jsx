import { Fragment } from 'react'
import BaseButton from '~/components/generic/button/BaseButton'

const research = {
  _id: 1,
  title: 'Capstone Project',
  topic: ['Information System', 'Web Development', 'Knowledge Management'],
  time: '1 August 2021 - 1 August 2022',
  description: 'Best project ever',
  faculty: 'Engineering',
  approval: 'approved',
  status: 'active'
}

const RepositoryDetails = () => {
  return (
    <Fragment>
      <h1 className="mt-3 text-2xl font-semibold text-gray-900">
        {research.title}
      </h1>
      <div className="ml-4 my-6 flex flex-col">
        <div className="text-lg font-medium mt-5">Topic</div>
        <div>{research.topic.reduce((prev, curr) => prev + ', ' + curr)}</div>
        <div className="text-lg font-medium  mt-5">Time</div>
        <div>{research.time}</div>
        <div className="text-lg font-medium  mt-5">Description</div>
        <div>{research.description}</div>
        <BaseButton className="ml-auto">Edit</BaseButton>
      </div>
    </Fragment>
  )
}

export default RepositoryDetails
