import "./Desktop.css"

const Desktop = () => {
    return (
      <div className="desktop-2">
        <img
          className="img-1188-2-icon"
          alt=""
          src="IMG_1188.jpg"
        />
        <div className="desktop-2-child">
        <h2 className="hi-im-reneca-container">
          <span>{`Hi! I’m ` }</span>
          <b>Reneca Capuno</b>
          <span> :)</span>
        </h2>
        </div>
        
        <a href="https://www.linkedin.com/in/renecacapuno/" target="_blank" rel="noopener noreferrer">
          <img className="linkedin-icon" loading="lazy" alt="LinkedIn" src="./icons/Linkedin.svg" />
        </a>
        <a href="Reneca_Capuno_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <img className="resume-1-icon" loading="lazy" alt="Resume" src="./icons/resumeIcon.svg" />
        </a>
        <a href="https://github.com/rencap12" target="_blank" rel="noopener noreferrer">
          <img className="github-icon" loading="lazy" alt="GitHub" src="./icons/Github.svg" />
        </a>

        <section className="desktop-2-item" />
        <div className="im-a-senior-container">
          <p className="im-a-senior-studying-cs-at-th">
            <span>
              <span>I’m a Senior studying CS at the </span>
            </span>
          </p>
          <p className="university-of-florida-and-an">
            <span>
              <span className="university">University </span>
              <span className="span">{ }</span>
              <span className="of-florida">of Florida</span>
            </span>
            <span>
              <span>{` and an `}</span>
            </span>
          </p>
          <p className="aspiring-software-engineer">
            <span>
              <span>{`aspiring ` }</span>
              <b className="software-engineer">software engineer</b>
              <span>!</span>
            </span>
          </p>
          <p className="blank-line">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="feel-free-to-explore-my-portfo">
            <span>
              <span>Feel free to explore my portfolio</span>
            </span>
          </p>
          <p className="and-lets-connect">
            <span>
              <span>and let’s connect!</span>
            </span>
          </p>
        </div>
        <section className="check-out-my-container">
          <span className="check-out-my-container1">
            <p className="check-out-my-projects">
              <span className="check-out-my-projects1">
                <span>Check out my projects!</span>
              </span>
            </p>
          </span>
        </section>
        <section className="projects">
          <div className="project-titles">
           <a href="https://github.com/rencap12/Projects/tree/main/project1_resub" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="AVL Tree" src="./project_pic/avl-tree_balnce2.png" />
              <div className="text_below_pic">AVL Tree</div>
          </a>
          </div>
          <div className="project-titles">
           <a href="https://github.com/rencap12/Projects/tree/main/minesweeper" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="Minesweeper" src="./project_pic/Minesweeper.jpeg" />
              <div className="text_below_pic">Minesweeper</div>
          </a>
          </div>
          <div className="project-titles">
          <a href="https://github.com/rencap12/Projects/tree/main/project2_pageRank" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="Page Rank" src="./project_pic/pagrankpic.jpg" />
              <div className="text_below_pic">Page Rank</div>
          </a>
          </div>
          <div className="project-titles">
          <a href="https://github.com/rencap12/Emerald-Project-20-3g-rc" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="CASMM" src="./project_pic/casmm.png" />
              <div className="text_below_pic">CASMM - Workspace</div>
          </a>
          </div>
          <div className="project-titles">
          <a href="https://github.com/rencap12/itis-nature-nexus-backend" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="Nature Nexus" src="./project_pic/nature-nexus-logo.png" />
              <div className="text_below_pic">Nature Nexus</div>
         </a>
         </div>
          <div className="project-titles">
          <a href="https://github.com/rencap12/Dog-Tinder" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="Dog Tinder" src="./project_pic/dogTinder.png" />
              <div className="text_below_pic">Dog Tinder</div>
          </a>
          </div>
          <div className="project-titles">
          <a href="https://github.com/rencap12/WEB102-Whale_Hub" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="Whale Hub" src="./project_pic/cute_whale.jpg" />
              <div className="text_below_pic">Whale Hub</div>
          </a>
          </div>
          <div className="project-titles">
          <a href="https://github.com/rencap12/AND101-Pokemon-Display" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" alt="Tap! Pokémon!" src="./project_pic/pokeball.png" />
              <div className="text_below_pic">Tap! Pokémon!</div>
          </a>
          </div>
        </section>
      </div>
    );
  };
  export default Desktop;