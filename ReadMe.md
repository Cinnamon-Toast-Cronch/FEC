<h1 align="center">
  Welcome to the Cinnamon Front End Capstone github repo!
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
<<<<<<< HEAD
<p> The project is an e-commerce website developed according to business requirements documents set out by Hack Reactor. It contains four primary widgets including product details, related items, questions and answers, and ratings and reviews. We worked together as a group of four to implement the repo from scratch and develop a client-facing storefront website using a provided API. The work included but was not limited to:
=======
<p> The project is an e-commerce website developed according to business requirements documents set out by Hack Reactor.  It contains four primary modules including product details, related items, questions and answers, and ratings and reviews modules.  We worked together as a group of four to implement the repo from scratch and develop a client-facing storefront website using an API provided by Hack Reactor.  The work included but was not limited to:
>>>>>>> main
<ol>
  <li>Creating a blank repository and building a file skeleton</li>
  <li>Planning out which technologies we would use throughout the project, including testing software</li>
  <li>Building a server to interact with a provided Hack Reactor API</li>
  <li>Splitting up the app into widgets and agreeing how responsibility for each widget would be divided</li>
  <li>Staying in regular communication and using an AGILE workflow to be aware of potential blockers or bugs as development proceeded</li>
  <li>Deploying the app on AWS</li>
