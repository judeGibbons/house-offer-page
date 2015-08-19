#Responsive page with accordion sections

The task was to convert the supplied PSD file to HTML/CSS/JS with some 
added functionality.

##Notes on implementation

The hide/show arrows are background images so are created as a sprite, but the 
social media images in the footer need to be in the html as content rather than 
background images. In production it would be a good idea to create the arrows with 
canvas and use the images as a fallback.

I originally used HTML5 semantic elements (section, header, footer) but have 
reverted to divs with classes or ids as IE8 does not support HTML5 elements 
(a fallback is possible, but I've done this for speed).

I have used pixels for margins, padding, font size etc. for speed, but would use 
ems or rems for fonts, and percentage for measurements where appropriate to aid 
responsiveness.

At one point I inserted the pound signs using a ::before pseudo element (this would 
make it easy to swich currencies if necessary) but decided against it as couldn't 
think of a quick  semantic fix for them not being accessible.

I haven't been able to test this on IE: I believe I've only used things which will 
work on IE8, or which will not break the page if they don't. The box model may need 
IE8-specific styles to be added, possibly through an included stylesheet.

I have used jQuery v1 for speed and also for its cross-browserness.

I have used the font Lucida Grande regular and bold in place of SourceSensPro 
regular and black.

##Next steps:

Use JavaScript to open and close the sections accordion-style.

When the 'submit offer' button is clicked, the price should validate,  
display an inline message, and output as an object to the console.

After this, return to fixing the layout and implementing a resposive design.