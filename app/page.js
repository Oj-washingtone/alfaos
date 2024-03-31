"use client"

import '@styles/globals.css';
import Image from "next/image";
import Menu from "@components/menu";
import "@components/LineChart"
import LineChart from '@components/LineChart';
import { GoAlertFill } from "react-icons/go";

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
                  <h2>Crop Analysis</h2>
                </div>
                <LeafAnalysis />
              </div>
            </div>
        </div>

        <div className='row'>
          <div className='sections col-12'>
            <div className="my__card sect_3">
                <div className='section-header'>
                  <h2>Upcoming Activities</h2>
                </div>
                <table className='activities-table'>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Activity</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                 
                    <tbody>
                      <tr>
                        <td>
                          1 hour ago
                        </td>
                        <td>Watering</td>
                        <td>10:00</td>
                        <td>10:30</td>
                        <td>
                          <button className='action-simple-btn'>
                          Initiate
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          2 hours ago
                        </td>
                        <td>Watering</td>
                        <td>10:00</td>
                        <td>10:30</td>
                        <td>
                          <button className='action-simple-btn'>
                          Initiate
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          3 hours ago
                        </td>
                        <td>Nutrients</td>
                        <td>10:00</td>
                        <td>10:30</td>
                        <td>
                          <button className='action-simple-btn'>
                          Initiate
                          </button>
                        </td>
                      </tr>   
                    </tbody>
                </table>
            </div>
          </div>
        </div>

        <div className="row"> 
          <div className='sections col-4'>
            <div className="my__card sect_4">
                <div className='section-header'>
                  <h2>Crops</h2>
                </div>

                <div className='row plant-statistics'>
                  <div className='col-5 crop-card'>
                    crop 1
                    <p className='tottal-plants'>1200 plants</p>
                  </div>

                  <div className='col-5 crop-card'>
                    crop 2
                    <p className='tottal-plants'>1200 plants</p>
                  </div>

                  <div className='col-5 crop-card'>
                    crop 3
                    <p className='tottal-plants'>1200 plants</p>
                  </div>

                  <div className='col-5 crop-card'>
                    crop 4
                    <p className='tottal-plants'>1200 plants</p>
                  </div>

                  <div className='col-5 crop-card'>
                    crop 5
                    <p className='tottal-plants'>1200 plants</p>
                  </div>
                </div>

            </div>
          </div>
          <div className='sections col-4'>
            <div className="my__card sect_4">
                <div className='section-header'>
                  <h2>AI Assistant</h2>
                </div>

                <div className='reccomendations'>
                  <p>- recommendation 1 Apply fertilizers judiciously based on the needs of the plants and the results of soil tests. Use organic or slow-release fertilizers to provide a steady supply of nutrients over time and minimize the risk of nutrient leaching.</p>
                  <p>- something else</p>
                  <p>- another thing </p>
                  <p>- last thing here</p>
                </div>

                <div className='card-footer'>
                  <button className='btn-3'>Read more</button>
                </div>
            </div>
          </div>
          <div className='sections col-4'>
            <div className="my__card sect_4">
                <div className='section-header'>
                  <h2>Plant Health</h2>
                </div>

                <div className='reccomendations'>
                  <div className='warning'>
                    <GoAlertFill />
                    <p className='warning-text'> Detected anomaly, channel B2 plant 36 !</p>
                  </div>
                  <div className='crop-image-grid row'>
                    <div className='crop-image-wrapper col-4'>
                      <Image src="/lettuce.jpeg" width={500} height={500} className='crop-image' alt="Crop disease image"/>
                    </div>
                    <div className='crop-image-wrapper col-4'>
                      <Image src="/lettuce.jpeg" width={500} height={500} className='crop-image' alt="Crop disease image"/>
                    </div>
                    <div className='crop-image-wrapper col-4'>
                      <Image src="/lettuce.jpeg" width={500} height={500} className='crop-image' alt="Crop disease image"/>
                    </div>
                  </div>

                  <p className='disease-explanation'>Lettuce Leaf Spot is often caused by fungi such as Cercospora spp., Septoria spp., and Botrytis spp. These fungi can infect lettuce plants, leading to the development of characteristic spots on the leaves. The appearance of the spots can vary depending on the specific pathogen involved, but they often manifest as small, dark lesions or spots on the foliage.</p>
                </div>

                <div className='card-footer'>
                  <button className='btn-4'>See full details...</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
