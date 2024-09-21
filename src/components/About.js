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
               <strong>Passionate and driven</strong> to deliver user-focused web solutions. I like balancing technical expertise with a strong human touch.<br></br><br></br>
               <strong>Experienced in web development and AI tools</strong>, I adapt quickly to new challenges and seamlessly integrate into any team environment.<br></br><br></br>
               <strong>Empathetic and a strong team player</strong>, I aim to foster positive relationships and contribute to a harmonious workspace.<br></br><br></br>
               Outside of work, I enjoy taekwondo, going to the gym, and learning new languages.<br></br><br></br>
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact</h2>
                  <p className="address">
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