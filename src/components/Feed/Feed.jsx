import React from 'react';

import { LoadingSpinner, ShareBox } from '../../components/index.js';
import './feed.css';

export default function Feed({children, isLoading, rerender}) {

    return (
        <div className='feed'>
            <div className="feed-wrapper">
                <ShareBox rerender={rerender} />

                {
                    isLoading ? (
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
