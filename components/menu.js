import React from 'react';
import Link from 'next/link';
import '@styles/globals.css';
import '@node_modules/boxicons/css/boxicons.min.css'

export default function Menu() {
  return (
    <div className='side-menu'>
      <div id='main-menu'>
        <div className='side-bar-top'>
            <div className='logo'><i className='bx bxs-leaf' ></i> AlfaOS</div>
            <button></button>
        </div>
        <div className='menu-items'>
          <Link href='/'>
            <div className='menu-item'><i className='bx bxs-dashboard' ></i> Dashboard</div>
          </Link>
          <Link href='/menu-item-2'>
            <div className='menu-item'><i className='bx bx-scatter-chart'></i>Analytics</div>
          </Link>
          <Link href='/'>
            <div className='menu-item'><i className='bx bx-leaf'></i> Crops</div>
          </Link>
          <Link href='/menu-item-2'>
            <div className='menu-item'><i className='bx bx-shower'></i> Irrigation</div>
          </Link>
          <Link href='/ai-assistant'>
            <div className='menu-item'><i className='bx bx-bot'></i> AI assistant</div>
          </Link>
          <Link href='/menu-item-2'>
            <div className='menu-item'><i className='bx bx-devices'></i> Devices</div>
          </Link>
          <Link href='/menu-item-2'>
            <div className='menu-item'><i className='bx bx-restaurant'></i> Yield</div>
          </Link>
        </div>
      </div>
      <div id='secondary-menu'>
        <Link href='/settings'>
          <div className='menu-item'><i className='bx bx-cog'></i> Settings</div>
        </Link>
        <Link href='/logout'>
          <div className='menu-item'><i className='bx bx-log-out'></i> Logout</div>
        </Link>
      </div>
    </div>
  );
}
