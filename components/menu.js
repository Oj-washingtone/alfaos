import React from 'react';
import Link from 'next/link';
import '@styles/globals.css';
import '@node_modules/boxicons/css/boxicons.min.css'

export default function Menu() {
  return (
    <div className='side-menu'>
      <div id='main-menu'>
        <div className='side-bar-top'>
            <div className='logo'><i class='bx bxs-leaf' ></i> AlfaOS</div>
            <button></button>
        </div>
        <div className='menu-items'>
          <Link href='/'>
            <div className='menu-item'><i class='bx bxs-dashboard' ></i> Dashboard</div>
          </Link>
          <Link href='/'>
            <div className='menu-item'><i class='bx bx-leaf'></i> Crops</div>
          </Link>
          <Link href='/menu-item-2'>
            <div className='menu-item'><i class='bx bxs-cloud-rain'></i> Conditions</div>
          </Link>
          <Link href='/menu-item-2'>
            <div className='menu-item'><i class='bx bx-shower'></i> Irrigation</div>
          </Link>
          <Link href='/ai-assistant'>
            <div className='menu-item'><i class='bx bx-bot'></i> AI assistant</div>
          </Link>
          <Link href='/menu-item-2'>
            <div className='menu-item'><i class='bx bx-devices'></i> Devices</div>
          </Link>
        </div>
      </div>
      <div id='secondary-menu'>
        <Link href='/settings'>
          <div className='menu-item'><i class='bx bx-cog'></i> Settings</div>
        </Link>
        <Link href='/logout'>
          <div className='menu-item'><i class='bx bx-log-out'></i> Logout</div>
        </Link>
      </div>
    </div>
  );
}
