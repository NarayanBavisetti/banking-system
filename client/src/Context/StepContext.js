import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

export const multiStepContext = createContext();

export default function StepContext(props) {
    const history = useHistory();
    const [currentStep , setCurrentStep] = useState(1);
    const [userData , setUserData] = useState([]);
    const [finalData , setFinalData] = useState([]);

    function submitData(){
        setFinalData(finalData => [...finalData,userData]);
        console.log(userData)
        axios.post("/add",userData);
        setUserData('');
        setCurrentStep(1);
        history.push("/customers");
    }


    return (
       <multiStepContext.Provider value={{currentStep, setCurrentStep,userData , setUserData,finalData , setFinalData, submitData}}>
           {props.children}
       </multiStepContext.Provider>
    )
}
