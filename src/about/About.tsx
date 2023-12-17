import { colors } from '@mui/material';
import '../about/Style.css';


export const About:React.FC<{}>=()=>{
    return<>
    <div className='di'>
    <span className="h1">About </span>
    <span className="h2">Me</span>
    
    </div>
    <div className='total'>
    <div className='d2'>
        <h3 style={{color:'yellow'}} className='h3'>Name:</h3>
        <h3 style={{color:'white'}} className='h4'> Pavan Kumar</h3>
        </div >
        <div className='d3'>
        <h3 style={{color:'yellow'}} className='h5'>Age:</h3>
        <h3 style={{color:'white'}} className='h6'> 23</h3>
        </div>
        <div className='d4'>
        <h3 style={{color:'yellow'}}>Qualification:</h3>
        <h3 style={{color:'white'}}> Bca</h3>

        </div>
        <div className='d5'>
        <h3 style={{color:'yellow'}}>Language:</h3>
        <h3 style={{color:'white'}}> Kannada,English,Tamil,Telugu </h3>

        </div>
       
      
        </div>




    
    </>


}