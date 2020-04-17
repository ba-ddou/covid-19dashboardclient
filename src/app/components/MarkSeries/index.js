import React,{useContext} from 'react';
import "./styles.scss";
import "react-vis/dist/style.css";
import { SeriesContext } from '../../contexts/seriesContext';
import {XYPlot,XAxis,YAxis,VerticalGridLines,HorizontalGridLines,MarkSeries} from "react-vis";


const MarkSeriesComponent= () => {
    const {data} = useContext(SeriesContext);
    const dataArr = data.map(d => {
       return {x: d.year + "/" + d.quarter,
             y: parseFloat(d.count/1000)
    }
});
console.log("array ==> ",dataArr);
    
    return ( 
       <XYPlot height={300} width={800} xType="ordinal">
           <VerticalGridLines/>
           <HorizontalGridLines/>
           <YAxis/>
           <XAxis/>
           <MarkSeries data={dataArr} />
       </XYPlot>
     );
}
 
export default MarkSeriesComponent;