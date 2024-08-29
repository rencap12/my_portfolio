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
        <img
          className="linkedin-icon"
          loading="lazy"
          alt=""
          src="./icons/Linkedin.svg"
        />
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
            {/* <p className="hint-drag-or-">
              <span className="span1">
                <span>(</span>
              </span>
              <span>
                <i className="hint-drag-">{`hint... drag <- or ->)`}</i>
              </span>
            </p> */}
          </span>
        </section>
        <section className="projects">
          <div className="project-titles">
            <img
            // className="minesweeper-1-icon"
            // loading="lazy"
            // alt=""
            src="./project_pic/avl-tree_balnce2.png"
            />
            <div className="text_below_pic">AVL Tree</div>
           </div>
          <div className="project-titles">
            <img
              className="minesweeper-1-icon"
              loading="lazy"
              alt=""
              src="./project_pic/Minesweeper.jpeg"
            />
            <div className="text_below_pic">Minesweeper</div>
          </div>
          <div className="project-titles">
            <img
              className="pagrankpic-1-icon"
              loading="lazy"
              alt=""
              src="./project_pic/pagrankpic.jpg"
            />
            <div className="text_below_pic">Page Rank</div>
          </div>
          <div className="project-titles">
            <img
              className="casmm-1-icon"
              loading="lazy"
              alt=""
              src="./project_pic/casmm.png"
            />
            <div className="text_below_pic">CASMM - Workspace</div>
          </div>
          <div className="project-titles">
            <img
              className="nature-nexus-logo-1"
              loading="lazy"
              alt=""
              src="./project_pic/nature-nexus-logo.png"
            />
            <div className="text_below_pic">Nature Nexus</div>
          </div>
          <div className="project-titles">
            <img
              className="dogtinder-1-icon"
              loading="lazy"
              alt=""
              src="./project_pic/dogTinder.png"
            />
            <div className="text_below_pic">Dog Tinder</div>
          </div>
          <div className="project-titles">
            <img
              className="cute-whale-1-icon"
              loading="lazy"
              alt=""
              src="./project_pic/cute_whale.jpg"
            />
            <div className="text_below_pic">Whale Hub</div>
          </div>
          <div className="project-titles">
            <img
              className="pokeball-1-icon"
              loading="lazy"
              alt=""
              src="./project_pic/pokeball.png"
            />
            <div className="text_below_pic">Tap! Pokémon!</div>
          </div>
        </section>
        <img
          className="resume-1-icon"
          loading="lazy"
          alt=""
          src="./icons/resume1.png"
        />
        <img className="github-icon" loading="lazy" alt="" src="./icons/Github.svg" />
      </div>
    );
  };
  export default Desktop;