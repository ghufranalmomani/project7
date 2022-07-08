import React, { useState } from 'react';
import '../style.css'
import Star from './Star';

const RatingStars = () => {
    const [gradeIndex, setGradeIndex] = useState();
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const activeStar = {
        fill: 'yellow'
    };

    const changeGradeIndex = ( index ) => {
        setGradeIndex(index);
    }

    return (
        <div className="container">
            {/* You didn\'t review yet removed */}
            {/* <p className="result">{ GRADES[gradeIndex] ? GRADES[gradeIndex] : ''}</p> */}
            <div className="stars">
            <form>
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
                <button type='submit' >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default RatingStars;