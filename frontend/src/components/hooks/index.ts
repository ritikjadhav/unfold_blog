import axios from 'axios'
import { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../config'

export const getBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                setBlogs(response.data.blogs)
                setLoading(false)
            })
    }, [])

    return {
        loading,
        blogs
    }
}