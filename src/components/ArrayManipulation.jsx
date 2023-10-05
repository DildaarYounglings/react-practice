import React, { useState } from 'react'

export const ArrayManipulation = () => {
    const [arrayOfStrings,setArrayOfStrings] = useState(["hello","hi","bye","start","end","creation","destruction","life","death","potential","love","ambition"]);
  return (
    <div>
        <h2>Array Manipulation</h2>
        <ul>
            <li style={{backgroundColor:"beige"}}>
                <h3>array filter method</h3>
                <h4>
                    This method filters an array based on the boolean condition passed as the return of the function like such
                </h4>
                <p style={{backgroundColor:"cyan",color:"blue"}}>arrayOfStrings.filter((x =&gt; x === "life"))</p>
                <p>The result is as what is writen below such. due to the function returning an a new filtered array back to you. Store in a variable to use later.</p>
                <pre style={{color:"blue"}}>[ "{arrayOfStrings.filter((x => x === "life"))}" ]</pre>
                <p style={{backgroundColor:"cyan",color:"blue"}}>arrayOfStrings.filter((x =&gt; x !== "life"))</p>
                <p>
                    The result is as what is writen below such due to the function returning an a new filtered array back to you.<br/>
                    Store in a variable to use later.<br/>
                    if you look at this array below you will see that a string has been excluded and the others are kept
                </p>
                <pre style={{color:"blue"}}>[ "{arrayOfStrings.filter((x => x !== "life")).join("\" , \"")}" ]</pre>
                <p>
                    This method has good use for accessing items or creating search features in apps
                </p>
            </li>
            <li style={{backgroundColor:"beige"}}>
                <h3>array includes method</h3>
                <h4>
                    This method returns a boolean response and checks an array or string if it has the word or character you are looking for
                </h4>
                <p style={{backgroundColor:"cyan",color:"blue"}}>arrayOfStrings.includes("life")</p>
                <p>The result is as what is writen below such. due to the function returning a boolean back to you. Store in a variable to use later.</p>
                <pre style={{color:"blue"}}>{arrayOfStrings.includes("life")? "true": "false"}</pre>
            </li>
            <li style={{backgroundColor:"beige"}}>
                <h3>spread operator</h3>
                <h4>
                    This operator copies all contents of what is inside an array or object
                </h4>
                <p style={{backgroundColor:"cyan",color:"blue"}}>
                    {"[ ...variableName ] or { ...variableName }"}<br/>
                    {"{ ...variableName,objProperty: \"name\" } is used to add a new property to the object with all the properties of the previous copied object."}<br/>
                    {"if you add the same property name that exists in the copied object the new property will replace the old."}<br/>
                    {"an array is different as this [ objectArrayOrString , ...variableName ] will add to start of array a new value with all copied content and"}<br/>
                    {"this [ ...variableName , objectArrayOrString ] will add a new value at end of array with all copied conten."}
                </p>
                <p>The result is a object or array with data from previous array or object. Which is either modified or normal</p>
            </li>
            <li style={{backgroundColor:"beige"}}>
                <h3>array map method</h3>
                <h4>
                    This method returns a new array.
                </h4>
                <p style={{backgroundColor:"cyan",color:"blue"}}>arrayOfStrings.map(x =&gt; {"<p> x </p>"})</p>
                <p>The result is as what is writen below such. due to the function returning either the array itself or a modified version of it . Store in a variable to use later. in React js it is used to display all data in array as jsx or html to view on the page</p>
                <pre style={{color:"blue"}}>[ {arrayOfStrings.map(x => `"${x}"`).join(" , ")} ]</pre>
                <p style={{color:"blue"}}>{arrayOfStrings.map(x => `<span>${x}</span>`)}</p>
            </li>
        </ul>
    </div>
  )}
