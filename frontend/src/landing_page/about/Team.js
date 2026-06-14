import React from 'react';

function Team() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img src='media/images/Neeraj2.png' style={{borderRadius:"100%",width:"60%"}}></img>
          <h4 className='mt-5'>Sai Neeraj Mothukuri</h4>
          <h6 className='mt-3'>Full Stack Developer</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Sai Neeraj is a passionate full-stack web developer and Computer Science student with a strong interest in building modern web applications. Through projects like this Zerodha Clone, he continuously explores technologies such as React, Node.js, Express, and MongoDB to create scalable and user-friendly solutions.
          </p>

          <p>
            He enjoys solving real-world problems through code and is constantly improving his skills in software development, system design, and web technologies.
          </p>

          <p>
            Beyond programming, he believes in continuous learning, consistency, and building projects that create practical value.
          </p>

          <p>Connect on <a href='https://www.linkedin.com/in/sai-neeraj-807038350/' style={{textDecoration:"none"}}>LinkedIn</a> / <a href='https://github.com/Sai-Neeraj-1704' style={{textDecoration:"none"}}>GitHub</a></p>
        </div>
      </div>
    </div>
     );
}

export default Team;