</ol>

  <h2>
    The widgets:
  </h2>
  <ol>
    <li>
      <h4>Product Overview - primary Author: <a href="https://github.com/kallycao" target="_blank">Kally Cao<a/></h4>
        <details>
          <summary>widget details</summary>
          <p>The functionality contained within this module is split into four distinct sections: product information, style selector, add to cart, and product gallery (default/expanded view). Its purpose is to display relevant product images based on user selection and guide the user through selecting a specific style, size, and quantity to add to their cart.
          </p>
          <p align="center">
            <img src="https://media.giphy.com/media/AzC0ZxOpON2yieEclY/giphy.gif" alt="product overview" />
          </p>
          <p>
            Users can view general product information such as its category, title, number of reviews, rating, price dependent on style selection, and description. By clicking on "Read all (#) of reviews", this will navigate the user to the Ratings and Review section. This section also consists of buttons that allow the user to share this product on social media platforms.
          </p>
          <p align="center">
          <img src="https://media.giphy.com/media/DT2vZ28ArqfVXI8o6h/giphy.gif" alt="product information" />
          </p>
          <p>
          Below the product information, users are presented with the style selector that consists of all styles of the current product. Users can click between various styles. The currently selected style is indicated with an overlay of a checkmark and the style title is displayed above the list of style thumbnail images.
          </p>
          <p align="center">
          <img src="https://media.giphy.com/media/zK63iaKKLBsH2Q6yzX/giphy.gif" alt="style selector" />
          </p>
          <p>
          Below the style selector, users are presented with two dropdowns that allow that user to select a size and quantity of the item to add to their cart via the add to cart button. The options available vary depending on the selected product style. If a size isn't selected, the user will be prompted to select a size prior to adding to their cart.
          </p>
          <p align="center">
          <img src="https://media.giphy.com/media/AuiHO7pdOUyoyCTD0u/giphy.gif" alt="select size, quantity, and add to cart" />
          </p>
          <p>
          Users are able to view images of the currently selected product style via the image gallery. In the default view of the image gallery, users are able to navigate through the images via the right and left arrows that overlay the main image. All images of the current product are also displayed on the left side of the main image which the user can click to navigate to. If the user clicks on the main image, the image gallery will change to the expanded view.
          </p>
          <p align="center">
          <img src="https://media.giphy.com/media/Ho33fFXy7As8pBbjno/giphy.gif" alt="default view of image gallery" />
          </p>
          <p>
          The expanded view of the image gallery has similar functionality to the default view. Unlike the default view, the expanded view has the main image spanning the entire screen. This view also allows the user to zoom into the main image by clicking on it. To exit the zoomed view, the user can click on the main image. To exit the expanded view of the image gallery, the user can click on the 'X' button located at the top right corner of the page.
          </p>
          <p align="center">
          <img src="https://media.giphy.com/media/oetAdDol24pdGd8O2G/giphy.gif" alt="expanded view of image gallery" />
          </p>
        </details>
    </li>
    <li>
      <h4>Related Products - primary Author: <a href="https://github.com/KevZhang11" target="_blank">Kevin Zhang</a></h4>
        <details>
          <summary>widget details</summary>
          <p>
            The main functionality of the related products component is it lists products related to the displayed product, into cards that displays the related product’s name, image, category, price, and star ratings. The component also has a sibling component called Your Outfits that allows the user to save the displayed product onto a list that will persist as the user browses through the site.
          </p>
          <p align="center">
            <img src="https://media.giphy.com/media/fSSrrPsArFz3LXkm8l/giphy.gif">
          </p>
          <p>
            Users can scroll through the list of related products using the directional arrows. By clicking on the star icon located at the top right corner of the image, users can also see a table comparing all the different features of the displayed product and the selected product.
          </p>
          <p align="center">
            <img src="https://media.giphy.com/media/ulhYXCly8FWWW7tXeF/giphy.gif">
          </p>
          <p>
            By clicking the add to outfit card, users can add the displayed product to their personal list and remove the product by clicking on the ‘X’ button located at the top right corner of the image.
          </p>
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
        </details>
    </li>
    <li>
      <h4>Ratings and Reviews - primary Author: <a href="https://github.com/KateFeaster" target="_blank">Kate Feaster</a></h4>
        <details>
          <summary>widget details</summary>
          <p>The ratings and reviews widget was designed to give shoppers an easily digestible overview of previous buyers' experiences with the displayed product and a way to provide their experience with the product. On the left side of the widget, the shopper is greeted with a rating summary that displays the average product rating, a rating breakdown, and a set of characteristic visualizations that summarize the elements of the product that previous buyers liked or disliked. Clicking on any of the rating breakdowns will filter the reviews by the chosen rating. Mutliple filters can be chosen and reviews of all filtered ratings will be shown.</p>
          <p align="center">
            <img src="https://media.giphy.com/media/bJ71hmIfErrVnDsWev/giphy.gif" alt="Ratings and Reviews widget" style="width: 40%; min-width: 400px"/>
          </p>
          <p>On the right side of the widget is a list of all of the reviews for the product that match the current filter. This list can be sorted by relevant reviews, newest reviews, or helpful reviews, and each individual review shows the buyer's overall rating, their display name and date posted, the content of their review including user uploaded photos, a seller response if present, and the number of other shoppers that found the review helpful. Shoppers can provide feedback on which reviews they found helpful, but to prevent spam, shoppers cannot mark the same review as helpful more than once.</p>
          <p align="center">
            <img src="https://media.giphy.com/media/UZx0Mrge6sov69UKXZ/giphy.gif" alt="Gif demonstrating the ratings and reviews' review list" style="width: 40%; min-width: 400px">
          </p>
          <p>The reviews list initially shows only two reviews for the product to keep load times short and to prevent the page from looking too busy. However, shoppers can load more reviews to keep reading if they are interested. As the length of the review list grows, the rating summary and sort bar stay visible at the top of the page to keep the page feeling managable. </p>
          <p align="center">
            <img src="https://media.giphy.com/media/M8nCk6Zueh8PhXnhyZ/giphy.gif" alt="Gif demonstrating the ratings and reviews' review list scrolling functionality" style="width: 40%; min-width: 400px">
          </p>
          <p> Buyers of the product also have the option of submitting a new review. Here, buyers can explain their experience with the product and upload images to show it off. To prevent spam or accidental submissions of incomplete reviews, all reviews are validated to ensure that fields are filled out correctly.</p>
          <p align="center">
            <img src="https://media.giphy.com/media/ijO5xyFOr6D650bq92/giphy.gif" alt="Gif demonstrating a buyer submitting a new review" style="width: 40%; min-width: 400px">
          </p>
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
