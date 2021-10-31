import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { API_URL } from '../../config';

const Home = () => {

    const [posts,setPosts]=useState([])
    

    const showPosts=async()=> {
        try {
            const response = await axios.get(`${API_URL}/attractions`)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }       
    }


    useEffect(() => {
        axios.get()
    }, [])


    return (
        <div>
            
        </div>
    );
};

export default Home;