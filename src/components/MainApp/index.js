import React, { useEffect, useState } from "react";
import getActivity from "../../services/getActivity";
import Activity from "../Activity";
import Spinner from "../Spinner";
import './MainApp.css'
import SearchParamsForm from "../SearchParamsForm";


export default function MainApp() {
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState('')
    const [typOfaccesibility, setTypeOfAccesibility] = useState('')
    const [accessibility, setAccessibility] = useState('0.5')
    const [customPrice, setCustomPrice] = useState(true)
    const [price, setPrice] = useState('0')
    const [activity, setActivity] = useState({ error: 'error' })

    useEffect(() => {
        setLoading(true)
        getActivity(type, accessibility, price, customPrice, typOfaccesibility).then((data) => { setActivity(data); setLoading(false) })
    }, [type, accessibility, price, customPrice, typOfaccesibility]
    )

    const HandleSumbit = evt => {
        evt.preventDefault()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(getActivity(type, accessibility, price, customPrice, typOfaccesibility).then(data => setActivity(data)), [type, accessibility, price, customPrice, typOfaccesibility])
    }

    const HandleChange = evt => {
        const optionChange = evt.target.value
        if (optionChange.startsWith('type:')) {
            setType(optionChange.replace('type:', ''))
        }
        if (optionChange.startsWith('accessibility:')) {
            setTypeOfAccesibility(optionChange.replace('accessibility:', ''))
        }
        if (evt.target.name === 'accessibility') {
            setAccessibility(evt.target.value)
        }
        if (optionChange.startsWith('price:')) {
            setCustomPrice(optionChange.replace('price:', ''))
        }
        if (evt.target.name === 'price') {
            setPrice(evt.target.value)
        }


    }

    return (

        < div className="main-app" >
            <h1 className="startTitle">You don't know what to do today?</h1>
            <h2 className="startInfo">Don't worry, here's an idea! If you don't like it, change the parameters and try again.</h2>

            <SearchParamsForm HandleChange={HandleChange} HandleSumbit={HandleSumbit} accessibility={accessibility} typOfaccesibility={typOfaccesibility} customPrice={customPrice} price={price}></SearchParamsForm>
            {
                (loading) &&
                <Spinner></Spinner>
            }

            {
                (!activity.error && !loading) &&
                <Activity activity={activity}></Activity>
            }

            {(!loading && activity.error) &&
                <div className="all-activity-data">
                    <h1 className="error">Please change the params</h1>
                </div>
            }

        </div >
    )
}