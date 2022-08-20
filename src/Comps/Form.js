import React from 'react'

function Form() {
  return (
    <form>
        <label>Username
        <input type="text"/>
        </label>

        <label>Password
        <input type="password"/>
        </label>

        <label>Gender
        <input type="radio" name='gender'/>
        <input type="radio" name='gender'/>
        </label>

        <label>I agree to all terms and conditions
        <input type="checkbox"/>
        </label>
        <label>Select a language
         <select>
            <option value="hidden">Select A language</option>
            <optgroup label='beginner'>
            <option value="c">C</option>
            <option value="c">Java</option>
            <option value="c">JS</option>
            <option value="c">Python</option>
            </optgroup>
            <optgroup label='Advanced'>
            <option value="c">React</option>
            <option value="c">Php</option>
            <option value="c">Android</option>
            <option value="c">Flutter</option>
            </optgroup>
         </select>
        </label>
        
    
           
    </form>
  )
}

export default Form
//rfce for functional components