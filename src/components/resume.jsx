import React, { Component } from 'react';
import { Grid, Cell, CardMenu, IconButton} from 'react-mdl';
import Education from './education';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
          <CardMenu style={{color: '#fff', padding:'20px'}}>
              <IconButton name="share" href="https://drive.google.com/drive/folders/1e0ZBYtj-WR2ayndEt5qVTPLnpnI161Gl?usp=sharing"/>
          </CardMenu>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://lh3.googleusercontent.com/jawDLL8HwyNye-BGRjywGn0WK7v8jx8cnlLJK0MtuGUNo8x4E_34UUA6CPsZksADdrtOr_IwWXYqz01Kn_lwapqbr2dHz91QMrQEnMELXdAsjgXt_ekqZGvnn85TmCVN2Hr-jT0F1xeAX8jr1sAQlZ4jYDrOUPeNMWSYlaaHywJYJxxHHjOIHZ8sEYm1WLsTxjdhMydrhpEkLl_z-8nzxJ_zBfxu_DVoAt5FaI3eG_2Gq-rZ6eQ-Y4NwjRJjfnpjrVDhV4pY3RYDNg0JLpdG2w2wvood5uHpCo_Yd3rHiws0B3OUtIEzoYmt4eIJgO153EQTWRxduV1JMdzg_p-gcZdjFZbgb2nnkJ9NF8Z-N74xm_O3HoXNZMvG-OhJoP3h9sSJIaYaqd-Rsdo2DlHuEfIRg9CliYkqk02K3EGYC6wVmtI3D8GT5B6D6tBIST5I8vU09vvA-m_oZ22kqf4Q3mbubyJivF70_1N23u9EncvTjaMd48QSTB23VzDytPwPlXrcAFgTY8DHPBvuM-qQOB8H2H2JNySVBmsvaL6Yjnd8iKFWZ6SN52N3o5avZcVXjShYic4K4j7v04H7BHMZ67x9MHLddwBvJ7KV90RwxaxpU-GbOoF2IFX8XJkHet8-jsLAVXcB79DK3Nq6z5ohoUFkQzNGnmNcd0ZxRnuZeLg0qHQbrUksAWo617ztRQ=w174-h220-no?authuser=0"
                alt="avatar"
                className="rounded-circle"
                style={{height: '200px',width:'150px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0.5em'}}>Kalyan Sai</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
            Currently pursuing B.Tech as Computer Science Engineering. With good
            skills in coding including c, c++, python, reactjs, nodejs, and made some
            projects, took the team leader position in every group project, and led my
            team in the right way. Making more connections to build a good network
            as an extrovert. Skills, punctuality, dedication, and hard work are strengths.
            Will keep complete effort to upgrade me on time and make myself ready.
            </p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <h5>Address</h5>
            <p>Vijayawada, Andhrapradesh, India - 520001</p>
            <h5>Phone</h5>
            <p>(+91) 9290045411</p>
            <h5>Email</h5>
            <p>kalyansai287@gmail.com</p>
            <h5>GitHub</h5>
            <p>github.com/kalyan287</p>
            <h5>LinkedIn</h5>
            <p>linkedin.com/in/kalyan-sai/</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <hr style={{borderTop: '1px solid #ffff'}} />

            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Lovely Professional University"
              schoolDescription="B.Tech Computer Science & Engineering with 7.39 CGPA"
               />
               <hr style={{borderTop: '1px solid #e22947'}} />
               <Education
                 startYear={2015}
                 endYear={2017}
                 schoolName="Saradha Educational Institutions"
                 schoolDescription="Completed my intermediate with 93.6%"
                  />
                <hr style={{borderTop: '1px solid #e22947'}} />

                <Education
                 startYear={2015}
                 endYear={2017}
                 schoolName="BRR Arunodhaya HIGH SCHOOL"
                 schoolDescription="Completed my Schooling with 8.5 CGPA "
                  />
            
            <h2>Certification</h2>
            <hr style={{borderTop: '1px solid #ffff'}} />

            <h5 style={{textAlign:"center", padding:"10px"}}><strong>ReactJS by CipherSchools</strong></h5>
            
            <hr style={{borderTop: '1px solid #e22947'}} />

            <h5 style={{textAlign:"center", padding:"10px"}}><strong>Programming with Python by Internshala</strong></h5>
            
            <hr style={{borderTop: '1px solid #e22947'}} />

            <h5 style={{textAlign:"center", padding:"10px"}}><strong>NoedJS by Splen Technologies</strong></h5>
            
          </Cell>
        </Grid>
        <div style={{textAlign:"center"}}>
          <h6>  Copyrights © reserved by kalyan-sai</h6>
        </div>
      </div>
    )
  }
}

export default Resume;