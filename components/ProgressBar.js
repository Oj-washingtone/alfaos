import React from 'react'

export default function ProgressBar({ progress, label, description }) {
  return (
    <div className='range'>
      <div className='progress' style={{ width: `${progress}%`, fontSize: "12px" }}>
        {label && <span>{label}</span>}
      </div>

      <div className='progress__label'>{progress}%</div>

      {/* custom tooltip */}
      <div className='progress__tooltip'>
        <span style={{fontWeight: "bold", marginBottom: "10px"}}>{label}</span>
        <p>{description}</p>

        <button className='more__link'>Read More...</button>
      </div>
    </div>
  )
}
