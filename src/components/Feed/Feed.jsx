import React, { useState } from 'react';

import { LoadingSpinner, ShareBox } from '../../components/index.js';
import './feed.css';

export default function Feed({children, isLoading}) {

    const [loading] = useState(isLoading);
;

    return (
        <div className='feed'>
            <div className="feed-wrapper">
                <ShareBox />

                {
                    loading ? (
                        <div className="loading-spinner">
                            <LoadingSpinner lightColor={"#03a9f44d"} darkColor={"blue"}/>
                        </div>
                    ):(
                        <>
                            {children}
                        </>
                    )
                }
            </div>
        </div>
    )
}
