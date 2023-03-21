import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from "axios";
// 'https://dummyjson.com/products'

// whenever this components renders on dom , api should get called once;
// whatever data is provided by api, we will store in state;
// we will manipulate the data to show them on frontend.
export default function Card() {
  let [data, setData] = useState([]);

  useEffect(() => {
    let fetchdata = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        // console.log(response.data);
        // console.log(response.data.products);
        setData(response.data.products)
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata()
  }, [])

  console.log(data);
  return (
    <div class="container">

      {
        data.length && data.map((ele) => (

          < div class="card" key={ele.id}>
            <div class="image-card">
              <img src={ele.thumbnail} alt={ele.title} />
            </div>
            <div class="card-content">
              <span>{ele.title}</span>
            </div>
          </div>
        ))



      }
    </div>
  )
}
