import React, {useState,useEffect} from 'react';
import NameListItem from './NameListItem';


function NameList(){
    const [loadData,setLoadData] =useState(new Date());
    const [nameList,setNameList]=useState([
        {   id:1,
            name: {title: 'Mr',first: 'brad',last: 'gibson',},
            location: {city: 'kilcoole',},
            email: 'brad.gibson@example.com',
            dob: {date: '1993-07-20T09:44:18.674Z',
                age: 26,},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',},
        },
        {   id:2,
            name: {title: 'Mr',first: 'brad',last: 'gibson',},
            location: {city: 'kilcoole',},
            email: 'brad.gibson@example.com',
            dob: {date: '1993-07-20T09:44:18.674Z',
                age: 26,},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/71.jpg',},
        },
        {   id:3,
            name: {title: 'Mr',first: 'brad',last: 'gibson',},
            location: {city: 'kilcoole',},
            email: 'brad.gibson@example.com',
            dob: {date: '1993-07-20T09:44:18.674Z',
                age: 36,},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/74.jpg',},
        },
        {   id:4,
            name: {title: 'Mr',first: 'Mahesh',last: 'Perera',},
            location: {city: 'Maharagama',},
            email: 'nisan@bobbi.lk',
            dob: {date: '1984-11-17T09:44:18.674Z',
                age: 25,},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/70.jpg',},
        },
        {   id:5,
            name: {title: 'Mis',first: 'Samanthi',last: 'Jeesmy',},
            location: {city: 'Matara',},
            email: 'Samanthi@bobbi.lk',
            dob: {date: '1981-10-17T09:44:18.674Z',
                age: 21,},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/70.jpg',},
        },
        
    ]);

    useEffect(()=>{
       fetch("https://randomuser.me/api").then((response) => {
                return response.json()
       }).then(responseData => {
           setNameList((nameList)=> [...nameList,responseData.results[0]])
       })
    },[loadData])

    //const nameList = ;
    
    const nameListComponats =()=>{
       return(
           nameList.map(aName=>{
               return(
                <NameListItem 
                key={aName.id}
                name = {`${aName.name.title} ${aName.name.first} ${aName.name.last}`} 
                location = {aName.location.city}
                email= {aName.email} 
                birthday=  {aName.dob.date}
                avatar = {aName.picture.medium}
                />
               )
           })
        
       ) 
    }
    const addUserHandler =()=>{
        //const [myId] = useState(_uniqueId('prefix-'));
        // const newUser={   
        //     id: new Date(),
        //     name: {title: 'Mr',first: 'Ananda',last: 'Yapa',},
        //     location: {city: 'Matara',},
        //     email: 'Samanthi@bobbi.lk',
        //     dob: {date: '1971-10-17T09:44:18.674Z',
        //     age: 21,},
        //     picture: {medium: 'https://randomuser.me/api/portraits/med/men/20.jpg',},
        // }
       
        // //setNameList(nameList => nameList.concat(newUser))

        // // sperd operation
        // setNameList([...nameList,newUser])
        setLoadData(new Date())
    }

    return (
        <React.Fragment>
            {/* <h1>Name List</h1> */}
            
            <div className ="container mt-2">
                <button type="button" class="btn btn-primary mb-2" onClick ={addUserHandler}>
                    Add Employee
                </button>
                    <ul className = "list-group">
                        {nameListComponats()}
                    </ul>
            </div>
        </React.Fragment>
       )
}

export default NameList