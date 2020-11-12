import React,{useState,useEffect} from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Quotes(props){

    const [quote,setQuotes] = useState([]);

    useEffect(() => {


        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            props.getArrayLength(data.length)
            setQuotes(data)
        })

       
       
    },[])

    const color={color : props.color};

    return(
    <div className="quotes" style={color}>
       
       <h2>
            <span className="social-icon" style={color}>
            <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
           
            {quote.length >0 ? quote[props.randomIndex].text : quote}
        </h2>

       <p className="author">-{quote.length >0 ? quote[props.randomIndex].author == null ? "unknown" :  quote[props.randomIndex].author  : quote}</p>
    </div>)



}

export default Quotes;