import React from 'react';

import ChannelQualityList from './ChannelQualityList';
import ChannelQualityInfo from './ChannelQualityInfo';
import FormAddNewChannel from '../forms/FormAddNewChannel';

import useModal from '../store/useModal';
import PlusIcon from '../icons/PlusIcon';
import InfoIcon from '../icons/InfoIcon';
import LoadIcon from '../icons/LoadIcon';
import FormLoadFromUrl from '../forms/FormLoadFromUrl';

export default function Header() {
  const [_, modalActions] = useModal();

  return <div className='w-100 d-flex justify-between mb-1'>
  <div className='d-flex'>
    <button
      className='bg-inherit p-0 mr-2'
      title="Play Or Add New Channel"
      onClick={() => { modalActions.setContent(<FormAddNewChannel />); }}>
      <PlusIcon />
      <span className='ml-1'>add new channel</span>
    </button>

    <button
      className='bg-inherit p-0'
      title="Load Channels From URL"
      onClick={() => { modalActions.setContent(<FormLoadFromUrl />); }}>
      <LoadIcon />
      <span className='ml-1'>Load Channels From URL</span>
    </button>
  </div>

  <div className='d-flex align-center'>
    <span className='ml-2'></span>
    <ChannelQualityList />
    <span className='ml-2' onClick={() => { modalActions.setContent(<ChannelQualityInfo />); }}><InfoIcon /></span>
  </div>
</div>
}
