import React from 'react';

import ChannelQualityList from './ChannelQualityList';
import FormAddNewChannel from '../forms/FormAddNewChannel';

import useModal from '../store/useModal';
import FormLoadFromUrl from '../forms/FormLoadFromUrl';
import About from './About';

import PlusIcon from '../icons/PlusIcon';
import LoadIcon from '../icons/LoadIcon';
import InfoIcon from '../icons/InfoIcon';

export default function Header() {
  const [_, modalActions] = useModal();

  return <div className='w-100 d-flex justify-between'>
    <div className='d-flex'>
      <button
        className='bg-inherit p-0 mr-2'
        title="Play Or Add New Channel"
        onClick={() => { modalActions.setContent({ title: 'Add New Channel', content: <FormAddNewChannel /> }); }}>
        <PlusIcon />
        <span className='ml-1'>add new channel</span>
      </button>

      <button
        className='bg-inherit p-0'
        title="Load Channels From URL"
        onClick={() => { modalActions.setContent({ title: 'Load From Url', content: <FormLoadFromUrl /> }); }}>
        <LoadIcon />
        <span className='ml-1'>Load Channels From URL</span>
      </button>
    </div>

    <div className='d-flex align-center'>
      <span className='ml-2'></span>
      <ChannelQualityList />
      <button
        className='bg-inherit p-0 ml-2'
        title="Load Channels From URL"
        onClick={() => { modalActions.setContent({ title: 'About', content: <About /> }); }}>
        <InfoIcon />
      </button>
    </div>
  </div>
}
