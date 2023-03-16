import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Content.css'
const Content = () => {
    const States = [
        'Agra Restaurants',
        'Ahmedabad Restaurants',
        'Ajmer Restaurants',
        'Alappuzha Restaurants',
        'Allahabad Restaurants',
        'Amravati Restaurants',
        'Amritsar Restaurants',
        'Aurangabad Restaurants',
        'Bengaluru Restaurants',
        'Bhopal Restaurants',
        'Bhubaneswar Restaurants',
        'Chandigarh Restaurants',
        'Chennai Restaurants',
        'Coimbatore Restaurants',
        'Cuttack Restaurants',
        'Darjeeling Restaurants',
        'Dehradun Restaurants',
        'Delhi NCR Restaurants',
        'Dharamshala Restaurants',
        'Gangtok Restaurants',
        'Goa Restaurants',
        'Gorakhpur Restaurants',
        'Guntur Restaurants',
        'Guwahati Restaurants',
        'Gwalior Restaurants',
        'Haridwar Restaurants',
        'Hyderabad Restaurants',
        'Indore Restaurants',
        'Jabalpur Restaurants',
        'Jaipur Restaurants',
        'Jalandhar Restaurants',
        'Jammu Restaurants',
        'Jamnagar Restaurants',
        'Jamshedpur Restaurants',
        'Jhansi Restaurants',
        'Jodhpur Restaurants',
        'Junagadh Restaurants',
        'Kanpur Restaurants',
        'Khajuraho Restaurants',
        'Khamgaon Restaurants',
        'Kharagpur Restaurants',
        'Kochi Restaurants',
        'Kolhapur Restaurants',
        'Kolkata Restaurants',
        'Kota Restaurants',
        'Lucknow Restaurants',
        'Ludhiana Restaurants',
        'Madurai Restaurants',
        'Manali Restaurants',
        'Mangalore Restaurants',
        'Manipal Restaurants',
        'Meerut Restaurants',
        'Mumbai Restaurants',
        'Mussoorie Restaurants',
        'Mysore Restaurants',
        'Nagpur Restaurants',
        'Nainital Restaurants',
        'Nashik Restaurants',
        'Neemrana Restaurants',
        'Ooty Restaurants',
        'Palakkad Restaurants',
        'Patiala Restaurants',
        'Patna Restaurants',
        'Puducherry Restaurants',
        'Pune Restaurants',
        'Pushkar Restaurants',
        'Raipur Restaurants',
        'Rajkot Restaurants',
        'Ranchi Restaurants',
        'Rishikesh Restaurants',
        'Salem Restaurants',
        'Shimla Restaurants',
        'Siliguri Restaurants',
        'Srinagar Restaurants',
        'Surat Restaurants',
        'Thrissur Restaurants',
        'Tirupati Restaurants',
        'Trichy Restaurants',
        'Trivandrum Restaurants',
        'Udaipur Restaurants',
        'Vadodara Restaurants',
        'Varanasi Restaurants',
        'Vellore Restaurants',
        'Vijayawada Restaurants',
        'Visakhapatnam Restaurants'
    ]
    const Countries = [
        { name: "India", img: "https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" },
        { name: "Australia", img: "https://b.zmtcdn.com/images/flags_z10/au.png?output-format=webp" },
        { name: "Brasil", img: "https://b.zmtcdn.com/images/flags_z10/br.png?output-format=webp" },
        { name: "Canada", img: "https://b.zmtcdn.com/images/flags_z10/ca.png?output-format=webp" },
        { name: "Chile", img: "https://b.zmtcdn.com/images/flags_z10/cl.png?output-format=webp" },
        { name: "Indonesia", img: "https://b.zmtcdn.com/images/flags_z10/id.png?output-format=webp" },
        { name: "Ireland", img: "https://b.zmtcdn.com/images/flags_z10/ie.png?output-format=webp" },
        { name: "Italy", img: "https://b.zmtcdn.com/images/flags_z10/it.png?output-format=webp" },
        { name: "Lebanon", img: "https://b.zmtcdn.com/images/flags_z10/lb.png?output-format=webp" },
        { name: "Malaysia", img: "https://b.zmtcdn.com/images/flags_z10/my.png?output-format=webp" },
        { name: "Czech Republic", img: "https://b.zmtcdn.com/images/flags_z10/cz.png?output-format=webp" },
        { name: "New Zealand", img: "https://b.zmtcdn.com/images/flags_z10/nz.png?output-format=webp" },
        { name: "Philippines", img: "https://b.zmtcdn.com/images/flags_z10/ph.png?output-format=webp" },
        { name: "Poland", img: "https://b.zmtcdn.com/images/flags_z10/pl.png?output-format=webp" },
        { name: "Portugal", img: "https://b.zmtcdn.com/images/flags_z10/pt.png?output-format=webp" },
        { name: "Qatar", img: "https://b.zmtcdn.com/images/flags_z10/qa.png?output-format=webp" },
        { name: "Singapore", img: "https://b.zmtcdn.com/images/flags_z10/sg.png?output-format=webp" },
        { name: "Slovakia", img: "https://b.zmtcdn.com/images/flags_z10/sk.png?output-format=webp" },
        { name: "South Africa", img: "https://b.zmtcdn.com/images/flags_z10/za.png?output-format=webp" },
        { name: "Sri Lanka", img: "https://b.zmtcdn.com/images/flags_z10/lk.png?output-format=webp" },
        { name: "Turkey", img: "https://b.zmtcdn.com/images/flags_z10/tr.png?output-format=webp" },
        { name: "UAE", img: "https://b.zmtcdn.com/images/flags_z10/ae.png?output-format=webp" },
        { name: "United Kingdom", img: "https://b.zmtcdn.com/images/flags_z10/gb.png?output-format=webp" },
        { name: "United States", img: "https://b.zmtcdn.com/images/flags_z10/us.png?output-format=webp" },

    ]
    return (
        <>
            <div className="main">

                <div className="topHeading">
                    <h1>Popular locations in
                        <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" alt="" srcset="" />
                        <b>India</b></h1>
                    <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
                </div>
            </div>
            <div className="stateCards">
                {States.map((e, i) => {
                    return (

                        <div key={i} className="cards">
                            <p>{e}</p>
                            <ArrowForwardIosIcon />
                        </div>
                    )
                })}
            </div>
            <div className="country">
                <h1>All Countries</h1>
            </div>
            <div className="countryDetails">

                {Countries.map((e, i) => {
                    console.log(e)
                    return (

                        <div key={i} className="countryCards">
                            <div className="details">
                                <img src={e.img} alt="" />
                                <p>{e.name}</p>
                            </div>
                            <div className="arrow">
                                <ArrowForwardIosIcon />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Content