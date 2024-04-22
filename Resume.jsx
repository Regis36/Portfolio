import React from 'react';
import "../CSS/styles.css"

 export default function Resume() {
   
    return(
        <> 
        <h1> Regis's Resume</h1>
        <h3> New York, NY | 917-769-9184 | Regis.Enama@Gmail.com | <a href = "https://www.linkedin.com/in/regis-enama-a6b99a1a6/"></a> LinkedIn</h3>
        
        <div className='Skills'>
           <u><h2> SKILLS</h2></u>
            <ul>
                <li> <b>Languages:</b>Fluent in French and in English</li>
                <li> <b>Programming Languages:</b> C++, HTML/CSS, JSX, SQL, Python</li>
                <li> <b>Frameworks /Systems:</b> React, NodeJS, Git, Pandas, Matplotlib, UIKit, Postgresql</li>
                <li> <b>Microsoft:</b> Excel, Word, Powerpoint</li>
            </ul>
        </div>

        <div className='Education'>
            <u><h2> EDUCATION</h2></u>
            <ul>
                <li><b>CUNY Hunter College</b> <em>Major: Computer Science</em> | <em>Minor: Human Rights</em> | 2.85 GPA</li>
                <li><b>Relevant Coursework:</b> Web Development, Data Strucures and Algorithms, Computer Theory, Discrete Structures, Relational Databases, Data Mining</li>
                <li><b>Awards:</b> CUNYAC First Team AllStar: (2018,2021,2022) , CUNYAC Second Team Allstar (2019), Mens Soccer MVP(2021, 2022) </li>
            </ul>
        </div>
        
        <div className='Experience'>
            <u><h2> EXPERIENCE</h2></u> 
            <p><u>Internet Society|</u><i>Fellow</i></p>
                <ul>
                    <li> Participated in the IGF fellowship program for internet governae as a second round candidate out of 3 </li>
                    <li> Worked and collaborated alongside other applicants in order to grasp complex internet governance topics</li>
                </ul>
            <p><u>United Sikhs |</u><i>Intern</i></p>
                <ul>
                    <li>Integrated knowledge of computer science algorithms and human rights by aiding in research intencded to build a case against the data mining algorithms used by social media giants </li>
                    <li>Conducted heavy research on topics such as freedom of speech and the right to internet access </li>
                    <li> Promoted regional and international company influence through aiding in the writing of press release statements</li>
                </ul>

            <p><u>Gouverneur Hospital |</u><i>Intern</i></p>
                <ul>
                    <li>Workded alongside professional physical therapists to aid in the physical rehabilitation of stroke patients</li>
                    <li>Handled and organized the filing and proper documentation of important confidential company files </li>
                    <li>Collaborated with the media and public relations team in order to spread awarness of hospital community lead events throughtout the community</li>
                </ul>

            <p><u>Ronald McDonald House |</u><i>Volunteer</i></p>
                <ul>
                    <li>Improved the overall health and sanitation of the institution by completing household chores </li>
                    <li>Aided the overall organization of the house by collecting and storing important inventory data</li>
                    <li>Maintained overall morale of ill children by finding ways to entertain them</li>
                </ul>
            <p><u>La Palapa |</u><i>Busboy| Server</i></p>
                <ul> 
                    <li> Maintained compliance with company policies and procedures for food safety, sanitation, and quality</li>
                    <li> Replenished condiments, beverages, and supplies while maintaining cleanliness of service areas</li>
                    <li> Collaborated with waiters and kitchen staff to gurantee an excellent dinining experience</li>
                    <li> Assisted customers with questions or concerns in a polite and couteous professional manner</li>
                </ul>
    
        </div>

        <div className='Leadership'>
            <u><h2> LEADERSHIP</h2></u>
            <p><u>Run4Fun USA |</u><i>Head Coach</i></p>
            <p><u>Student Athlete Advisory Committee |</u><i>Chair of Public Relations</i></p>
                <ul>
                    <li>Helped in the promotion of Hunter athletics and Hunter Athletic events through actively creating flyers in a timely fashion</li>
                    <li>Worked closely with the social media team in order to promote weekly SAAC challenges</li>
                    <li> Responsible for regulating a healthy relationship between student athletes and non student athletes</li>
                    <li>Organized with other SAAC team members in order to actively integrate Athletics into student life </li>
                </ul>
            
            
            <p><u>Roosevelt Island River FC|</u><i>Head Coach</i></p>

        </div> 
        </>
    ) 
}