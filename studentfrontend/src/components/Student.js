import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';


export default function Student() {
    const[name,setName]=React.useState('');
    const[student,setStudent]=useState([]);
    const handleClick=(e) =>{
        e.preventDefault()
        const student={name};
        console.log(student);
        fetch("http://localhost:8080/student/add",
        {method:"POST",
          headers:{"Content-Type":"application/json"},
           body:JSON.stringify(student)
        }).then(() =>{
            console.log("New Student added");
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/get")
        .then(res => res.json())
        .then((result) => {
            setStudent(result);
        })
    },[])


  return (
    <container>
        <h1 style={{color:"blue"}}>Add Student</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Student Name" variant="outlined" 
                value={name}
                onChange={(e)=>setName (e.target.value)}
            />
        </Box>
        <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>

        <h1>Students data</h1>
        <Paper elevation={3}>
        {student.map(student=> ( 
            <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                Id:{student.id}<br></br>
                name:{student.name}
            </Paper>
        ))}
        </Paper>


    </container>
  );
}
