import React from 'react';
import {dbService} from '../firebase';

const Wrongs = ({wrongs, isAdmin, showWrongs}) => {
    const toggleShowWrongs = () => {
        dbService.collection('current').doc('current').update({
            showWrongs: !showWrongs
        })
    }
    return (
        <>
            <div>
                    <div>
                        <h3>오답 {wrongs.length} </h3>
                    </div>
                {showWrongs ? wrongs.map( (w, idx) => (
                    <div item key={idx} >
                        <div>
                            <h3> {w.answer} </h3>
                        </div>
                    </div>
                    )) 
                    :<>
                        <h4>어떤 오답들이 있을까요?</h4>
                    </>
                }
            </div>
        </>
    )
}

export default Wrongs;