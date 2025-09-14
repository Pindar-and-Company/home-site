# Code & Coffee Website Style Guide

## Design mockup: 
-https://www.figma.com/proto/IslJnQepYoCEDgNBDGp5T0/BCC?node-id=49-200&source=email_invite&scaling=scale-down-width&content-scaling=fixed

## Libraries
- [Material UI](https://mui.com/material-ui/getting-started/)
    - if a pre-configured component such as dropdown, carousel, etc. is needed 
    - can also be used for layout classes if desired
    - while the library is NOT required for development of these or any other components, please avoid adding additional css libraries (such as Bootstrap, Tailwind, etc.), as this can add to code bloat and confusion if working on code that originated from other team members

## Components
- Create components in their own folder inside the src>components folder. Each component folder should include the .jsx and .css files associated with that component
- Naming convention should be UpperCamelCase for component folders, .jsx and .css files. For example, in the `HomeView` folder you would find `HomeView.jsx` and `HomeView.css`

## CSS 
- Separate CSS files
    - CSS files for individual components should be included in that component's folder with the naming convention `ComponentName.css` and imported into each component 
- BEM
    - Please follow the BEM methodology for element classes
    - https://youtu.be/YktyUS1Aeo0?si=pPl-7sPxfNZNeg4H
    - https://getbem.com/introduction/
    - https://medium.com/trabe/a-comprehensive-guide-to-using-bem-with-react-14d00c199e0d

- Layout
    - It is recommended to use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) or [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) layouts (and avoid floats!!) whenever possible
    - Optionally, Material UI has layout classes that can be used as well (which use Flexbox or Grid under the hood)

- Global styles
    - any styles that would apply site-wide should go in App.css
    - site-wide values such as fonts, colors, etc... should be in [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) declared on `:root` in App.css as well

- Commits
    - commit messages should be descriptive of work done, and begin with a present-tense verb. Ex: "Increase title font size" or "Create BlogPost component"