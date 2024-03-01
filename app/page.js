"use client"

import '@styles/globals.css';
import Image from "next/image";
import Menu from "@components/menu";
import "@components/LineChart"
import { Line } from 'react-chartjs-2';
import LineChart from '@components/LineChart';


export default function Home() {
  return (
    <main>
      <Menu />
      <div className="main">
        <div className="row">
           <div className="sections col-6">
              <div className="my__card sect_2">
                <div className='section-header'>
                  <h2>Temperature, Humidity and Light Variations</h2>
                </div>

                <LineChart />
              </div>
            </div>

            <div className="sections col-3">
              <div className="my__card sect_2">
                <div className='section-header'>
                  <h2>Channel</h2>
                </div>
                {/* body */}
              </div>
            </div>

            <div className=" sections col-3">
              <div className="my__card sect_2">
                <div className='section-header'>
                  <h2>Crop</h2>
                </div>

                {/* body */}
              </div>
            </div>
        </div>

        <div className='row'>
          <div className='sections col-12'>
            <div className="my__card sect_3">
                <div className='section-header'>
                  <h2>More Analysis</h2>
                </div>
            </div>
          </div>
        </div>

        <div className="row"> 
          <div className='sections col-4'>
            <div className="my__card sect_4">
                <div className='section-header'>
                  <h2>Part 1</h2>
                </div>
            </div>
          </div>
          <div className='sections col-4'>
            <div className="my__card sect_4">
                <div className='section-header'>
                  <h2>AI Assistant</h2>
                </div>
            </div>
          </div>
          <div className='sections col-4'>
            <div className="my__card sect_4">
                <div className='section-header'>
                  <h2>Part 2</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
