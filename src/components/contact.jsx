import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid >
          <Cell className="contact-grid-cell-left rounded" col={6}>
            <img
              className="rounded"
              src="https://lh3.googleusercontent.com/0U4z7ATpd5yO22hUHYYeP1bSbvOGUQEuHURzSoBaXIH-nUeZQ_e1Xaqlqt5pm_H_ZiTp5jhzfmZYFfQjLmzNBJmYwdINP2iP0ZWznG8M3cdKFkj3cWWzo-2UNblyCqQ4ZIxBJ3hoGYVF08q2mQWVWm7iG5bVvYlIeh6RF2nqYbQYzEgu-4Mc6YcdTMlvzM0w5IE9YH0az8UiMiXP6DXIRMN_ECZjCeNpe7-lfvhwSmhxoyhiQ-PwXz-yHF6BrBjFV2-ubIjFC1GIm4nXHeJHZMcmjz1B4yU8FUsnrcS23k_1RtH4NlOiyPZLJ3YlZ-ne9QwryqFaWFqTi5cnl02js68x3b7mMJu-UiYe696iPjOKBDpXYNsVgaJRG17TPHN2rIiX3XqNR_88hM7X_b5zUMe8MMTlYFL9kI5jhj3UIpyhNPqex5ZKjA28eVsWGQxa7SLM903De-GbW_fAZiga8TUDkkKNoaVMXOyNrlV5Q9sETYqvpWcPGJ4jBL2hv1mu-am9koAepTyR2Ncpqg9ZzQw-jnQoo4M82qGT52qav2yMvtQN_8JE9Yj8w8TdqzdHLqTWgnYxzsGN9qohfNcMvyXozNBIoEay60rUl6WhmHTwSd-OAOLl-ka8vq9Ay1eBcQOBV09KVMUmavEBOoKZvq_uUS23UFMBEMADHTQA_mbeO_OkMY6CKBJac4pwow=w577-h729-no?authuser=0"
              alt="avatar"
              style={{ height: "250px"}}
            />  
            <h2>Kalyan Sai</h2>

            <p style={{ width: "85%", margin: "auto"}}>
            Currently pursuing B.Tech as Computer Science Engineering. With good
            skills in coding including c, c++, python, reactjs, nodejs, and made some
            projects, took the team leader position in every group project, and led my
            team in the right way. Making more connections to build a good network
            as an extrovert. Skills, punctuality, dedication, and hard work are strengths.
            Will keep complete effort to upgrade me on time and make myself ready.
            </p>
          </Cell>
          <Cell className="contact-grid-cell-right rounded" col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+91) 9290045411
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    kalyansai287@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                  <i className="fa fa-linkedin-square" aria-hidden="true" /> linkedin.com/in/kalyan-sai/
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                    facebook.com/kalyan.sai.1422/
                  </ListItemContent>
                </ListItem>
                
              </List>
            </div>
          </Cell>
        </Grid>
        <div style={{textAlign:"center"}}>
          <h6>  Copyrights © reserved by kalyan-sai</h6>
        </div>
      </div>
      
    );
  }
}

export default Contact;
