import React from 'react'
import './AppDownload.css'
import ios_png from '../Assets/app_store.png'
import google_png from '../Assets/play_store.png'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br />RIMBERIO APP</p>
      <div className="app-download-platforms">
        <img src={google_png} alt="" />
        <img src={ios_png} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
