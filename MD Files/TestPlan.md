## Manual Acceptance Testing
Once each development milestone or feature is created, the Designer will manually perform test and evaluate its functionality/design based on the requirements below. If an error or concern occurs, the designer will create a github issue detailing the problem. Contact with the PM will also be made to update on any set backs and needed help in the development timeline.

### Usability/Accessibility
Covers requirements under 5.0
- The Designer will be testing each page for contrast ratio of at least 4.7:1-6.5:1 or more
using https://webaim.org/resources/contrastchecker/ 
- Making sure the webpage looks right on Desktop, laptops, tablets (ex: screen sizes at min 642-1008px and max 1080px) clarifying break points. 
- The website will be navigable and usable via screen readers by using accessibility testers such as https://siteimprove.com/en-gb/accessibility/screen-reader-testing/ 

### Nav Bar
Covers requirements 1.21
- Global feature appearing on all pages 
- If links on navbar lead to correct pages

### Contact Form (Appearing on Home & About page)
Covers requirement 2.2
- User must fill out Contact form features: name, email, and message boxes before being able to submit form.
- Other wise an error will occur showing the required fields that need to be filled.
- When the user types in an invalid email address and tries to submit the form, an error message will appear.
Invalid Email Address: if there is no ‘@’ symbol or if the domain does not appear on the right side of the ‘@’ symbol.  
- When the user doesn’t fill out one of the other required fields and tries to submit the contact form, an error message will appear and the form won’t submit.
- When a user inputs their information into the “Contact Us” Form and clicks “submit”, their information will be sent and verified by using a third party service. 
- After the user clicks “submit”, then they will be shown a message that reads “Thank you!” 

### Home Page
Covers requirements 2.1 & 2.3
- An embedded youtube video that will be inspected for accessibilty (screen reader)
- This page will mainly be inspected for content and contrast

### Stores Page
Covers requirements 3.1-3.333
- When the user clicks any filter category, only the brand cards that are tagged with those categories will show on the webpage 
- If ther is no matches then an error will show saying "no matches found"
- When a user inputs a shop's name in the search bar then results that match the name exactly will show up, if the search is not an exact match for a shop name then the error message saying “no results found” will show. 
- When a user makes a search for a store/brand that the site doesn’t have, an error message will appear telling the user the information they are looking for is unavailable.
- When the user clicks the search button without typing anything into the search bar an error message will appear saying they must make a search first.
- Each interactive store card will show an image and the name of the shop featured
- When a store’s card is clicked, the user is redirected to a new webpage that provides more details about the store.


### About Page
Covers requirements 4.1 & 4.2
- When a user clicks on one of the team members names, it will redirect the user to the team members LinkedIn page
- This page will also be mainly inspected for the contrast & content listing our mission statement and values/about information

