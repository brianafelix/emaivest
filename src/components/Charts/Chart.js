import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot,LineSeries, XAxis ,YAxis, VerticalGridLines,HorizontalGridLines } from 'react-vis';
const Chart=()=> {
const data=[
{ x:0, Y:8 },
{ x:1, Y:5 },
{ x:2, Y:4 },
{ x:3, Y:9 },
{ x:4, Y:1 },
{ x:5, Y:7 },
{ x:6, Y:6 },
{ x:7, Y:3 },
{ x:8, Y:2 },
];
return(
<div className={{marginTop:'15px'}}>
<XYPlot height={300}width={300}> 
 <VerticalGridLines />
 <HorizontalGridLines/>
 <XAxis/>
 <YAxis/>
 <LineSeries data={data} color="red"/>
 <LineSeries data={data} color="yellow"/>
 <LineSeries data={data} color="purlple"/>
</XYPlot>
</div>
)

}
 export default Chart;