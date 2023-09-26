import axios from "axios"

export function requisition(setData){
    axios.get('src/data.json')
    .then((response) => {
        const data = response.data
        setData(data)
    })
    .catch((err) => console.log(err))    
}