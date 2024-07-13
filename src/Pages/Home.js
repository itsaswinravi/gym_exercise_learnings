import React, { useState} from 'react';
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import BodyPart from '../components/BodyPart';
const Home = () => {
    const [BodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises}
            BodyPart={BodyPart} 
            setBodyPart={setBodyPart}/>
            <Exercises 
            exercises={exercises}
            setExercises={setExercises}
            bodyPart={BodyPart} 
            />
        </Box>
    );
};

export default Home;