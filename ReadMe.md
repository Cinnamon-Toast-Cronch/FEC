<h1 align="center">
  Welcome to the Cinnamon-Toast-Cronch Front End Capstone github repo!
</h1>
<p align="center">
  <img src="https://media.giphy.com/media/6uKMx3bejVl6vqLJX8/giphy.gif" alt="FEC-overview" />
</p>
<h4> Authors: </h4>
<ul>
  <li><a href="https://github.com/kallycao" target="_blank">Kally Cao<a/></li>
  <li><a href="https://github.com/KateFeaster" target="_blank">Kate Feaster</a></li>
  <li><a href="https://github.com/KevZhang11" target="_blank">Kevin Zhang</a></li>
  <li><a href="https://github.com/Taylor-Sheets3" target="_blank">Taylor Sheets</a></li>
<ul>
<h2>
  About the project:
</h2>  
<p> The project is an e-commerce website developed according to business requirements documents set out by Hack Reactor.  It contains four primary modules including product details, related items, questions and answers, and ratings and reviews modules.  We worked together as a group of four to implement the repo from scratch and develop a client-facing storefront website using an API provided by Hack Reactor.  The work included but was not limited to: 
<ol>
  <li>Creating a blank repository and building a file skeleton, including dependencies</li>
  <li>Agreeing on technologies we would use throughout the project, including testing software</li>
  <li>Building a server to interact with a provided Hack Reactor API</li>
  <li>Splitting up the app into widgets and agreeing how responsibility for each widget would be divided</li>
  <li>Staying in regular communication to be aware of potential blockers or bugs as development proceeded</li>
  <li>Deploying the app on AWS</li>
</ol>

  <h2>
    The widgets:
  </h2>
  <ol>
    <li>
      <h4>Product Details - primary Author: <a href="https://github.com/kallycao" target="_blank">Kally Cao<a/></h4>
        <details>
          <summary>widget details</summary>
          <!--- TODO: USE THIS DIV TO DESCRIBE THE PRODUCT DETAILS WIDGET --->
        </details>
    </li>
    <li>
      <h4>Related Products - primary Author: <a href="https://github.com/KevZhang11" target="_blank">Kevin Zhang</a></h4>
        <details>
          <summary>widget details</summary>
          <!--- TODO: USE THIS DIV TO DESCRIBE THE RELATED PRODUCTS WIDGET --->
        </details>
    </li>
    <li>
      <h4>Questions and Answers - primary Author: <a href="https://github.com/Taylor-Sheets3" target="_blank">Taylor Sheets</a></h4>
        <details>
          <summary>widget details</summary>
          <p>
            The primary function of the questions and answers module is to allow asking and answering of questions for the selected product.  Users are able to submit a question as well as answers to existing questions, mark them as "helpful" to indicate a useful information, and report unhelpful answers.  A search bar is present at the top of the module that allows users to search for a specific question.  The search bar renders questions dynamically after 3 or more characters are typed, and resets the displayed questions list when users delete the query.
          </p>
          <p align="center">
            <img src="https://media.giphy.com/media/k4Il9mNXhhP0VJaiuV/giphy.gif" alt="search for a question" />
          </p>
          <p> 
            Users can ask a question by pressing the "add a question" button, which opens up a form submission modal. 
          </p>
          <p align="center">
            <img src="https://media.giphy.com/media/gOXLtEnkvP1fcxFDdD/giphy.gif" alt="add a question" /> 
          </p>
          <p> 
            Users can answer a question by pressing the "Add answer" button, which opens a similar form submission modal. 
          </p>
          <p align="center">
            <img src="https://media.giphy.com/media/YXVZ0bSOhOL6tZcLat/giphy.gif" alt="add an answer" />
          </p>
          <p> 
            Questions and answers both appear in order of helpfulness.  Users can mark a question or an answer as helpful to increase the counter.  Users can do this once per question or answer.  By default, four questions are displayed on the screen with two answers per question.  Users can press the "see more questions" button to display two more questions on the screen. Filters applied by the search bar remain active when displaying more questions.  The number of questions displayed is reset to four if the user selects a different product.  The user can also choose to view all of the answers available for a given question by pressing the "Load more answers" button.  Doing this will switch the button text to "collapse answers" which restores the display to just two answers. 
          </p>
          <p align="center">
            <img src="https://media.giphy.com/media/BlWnlLk0EVNyK9Doap/giphy.gif" alt="q&a accordion behavior" />
        </div>
    </li>
    <li>
      <h4>Ratings and Reviews - primary Author: <a href="https://github.com/KateFeaster" target="_blank">Kate Feaster</a></h4>
        <details>
          <summary>widget details</summary>
          <!--- TODO: USE THIS DIV TO DESCRIBE THE RATINGS AND REVIEWS WIDGET --->
        </details>
    </li>
  </ol>
  
  <h2>
    Technologies:
  </h2>
  <ul>
    <li>axios</li>
    <li>prettier</li>
    <li>supertest</li>
    <li>underscore</li>
    <li><img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="aws" /></li>
    <li><img src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" alt="babel badge" /></li>
    <li><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint badge" /></li>
    <li><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express badge" /></li>
    <li><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="github badge" /></li>
    <li><img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="jest badge" /></li>
    <li><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node badge" /></li>
    <li><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react badge" /></li>
    <li><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router badge" /></li>
    <li><img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="webpack badge" /></li>
  </ul>


