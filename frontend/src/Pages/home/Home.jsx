import React from 'react'

const Home = () => {
  return (
    <>
    <div className='home'>Hi guys! We are happy to present the best budget app out there, which we designed for the second fullstack Javascript Hackathon.
      We used our expertise knowledge of React.js, Node.js and DataBases, to reveal our skills.
      The main functions include a login and register form which sends the userdata to our database for validation.
      Once the user is logged in, he/she/they can use the budget app to track his/hers/their monthly spendings
      by categorizing expenses.
      We hope you like it!</div>
      <p className='ourimg'>
        <img src='/images/den.JPG' alt="Me" />
        <img src='/images/Lauren.JPEG' alt="Lauren" />
      </p>
    </>
  )
}

export default Home