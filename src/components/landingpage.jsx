import React, { Component } from "react";
import { Grid,Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
    <div>
      <div className="landing-grid align-text-center" >
        <Grid >
          <Cell col={12}>
            <div style={{marginBottom:"10px"}}>
              <img
                className="rounded-circle"
                src="https://lh3.googleusercontent.com/jawDLL8HwyNye-BGRjywGn0WK7v8jx8cnlLJK0MtuGUNo8x4E_34UUA6CPsZksADdrtOr_IwWXYqz01Kn_lwapqbr2dHz91QMrQEnMELXdAsjgXt_ekqZGvnn85TmCVN2Hr-jT0F1xeAX8jr1sAQlZ4jYDrOUPeNMWSYlaaHywJYJxxHHjOIHZ8sEYm1WLsTxjdhMydrhpEkLl_z-8nzxJ_zBfxu_DVoAt5FaI3eG_2Gq-rZ6eQ-Y4NwjRJjfnpjrVDhV4pY3RYDNg0JLpdG2w2wvood5uHpCo_Yd3rHiws0B3OUtIEzoYmt4eIJgO153EQTWRxduV1JMdzg_p-gcZdjFZbgb2nnkJ9NF8Z-N74xm_O3HoXNZMvG-OhJoP3h9sSJIaYaqd-Rsdo2DlHuEfIRg9CliYkqk02K3EGYC6wVmtI3D8GT5B6D6tBIST5I8vU09vvA-m_oZ22kqf4Q3mbubyJivF70_1N23u9EncvTjaMd48QSTB23VzDytPwPlXrcAFgTY8DHPBvuM-qQOB8H2H2JNySVBmsvaL6Yjnd8iKFWZ6SN52N3o5avZcVXjShYic4K4j7v04H7BHMZ67x9MHLddwBvJ7KV90RwxaxpU-GbOoF2IFX8XJkHet8-jsLAVXcB79DK3Nq6z5ohoUFkQzNGnmNcd0ZxRnuZeLg0qHQbrUksAWo617ztRQ=w174-h220-no?authuser=0"
                alt="avatar"
              />
            </div>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

            <p>ReactJS | NodeJS | Python | HTML/CSS/JS | C | C++ | SQL</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/kalyan-sai/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              <a href="https://twitter.com/kalyans84706071" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter-square" aria-hidden="true"/>
              </a>
              <a href="https://github.com/kalyan287" rel="noopener">
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
              <a href="https://www.facebook.com/kalyan.sai.1422/" rel="noopener">
                <i className="fa fa-facebook-square" aria-hidden="true"/>
              </a>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
      <div style={{textAlign:"center"}}>
        <h6>  Copyrights © reserved by kalyan-sai</h6>
      </div>
    </div>
    );
  }
}

export default Landing;
