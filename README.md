### Portfolio-Site
This is my portfolio site, where I have demonstrated my front-end skills and technologies to create it. 


# Access the live site
You can access my Portfolio Site with this link: https://ashlyn-lanaville-portfolio.netlify.app

# Approach
I wanted to create a simple and easily navigatable portfolio site. Each section of my page is clean and easily differentiable with contrasting background colors. I also created a menu bar to help ease the navigation throughout the site.

# HTML
I focused on creating sections of the page and was named after each section on my portfolio: the greetings page, about me, projects, skills/resume page, etc. Within each section are specific elements to display the content: the header of the section and its contents whether thats an unordered list or paragraph.


# CSS
I used CSS to do the majority of the styling and layout of the page. I primarily used flexbox to style each section and used a fixed position for elements like my links at the bottom of the page and my navigation bar at the top of the page. 

I also utilized CSS to create short animations. For example, I created a short animation to show the contents of the home/greetings page  slowly. Another example where I used the @keyframes style to create an animation was the first message on the screen, "Hello there!" to mimick a typewriter effect. I did this by setting the overflow to hidden so it would not show the contents of that element, then in the animations style, set the width to 0 at 0% and 100% at 100%. From there, I edited how the animation played out in the element style itself. 


# Javascript
I used JQuery for many different user interactions as well. The first few were the mouseover/mouseleave effects which increases the size of the element selected on the event. This is very similar to the hover effect in CSS which would have worked similarly. Another interaction I implemented was the responsive nav-bar menu. I had to keep track of the number of times it was clicked in order to correctly close or open the menu/directory. The submit button at the bottom of the page in the contact form will "submit" the information that the user inputs into the text boxes. If the user hits submit and the input fields are still empty, the user will be alerted. As of now, I have not created anyways to send that information that the user submits further to myself, and will implement ways to do that further into the course. Another interaction I created was to put a focus onto the current input field that the user has clicked on, and when they are not focused to blur, and revert back to the original input field color. This helps this adds a nice interactive component to the contact fields. 

The last component I included in my app.js file using JQuery was to create the fading/blinking arrows. I did this first by creating three V's in html, style them closely together in CSS, then set timeout functions for when each V blink will run. Each "V" runs half a second apart, and the blink functions use the fadeIn/fadeOut methods to fade the V's in and out every second. 

