import React from 'react'

const EditHome = () => {
  return (
    <div className='w-full not-visited:flex flex-col justify-center items-center relative z-30'>
    <form className='w-[50%]'>
    <div className='flex flex-col justify-center items-center gap-4 w-full relative z-30'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <span className='text-white'>Logo</span>
            <div className='justify-center items-center rounded-2xl border border-primary p-3'>
            <img src="/images/logofollix.png" alt="" />
            </div>
        </div>

        {/*  */}
        <div className='flex justify-center items-center gap-2'>
  <div className='flex flex-col justify-center items-center gap-2'>
    <div className='justify-center items-center rounded-xl'>
      <img className='w-48 h-48 object-cover rounded-2xl border border-primary' src="/images/hassan.png" alt="" />
    </div>
    <span className='text-white'>Our Video</span>
  </div>

  <div className='flex flex-col justify-center items-center gap-2'>
    <div className='justify-center items-center rounded-xl'>
      <img className='w-48 h-48 object-cover rounded-2xl border border-primary' src="/images/Rectangle 40854.png" alt="" />
    </div>
    <span className='text-white'>Course Video</span>
  </div>
</div>
    </div>
    <div className='flex flex-col gap-3 justify-start items-start'>

    
     {/* Web Link */}
    <div className="flex flex-col gap-2 justify-start items-start w-full">
      <label className="text-white">Web Link</label>
      <input
        className="text-white bg-[#D9D9D980] p-3 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder="hhtp/hfghgtdsfg"
      />
    </div>
     {/* Telegram Link */}
    <div className="flex flex-col gap-2 justify-start items-start w-full">
      <label className="text-white">Telegram Link</label>
      <input
        className="text-white bg-[#D9D9D980] p-3 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder="hhtp/hfghgtdsfg"
      />
    </div>
    {/* Description */}
    <div className="flex flex-col gap-2 justify-start items-start w-full">
      <label className="text-white">Description</label>
      <textarea
        className="text-white bg-[#D9D9D980] p-2 rounded-2xl hover:border-primary outline-none w-full"
        type="text"
        placeholder="Foundations of Stock TradingFoundations of Stock TradingFoundations of Stock Trading"
      />
    </div>



    </div>
    </form>
    </div>
  )
}

export default EditHome