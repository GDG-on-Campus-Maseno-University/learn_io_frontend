import React from "react";
const profile =[
    {name:"cliff", age:"23"},
    {name:"cliff", age:"23"},
    {name:"cliff", age:"23"},
    {name:"cliff", age:"23"},
];

const userdata={
    name:"cliff",
    age:"45",
    email:"email"


}

    function Profile(){
        return(
            <>
              <div>
                <h1>Data</h1>
                <ul>
                    {Object.entries(userdata).map(([key,value])=>
                    <p index={key}>{value}</p>)}
                </ul>
              </div>
            </>
        )
    }

export default Profile;