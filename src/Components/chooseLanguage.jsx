import React from 'react'

const ChooseLanguage = () => {
  return (
    <div class="main">
    <img class="police__img" src="./images/Logo.png" alt=""/>
    <span class="police__heading">GUJARAT POLICE</span>
    <span class="police__feedback">(FEEDBACK PORTAL)</span>


    <span class="lang__heading">SELECT LANGUAGE</span>

    <form action="">
        <div> <input type="radio" id="English" name="age" value="English"/>
            <label for="English">English</label>
        </div>
        <div>
            <input type="radio" id="hindi" name="age" value="hindi"/>
            <label for="hindi"> हिन्दी</label>
        </div>

        <div>
            <input type="radio" id="gujarati" name="age" value="gujarati"/>
            <label for="gujarati">ગુજરાતી</label>
        </div>

    </form>

    <div class="police_btn"><button class="police_btn1">NEXT</button></div>
    </div>

  )
}

export default ChooseLanguage