import React from 'react'
import './loading-spinner.css'

export default function LoadingSpinner({lightColor, darkColor}) {
    return (
        <div className='loading-spinner'>

            <div className="loading-bar" style={{borderColor:lightColor,borderLeftColor:darkColor}}>
            </div>

            <div className="loading-text" style={{color:darkColor}}>
                Loading...
            </div>

        </div>
    )
}
