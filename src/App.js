import './App.css';
import { GoDotFill } from "react-icons/go"

function App() {
  return (
    <div className="App">

      <nav className='nav-nav'>

        <div className='logo'> <a href='#top'>c</a> </div>

        <div className='nav-c'>
          <div type="button"><a href="#top">About</a></div>
          <div type="button"><a href='#wexp'>Experience</a></div>
          <div type="button"><a href='#wexp'>work</a></div>
          <div type="button"><a href='#contactme'>contact</a></div>
          <div type="button"><a className='ares' target='blank'  href='https://firebasestorage.googleapis.com/v0/b/portfolio-407b1.appspot.com/o/chaitanya-fs-resume.pdf?alt=media&token=9ee19bc0-544d-491a-afaf-71680d78539b'> Resume</a></div>
        </div>

      </nav>


      <div className='aboutme' id='aboutme'>

        <div className='about-content'>
          <b>👋 Hey I AM  Chaitanya Alla </b>
          <b>FullStack Developer.</b>
          <p style={{ textAlign: "left" }}>I possess a versatile skill set encompassing both frontend and backend technologies.Proficient in front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies such as Node.js & mongoDB. Strong problem-solving skills and a commitment to creating robust, user-friendly applications. Always eager to learn and adapt to the latest technologies in the ever-evolving tech landscape.</p>
        </div>

        <div className='about-image'>

          <img className='cimg' src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=1060&t=st=1694068809~exp=1694069409~hmac=29daaa26d667fa8efc90576bc7fb5717877c76dccc845119ec39f4f65c44a0c8" />

        </div>

      </div>



      <div className='intro'>

        <div className='intro-m'>
          <b>About Me</b>
          <p className='intro-des'> As a Fullstack Developer, I possess a versatile skill set encompassing both frontend and backend technologies. With a deep understanding of JavaScript, and frameworks such as React and Node.js, I've crafted seamless, user-friendly web applications. My expertise extends to database management using technologies  like MongoDB and SQL. I'm highly adept at problem-solving, collaborating with cross-functional teams, and ensuring the scalability, security, and performance of web applications to deliver exceptional user experiences.</p>
        </div>


        <div className='intro-p'>
          <img className='mypic' src="https://res.cloudinary.com/dr6xblebm/image/upload/v1694072595/cherry/IMG-20180729-WA0041_gyazdv.jpg" />
        </div>


      </div>

      <div>
        <div className='skillls'>Skills</div>
        </div>
        <br></br>
        <br></br>

      <div className='sssk'>

        <div className='skills'>
          
          <div className='skill-logo'><img className='skill-img' src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_logo-700x700.png" /></div>
          <div className='skill-logo'><img className='skill-img' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" /></div>
          <div className='skill-logo'><img className='skill-img' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" /></div>
          <div className='skill-logo'><img className='skill-img' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" /></div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className='skills'>
          <div className='skill-logo'><img className='skill-img' src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" /></div>
          <div className='skill-logo'><img className='skill-img' src="https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67" /></div>
          <div className='skill-logo'><img className='skill-img' src="https://cdn.worldvectorlogo.com/logos/react-1.svg" /></div>
          <div className='skill-logo'><img className='skill-img' src="https://png2.cleanpng.com/sh/073fc8882dd74acfd5c27212e332c357/L0KzQYm3VMI2N5d1j5H0aYP2gLBuTf5wbJYyguU2anH5ccTqkvlxfF58fdQ2YYDzfLrqggRqd58yfep5cnX2g37xk71kd551RadqZUDpSIXsVfU4PWQ8RqI9NkS8RIaBUcUzPGcAS6ICMEO7Roq1kP5o/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png" /></div>
        </div>
        
      </div>


      <br></br>
      <br></br>
      <br></br>


      <div className='wiw'  id='wexp'>
        Where I've Worked
      </div>

      <br></br>
      <br></br>

      <div className='experience'>

        <div className='company'><i> Temanedtech pvt ltd - Fullstack  Developer</i></div>
        <br></br>

        <div className='exp-m'> <GoDotFill/>   As a Fullstack Developer at an EdTech company, I contributed significantly to the development and enhancement of educational platforms. I designed and implemented user-friendly interfaces using REACT-JS. </div>

        <div className='exp-m'> <GoDotFill/> I created a course module component featuring a calendar for selecting specific dates and a slider to navigate through various sections. I harnessed the power of multiple libraries such as REACT-SLICK, Ant Design, Material UI, React Bootstrap, and react-responsive-carousel to achieve this functionality.</div>

        <div className='exp-m'> <GoDotFill/>I leveraged technologies like NODE-JS, the Express library, and MongoDB to develop a robust backend course collection system. This system efficiently manages modules, sections, and individual section progress. These data are seamlessly displayed in the frontend of the web application, powered by REDUX. </div>

        <div className='exp-m'> <GoDotFill/>Proficiently deployed web applications on AWS infrastructure, utilizing services like EC2, RDS, and S3, ensuring high availability and scalability. Configured Nginx as a reverse proxy server for efficient load balancing and enhanced web server performance. Implemented security measures, including SSL certificates, to ensure data integrity and user privacy. </div>
      </div>

      <br></br>
      <br></br>


      <div className='experience'>

        <div className='company'><i> CLIQTICK - Intern as an Frontend Developer </i></div>
        <br></br>

        <div className='exp-m'> <GoDotFill/>developed various web pages for different organizations using HTML, CSS and Bootstrap.</div>

        <div className='exp-m'><GoDotFill/>collabrated with cross functional teams, including designers, developers and marketers .</div>

        <div className='exp-m'> <GoDotFill/>To create web application pages that meet the business needs and provide positive usr experience.</div>

        <div className='exp-m'><GoDotFill/> Designed and developed systems with a focus on scalability, maintainability, and usability, using system design principles that ensured code modularity and flexibility for future enhancements. Additionally, collaborated with marketing teams to develop strategies for promoting web applications and increasing user engagement. </div>
      </div>



<div className='touch' id='contactme'>

<div className='gic'>Get In Touch</div>
<div className='tm'>If you need any technical support, assistance or collaboration in your project.</div>
<div className='tm'>If you don't get an answer immediately. I might just be traveling through the middle of nowhere. I'll get back to you as soon as I can. That's a promise!</div>
<div className='mail'><a href='#contactme'>allachaitanya799@gmail.com </a></div>

<div className='s-ddd'>
  <div><a target='blank' href='https://www.linkedin.com/in/chaitanya-alla-3a7584290/'><img className='s-img' src='https://toppng.com/uploads/preview/linkedin-logo-transparent-116602552215dpnc1i8cu.png'/></a></div>
  <div><a target='blank' href='https://github.com/chaitanya-cherry25'><img className='s-img' src='https://icon-library.com/images/github-icon-vector/github-icon-vector-20.jpg'/></a></div>
</div>

<div className='quote'>If you are good at something never do if for free</div>


</div>




</div>
  );
}

export default App;
