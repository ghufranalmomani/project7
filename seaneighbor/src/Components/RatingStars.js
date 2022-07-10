import React, { useState } from 'react';
import '../style.css'
import Star from './Star';

const RatingStars = ({ setRate }) => {
    const [gradeIndex, setGradeIndex] = useState();
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const activeStar = {
        fill: 'yellow'
    };

    const changeGradeIndex = ( index ) => {
        setGradeIndex(index);
        setRate(index);
    }

    return (
        <div className="container">
            {/* You didn\'t review yet removed */}
            {/* <p className="result">{ GRADES[gradeIndex] ? GRADES[gradeIndex] : ''}</p> */}
            <div className="stars">
                {
                    GRADES.map((grade, index) => (
                        <Star 
                            index={index+1} 
                            key={grade} 
                            changeGradeIndex={changeGradeIndex}
                            style={ gradeIndex > index ? activeStar : {}}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingStars;