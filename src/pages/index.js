import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import pic05 from '../images/pic06.png';
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic03.png'
import pic03 from '../images/pic04.png'
import pic04 from '../images/pic05.png'
import pic06 from '../images/pic07.png'
import pic07 from '../images/pic08.png'
import pic08 from '../images/pic09.png'
import pic09 from '../images/pic10.png'
import pic10 from '../images/pic11.png'
import pic11 from '../images/pic00.png'
import pic13 from '../images/pic12.png'
import pic14 from '../images/pic13.png'
import pic15 from '../images/pic14.png'
import pic16 from '../images/pic15.png'
import pic17 from '../images/pic16.png'
import pic18 from '../images/pic17.png'
import pic19 from '../images/pic18.png'
import pic20 from '../images/pic19.png'
import pic21 from '../images/pic20.png'
import pic22 from '../images/pic21.png'
import pic23 from '../images/pic22.png'
import pic24 from '../images/pic23.png'
import pic25 from '../images/pic24.png'
import pic27 from '../images/pic26.png'
import pic28 from '../images/pic27.png'
import pic29 from '../images/pic28.png'
import pic30 from '../images/pic29.png'
import pic31 from '../images/pic30.png'
import pic32 from '../images/pic31.png'
import pic33 from '../images/pic32.png'
import pic34 from '../images/pic33.png'
import pic35 from '../images/pic34.png'
import pic36 from '../images/pic35.png'
import pic37 from '../images/pic36.png'
import pic38 from '../images/pic37.png'
import pic39 from '../images/pic41.png'
import pic41 from '../images/pic44.png'
import pic50 from '../images/01.jpg'
import pic51 from '../images/02.jpg'




export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="text-white mt-0">Objective</h1>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector. To work a dynamic and challenging environment where I can optimally utilize my professional skills. Hardworking, honest, responsible and aspiring professional seeking as a position member of your team that requires creativity, hard work and multitasking.</p>
                {/* <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Get Started!</a> */}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="">
            <h1 className="text-center mt-0">My Skills</h1>
            <hr className="divider dark my-4"/>
            
                <div>
                <ul className="a">
        <li >
              <span className="image">
                <img src={pic08}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Python</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic09}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Numpy</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic10}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Pandas</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic07}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Matplotlib</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic06}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Neural <br />Network</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic05}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Deep <br />Learning</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic02}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Keras</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic01}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Scikit <br />Learn</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic03}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Tensorflow</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic04}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Artificial <br />Intelligence</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic11}  height="100px" width="auto"  alt="" />
              </span>
                <h3>HTML5</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic13}  height="100px" width="auto"  alt="" />
              </span>
                <h3>CSS</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic14}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Saas</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic15}  height="100px" width="auto"  alt="" />
              </span>
                <h3>JavaScript</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic17}  height="100px" width="auto"  alt="" />
              </span>
                <h3>NodeJs</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic16}  height="100px" width="auto"  alt="" />
              </span>
                <h3>React</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic18}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Gatsby</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic19}  height="100px" width="auto"  alt="" />
              </span>
                <h3>NPM</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic20}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Flask</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic21}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Terraform</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic22}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Windows</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic23}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Ubuntu</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic24}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Git</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic25}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Docker</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic27}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Kubernetes</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic28}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Jupyter <br />Notebook</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic29}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Visual <br />Studio</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic30}  height="100px" width="auto"  alt="" />
              </span>
                <h3>GraphQL</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic31}  height="100px" width="auto"  alt="" />
              </span>
                <h3>MongoDb</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic32}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Postman</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic38}  height="100px" width="auto"  alt="" />
              </span>
                <h3>MySQL</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic33}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Rust</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic34}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Lean <br />Startup</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic35}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Agile</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic36}  height="100px" width="auto"  alt="" />
              </span>
                <h3>DevOps</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic37}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Desing <br />Thinking</h3>
              </li>

        </ul>
                
              
              
          
            </div>
          </div>
        </section>

        <section id="portfolio" className=" e">
        <h1 className="text-center mt-0">My Work</h1>
        <hr className="divider dark my-4"/>
        <div className=''>
        <div className='d '>
          <h2 >Gatsby Projects</h2>
          <h4>Web Design User Interface</h4>
          <p>I design these websites with Gatsby, React, HTML5, Sass(CSS) and Java Script.<br />
                    Some of the following websites are made by me:</p></div>
          <div className="container-fluid p-0">
         
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/12.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Highlight
                    </h2>
                    <div className="project-name">
                    A new stylish and unique highlight theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairnew.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/10.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Solid State
                    </h2>
                    <div className="project-name">
                    A new stylish and unique solid state theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairresume.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/9.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Paradimshift
                    </h2>
                    <div className="project-name">
                    A new stylish and unique paradimshift theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairzaki-cv.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/11.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Grayscale
                    </h2>
                    <div className="project-name">
                    A new stylish and unique grayscale theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairzaki-resume.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Modern Resume
                    </h2>
                    <div className="project-name">
                    A new stylish and unique highlight theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umair-zaki.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Casual
                    </h2>
                    <div className="project-name">
                    A new stylish and unique casual theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairportfolio.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Dark Night
                    </h2>
                    <div className="project-name">
                    A new stylish and unique dark night theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairzakicv.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Phantom
                    </h2>
                    <div className="project-name">
                    A new stylish and unique phantom theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairzaki-new.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[8].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Portfolio
                    </h2>
                    <div className="project-name">
                    A new stylish and unique portfolio theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairzakiresume.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[9].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Introduction
                    </h2>
                    <div className="project-name">
                    A new stylish and unique introduction theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairzaki.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/7.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[10].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Black
                    </h2>
                    <div className="project-name">
                    A new stylish and unique black theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umairzakiportfolio.netlify.com/" target="_blank">Visit Site</a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/8.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[11].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption b">
                  
                    <h2 >
                    Spectral
                    </h2>
                    <div className="project-name">
                    A new stylish and unique spectral theme for your new project.
                    </div>
                    
                  </div>
                </a>
                <a className="btn btn-primary btn-xl js-scroll-trigger c" href="https://umaircv.netlify.com/" target="_blank">Visit Site</a>
              </div>
              </div>
              <div className='f g'>
          <h2 >Artificial Intelligence Projects</h2>
          <h4>Deep Learning</h4>
          <p>I trained the model with all following aspects:</p>
              <ul >
                <li>Baseline Neural Network (Import Libraries, Load Data, Prepare partitions(train, test and validation data), label encoding and One hot encoding if needed, Make Model, Make Compiler, Train Model, Evaluate Model and Save Model)</li>
                <li>Baseline Model With Data Standarization</li>
                <li>Evaluate a Smaller Network (Small Dense Layers)</li>
                <li>Evaluate a very Smaller Network that Underfit</li>
                <li>Evaluate a larger Network (Large Dense Layers)</li>
                <li>Evaluate a very Larger Network that Overfit</li>
                <li>Tuning the Model (Change Optimizer and number of Epochs)</li>
                <li>Visualization of Epochs(Accuracy and Loss) through Matplotlib</li>
                <li>Use Dropout and Weight Regularization for best results</li>
              </ul>
                    
                    <h3>1- Binary Classification Sonar Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Sonar-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>2- Multiclass Classification Iris Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Iris-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>3- Regression Housing Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Housing-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>4- Save & Load Keras Model</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Save-Load-Keras-Model" target = "_blank"> Click Here</a></p>
                    <h3>5- Face Detection with Keras MTCNN</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Face-Detection-with-Keras-MTCNN" target = "_blank"> Click Here</a></p></div>
              <div className="f g">
              <h2>Python Flask Projects</h2>
              
        <h4>Todo Restfull API with Unit Testing</h4>
        <p></p>
                    <h3>1- GraphQl-Mongodb-API</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/GraphQl-Mongodb-API" target = "_blank"> Click Here</a></p>
                    <h3>2- PostgreSQL-Todo-APP-Unit-Testing</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/PostgreSQL-Todo-APP-Unit-Testing" target = "_blank"> Click Here</a></p>
                    <h3>3- Todo-APP-Unit-Testing-Mongodb</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Todo-APP-Unit-Testing-Mongodb" target = "_blank"> Click Here</a></p>
              </div>
              <div className="f g">
              <h2 className="major">Upwork</h2>
      <p>to see my Upwork Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p>
         <span className="">
                <img src={pic39}  height="100px" width="auto"  alt="" />
              </span>
              </div>
              <div className="f g">
       <h2 className="major">Fiverr</h2>
      <p>to see my Fiverr Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p>
         <span className="">
                <img src={pic41}  height="100px" width="auto"  alt="" />
              </span>
       </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">My Achievements</h2>
          </div>
          <section  className="h">
            <div className="content">
            <span className="image i">
                <img src={pic50}  alt="" />
              </span>
            <h3>Microsoft Technology Associate</h3>
         <h6>Introduction to Programming using Python</h6>
         <p>I had passed the Microsoft Technology Associate Certificate (MTA-98-381) Introduction to programming using Python with 89% marks on August 23, 2019.</p>
        
            </div>
            <div className="content">
            <span className="image i">
                <img src={pic51}  alt="" />
              </span>
            <h3>Coursera Certificate</h3>
         <h6>AI For Everyone deeplearning.ai</h6>
         <p>I had passed the Corsera Certificate (deeplearning.ai) AI For Everyone with 93% marks on July 12, 2019. Verify at coursera.org/verify/YHQEDEGRL7QH Coursera has confirmed the identity of this individual and their participation in the course.</p>
        
            </div>
          </section>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4"/>
                <div className="j">
                
                <h3>Profile</h3>
          <ul>
                        <li>Father: Muhammad Zaki</li>
                        <li>CNIC: 42301-6362390-9</li>
                        <li>Date of Birth: 16-July-1989</li>
                        <li>Marital Status: Single</li>
                        <li>Country: Pakistan</li>
                        </ul>
          <h3>Education</h3>
          <ul>
                        <li>Matriculation from Bahawalpur Board (Pre-medical Grade "B"2005)</li>
                        <li>Intermediate from Karachi Board (Commerce Grade "C" 2010)</li>
                        <li>Studying Artificial intelligence, Cloud Native Computing and Internet of Things from Axiom PIAIC Headquarter.</li>  
                        </ul>
                        <h3>Address</h3>
        <p>Plot # 1/29, 4th Floor, Flat # A7,
                                              Block 5b, Nazimabad,<br />
                                              Karachi, Pakistan.</p>
        
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>03132873668</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:umairzakicnbc@gmail.com">umairzakicnbc@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
