# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./Screenshot.png)
![](./ScreenshotMobile.png)

### Links
- Live Site URL: [GitHub Pages Link]()

## My process

I started with Tailwindcss and building the full layout first. That left me with enough time to focus on the API integration, semantics and accessibility. 

### Built with
- React 
- TypeScript
- Vite
- Tailwindcss
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to build more structured React components and gained a better understanding of when and why to use state. One of the biggest takeaways was recognizing the difference between Tailwind CSS and Bootstrap. Bootstrap includes built-in JavaScript functionality, which makes features like hamburger menus and dropdowns easier to implement out of the box. Tailwind CSS, on the other hand, focuses purely on styling, so I had to implement interactivity myself using React state. While this required more effort, it helped me deeply understand component logic, state management, and how props and state work together in a real application.

Using Tailwind CSS instead of Bootstrap pushed me to think more intentionally about component behavior. Building functionality from scratch clarified how state and props drive interactivity in React.

### Continued development

Fix some of the design issues I noticed like the logo being the wrong color in the footer.

### Useful resources

- [Tailwind Documentation](https://tailwindcss.com) - This helped for when there were classes or behavior about Tailwind that I did not know.
- [Bit.ly](https://dev.bitly.com/api-reference/#createFullBitlink) - Bit.ly documentation for the API

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/API-Landing-Page.git)

2. Navigate into the project folder:

cd api-landing-page

##  Setup

1. Install dependencies:

npm install

2. Run the project:

npm run dev


## Author

- Website - [Starving Artist Design & Development](https://www.starvingartistddllc.com)
- Frontend Mentor - [@kaethedev](https://www.frontendmentor.io/profile/kaethedev)
- Twitter - [@kaethedev](https://www.twitter.com/kaethedev)


## Reflection

During the development of my URL shortener web app, I followed a structured, step-by-step process to build a fully functional, responsive frontend using React and Tailwind CSS. I started by designing the layout, breaking the interface into reusable components including the Navbar, Hero section, URL shortener form, Features, Boost, and Footer. Using Tailwind allowed me to quickly implement responsive design and maintain consistent styling without writing extensive custom CSS.

One of the main challenges I encountered was integrating the Bitly API. Initially, I was storing shortened URLs as simple strings, which caused TypeScript type errors and made it difficult to associate the original URL with the shortened version. To solve this, I defined a ShortenedLink type with original and short properties and updated my state management accordingly. Another challenge was implementing the copy-to-clipboard functionality with a dynamic “Copied!” button label. I solved this by tracking the index of the last copied link in state and using a timeout to reset the label, ensuring clear user feedback without breaking the list rendering.

I also worked to ensure the user experience was smooth and responsive. For example, the URL input required validation to prevent empty submissions, and shortened links only appear once successfully created. Tailwind’s utility classes allowed me to center content, control spacing, and make the layout visually appealing across desktop and mobile.

Overall, this project strengthened my understanding of React state management, API integration, TypeScript typing, and responsive design principles, while also highlighting the importance of clear error handling and user feedback in interactive web applications.