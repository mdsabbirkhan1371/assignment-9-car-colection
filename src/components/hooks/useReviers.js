import { useEffect, useState } from "react"

const useReviewer = () => {

    const [reviewers, setreviwers] = useState([])
    useEffect(() => {
        const url = 'reviewer.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setreviwers(data))
    }, [])
    return [reviewers, setreviwers]
}

export default useReviewer;