import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               I am currently a Full Stack Developer at a startup called DOC24 and studying a degree in Systems Engineering at the Universidad Tecnologica Nacional (UTN).<br></br><br></br>
               I have experience in JavaScript, TypeScript, Node, Express, React, Redux, Material UI, Bootstrap, Next.js, PostgreSQL, MongoDB, HTML and CSS.<br></br><br></br>
               I am a quick learner and I am always looking to improve my skills.<br></br><br></br>
               In my free time I am a coffee lover, a cat lover and I like to work on personal projects, participate in hackathons and attend meetings and conferences.
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}