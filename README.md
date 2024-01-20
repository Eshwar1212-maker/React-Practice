# React Code Challenges

This is a repo made for me to further enhance my React skills with Typescript. The challenges are separate components under the /challenges folder. 
These challenges can help your overall understanding of Javascript fundamentals, React state management, effects, different hooks, data fetching, 
using Typescript, and more.

## Description of the challenges and concepts they teach.

Here are the challenges so far and what they teach:


### Digital Clock
Problem description: 

Create a widget that renders the current time in HH:MM:SS format using a 7-segment digital display. You are free to choose to use 12-hour or a 24-hour display.
Each digit needs to be rendered by individual segments, but you can exercise your creativity by choosing different colors and styling it differently. It should however still function as a clock, allowing the user to read the time.

Concepts this challenge covers: 
- Basic understanding of Javascript's Date function
- Understanding of how to dynamically use the setInterval function to manipulate state


### Holy Grail
Problem description: 

The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.
Header:
Stretches horizontally across the whole page.
60px tall.
Columns:
Both the left and right columns have a fixed width of 100px.
The center column is fluid-width.
All the columns should have the same height, regardless of which column is the tallest.
Footer:
Stretches horizontally across the whole page.
100px tall.
The footer should be at the bottom of the page even if there is not enough content to fill up the viewport height.

To see how it should look: https://www.greatfrontend.com/questions/user-interface/holy-grail/react

Concepts this challenge covers: 
- This is more of a CSS layout challenge that is very testy of your front end skills.


### Shopping Cart
Problem description: 

This is probably my favorite react coding challenge ever! It encompasses so many different skills testing your front end knowledge.

The challenge is to build 5 checkout lines(like a grocery store), and have a form where a user can submit a button. When this button gets submitted, you should find the cart with the lowest amount of items and add that item to that line. Each shopping line can have many items, so when the form gets submitted, you should calculate the total amount of each items in each line to figure out which shopping line has the least. 

Now, after you did that, every half a second, decrement the first item's number by one for each shopping line, than once that item is 0, remove it from its shopping line. 

I know I might not of explained this very well, but thankfully Cody from the Youtube channel "Web Dev Cody" came up with this challenge and explains it perfectly here: https://www.youtube.com/watch?v=B9fmr1TpKHE&list=PLKQCsJKZMeQMGm0IQpZqcq1gg2U0mkm9s&index=6

Concepts this challenge covers: 
- Understanding of React components lifecycle and effects.
- Dynamic Javascript algorithms to update UI, along with different Javascript array methods.
- Dynamically updating UI with intervals.

