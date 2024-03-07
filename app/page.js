"use client"

import '@styles/globals.css';
import Image from "next/image";
import Menu from "@components/menu";
import "@components/LineChart"
import LineChart from '@components/LineChart';

import LeafAnalysis from "@components/LeafAnalysis";
import ProgressBar from '@components/ProgressBar';


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
                <div className='channel__analysis_bars_wrapper'>
                  <ProgressBar progress={50} label={"EC"} description={"Electrical Conductivity"} />
                  <ProgressBar progress={60} label={"PH"} description={
                    "Potential of Hydrogen, a measure of the acidity or basicity of a solution."
                  } />
                  <ProgressBar progress={70} label={"TDS"}  description={
                    "Total Dissolved Solids, the combined content of all inorganic and organic substances contained in a liquid."
                  }/>
                  <ProgressBar progress={80} label={"DO"} description={
                    "Dissolved Oxygen, the amount of oxygen that is present in water."
                  }/>
                  <ProgressBar progress={90} label={"ORP"} description={
                    "Oxidation-Reduction Potential, a measure of the tendency of a chemical species to acquire electrons and thereby be reduced."
                  } />
                </div>
              
              </div>
            </div>

            <div className=" sections col-3">
              <div className="my__card sect_2">
                <div className='section-header'>
                  <h2>Crop</h2>

                  <LeafAnalysis />
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
