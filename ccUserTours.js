const imgBuilderTourCompletionKey = 'imgBuilderTourCompleted';
const vidBuilderTourCompletionKey = 'vidBuilderTourCompleted';
const btnBuilderTourCompletionKey = 'btnBuilderTourCompleted';
const alertBuilderTourCompletionKey = 'alertBuilderTourCompleted';
const tooltipBuilderTourCompletionKey = 'tooltipBuilderTourCompleted';
const tableBuilderTourCompletionKey = 'tableBuilderTourCompleted';
const accBuilderTourCompletionKey = 'accBuilderTourCompleted';
const readmoreBuilderTourCompletionKey = 'readmoreBuilderTourCompleted';
window.addEventListener('load',function(){
//Read more toggle needs this function to activate its collapse and open function, plus change the icon.
$('.demoToggle').click(function(){
    $('i', this).toggleClass('fa-angle-down fa-angle-up');
});
$('.readmoreToggle').click(function(){
    $('i', this).toggleClass('fa-angle-down fa-angle-up');
});
 // Initialize Shepherd
 var imgBuilderTour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      modal: true,
      scrollToHandler: function (element) {
        const elementRect = element.getBoundingClientRect();
        const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth',
        });
      },
      showCancelLink: true,
      modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
      modalOverlayClosingPadding: 10,
      buttons: []
    },
    useModalOverlay: true,
  });
  //Extract actions for use across all tours
  function activeNext() {
    const activeTour = Shepherd.activeTour; // Get the active tour instance
    activeTour.next(); // Go to the next step
  }
  function activePrev() {
    const activeTour = Shepherd.activeTour; // Get the active tour instance
    activeTour.back(); // Go to the previous step
  }
  function activeComplete() {
    const activeTour = Shepherd.activeTour; // Get the active tour instance
    activeTour.complete(); // Trigger completion event of current tour
    window.scrollTo({ //scroll to the top of the page after tour is complete
      top: 0,
      behavior: 'smooth' // Optionally, you can use 'smooth' for smooth scrolling
    });
  }
  //If the done button is pressed before any final step, jump to the last step which shows the user where to reactivate the user tours
  function jumpToFinalStep() {
    const activeTour = Shepherd.activeTour; // Get the active tour instance
    const lastStep = activeTour.steps[activeTour.steps.length - 1];
    activeTour.show(lastStep.id);
  }

  // Button arrays for all buttons across all tours
const firstBtn = [
  {
    text: 'Next <i class="fa-solid fa-forward"></i>',
    action: function () {activeNext();},
    classes: 'btn btn-success'
  },
  {
    text: 'Done <i class="fa fa-flag-checkered"></i>',
    action: function () {jumpToFinalStep();},
    classes: 'btn btn-dark completeTour'
  }
];

const middleBtn = [
  {
    text: 'Back <i class="fa-solid fa-backward"></i>',
    action: function () {activePrev();},
    classes: 'btn btn-danger'
  },
  {
    text: 'Next <i class="fa-solid fa-forward"></i>',
    action: function () {activeNext();},
    classes: 'btn btn-success'
  },
  {
    text: 'Done <i class="fa fa-flag-checkered"></i>',
    action: function () {jumpToFinalStep();},
    classes: 'btn btn-dark completeTour'
  }
];

const finalBtn = [
  {
    text: 'Done <i class="fa fa-flag-checkered"></i>',
    action: function () {activeComplete();},
    classes: 'btn btn-dark completeTour'
  }
];

  // Define the steps for the imgBuilderTour
  const imgBuilderSteps = [
    {
      id: 'imgStep0',
      title: 'Welcome to the User Tour',
      text: 'Welcome to the image builder. Click next to take a tour, or done to hide this tour.',
      buttons: firstBtn
    },
    {
      id: 'imgStep1',
      title: 'Image Position',
      text: 'Choose your image position: Left/Right/Float, or choose to have image only or 2 images side by side',
      attachTo: { element: '#imgStep1', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'imgStep2',
      title: 'Image Link',
      text: 'Paste your image link. We suggest the Web link from the Extend Files & Content area, not the studio link.',
      attachTo: { element: '#imgStep2', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep3',
      title: 'Alt Text',
      text: 'Type your alt text for the image. This is a breif description of what the image is. This is integral to meet accessibility standards.',
      attachTo: { element: '#imgStep3', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep4',
      title: 'Caption Text',
      text: 'Type your caption text that will appear under the image. This should be a reference to where you obtained the image e.g. Image from Adobe Stock used under Education License.',
      attachTo: { element: '#imgStep4', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep5',
      title: 'Image Text',
      text: 'If you want text to appear side by side with the image, type it here. DO NOT include a heading here.',
      attachTo: { element: '#imgStep5', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep6',
      title: 'Vertical Alignment',
      text: 'If your text is longer than the height of your image or vice versa, you can align the shorter object to be centred vertically.',
      attachTo: { element: '#imgStep6', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep7',
      title: 'Image Border',
      text: 'Borders can draw attention to an image. If your image is floating in white space, consider a faint border.',
      attachTo: { element: '#imgStep7', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep8',
      title: 'Image Width',
      text: 'If using an image + text, choose how wide the image will be. 1/2 the screen, 1/3 or 1/4.',
      attachTo: { element: '#imgStep8', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep9',
      title: 'Heading Text',
      text: 'If you require a heading, type it here. Make sure to choose a heading size, and you can add an icon for your Curriculum Area if you would like. Hover over the icons and a tooltip will appear to tell you which Curriculum Area it belongs to.',
      attachTo: { element: '#imgStep9', on: 'right' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep10',
      title: 'Element Preview',
      text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
      attachTo: { element: '#imgStep10', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'imgStep11',
      title: 'User Tour Complete',
      text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
      attachTo: { element: '#userTourMenu', on: 'top' },
      buttons: finalBtn,
    }
  ]
//add the above steps to the tour
  imgBuilderTour.addSteps(imgBuilderSteps);
//set the image builder tour completion key to false
localStorage.setItem(imgBuilderTourCompletionKey, 'false');
//start tour if the key isn't switched to true
    document.getElementById('imgBuilderBtn').addEventListener('click', function() {
    if (localStorage.getItem(imgBuilderTourCompletionKey) !== 'true') {
      imgBuilderTour.start();
    }
    else {
      //do nothing    
    }
  });
  //restart tour when the user tour is clicked from the bottom menu
  $('#imgBuilderTourRestart').click(function(){
    localStorage.setItem(imgBuilderTourCompletionKey, 'false');
    $('#imgBuilderBtn').click();
  });
  //set the image builder key to true so it doesn't keep reactivating
  imgBuilderTour.on('complete', function () {
    localStorage.setItem(imgBuilderTourCompletionKey, 'true');
  });
  
  //Video builder user tour
  var vidBuilderTour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      modal: true,
    scrollToHandler: function (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    showCancelLink: true,
    modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
    modalOverlayClosingPadding: 10,
    buttons: []
  },
  useModalOverlay: true,
});
//Steps for video builder user tour
const vidBuilderSteps = [
  {
    id: 'vidStep0',
    title: 'Welcome to the User Tour',
    text: 'Welcome to the Video builder. Click next to take a tour, or done to hide this tour.',
    buttons: firstBtn
  },
  {
    id: 'vidStep1',
    title: 'Video Position',
    text: 'Choose your video position. Left or right of your text, or float so the text wraps around the video. If you choose video only or 2 videos side by side in the next option, this option will disappear.',
    attachTo: { element: '#vidPosDiv', on: 'right' },
    buttons: middleBtn
  },
  {
    id: 'vidStep2',
    title: 'Video Container Width',
    text: 'Choose your video width. 1/2, 1/3 or 1/4 of the screen width. If you choose video only or 2 videos side by side, the width will be predetermined.',
    attachTo: { element: '#vidStep2', on: 'right' },
    buttons: middleBtn
  },
  {
    id: 'vidStep3',
    title: 'Video Main Heading',
    text: 'The default heading is the black Watch heading. You can add to it in the text box here or change the heading to a purple heading or blue headings to remove the default watch text and write your own heading.',
    attachTo: { element: '#vidStep3', on: 'right' },
    buttons: middleBtn
  },
  {
    id: 'vidStep4',
    title: 'Video Heading Icon',
    text: 'You can choose an icon to go with your video heading, but ONLY if you use the purple UQ heading.',
    attachTo: { element: '#vidStep4', on: 'right' },
    buttons: middleBtn
  },
  {
    id: 'vidStep5',
    title: 'Video Main Heading Size',
    text: 'Choose your main heading size that sits above the video and text. Default is the black watch for videos, but you can change it to fit a different context to no heading, blue subheading or purple main heading.',
    attachTo: { element: '#vidStep5', on: 'right' },
    buttons: middleBtn
  },
  {
    id: 'vidStep6',
    title: 'Text Beside Video',
    text: 'Write text that will sit next to your video. This should be a brief overview of why the video is worth watching, or pose some questions for students to think about while watching.',
    attachTo: { element: '#vidStep6', on: 'right' },
    buttons: middleBtn
  },
  {
    id: 'vidStep7',
    title: 'Video Link',
    text: 'Paste your video link. You can use Echo, YouTube, TED Talks, Vimeo or Kaltura videos.',
    attachTo: { element: '#vidStep7', on: 'right' },
    buttons: middleBtn
  },
  {
    id: 'vidStep8',
    title: 'Video Sub Heading',
    text: 'You can use this text box to write a sub heading that sits directly above the video. This will sit below the main heading.',
    attachTo: { element: '#vidStep8', on: 'right' },
    buttons: middleBtn,
  },
  {
    id: 'vidStep9',
    title: 'Element Live Preview',
    text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
    attachTo: { element: '#vidStep9', on: 'right' },
    buttons: middleBtn,
  },
  {
    id: 'vidStep10',
    title: 'User Tour Complete',
    text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
    attachTo: { element: '#userTourMenu', on: 'top' },
    buttons: finalBtn,
  }
]
//Add above steps to the video builder user tour
vidBuilderTour.addSteps(vidBuilderSteps);

//Set the local storage key for the video builder tour to false
localStorage.setItem(vidBuilderTourCompletionKey, 'false');

document.getElementById('vidBuilderBtn').addEventListener('click', function() {
  if (localStorage.getItem(vidBuilderTourCompletionKey) !== 'true') {
    vidBuilderTour.start();
  }
  else {
    //do nothing    
  }
});
$('#vidBuilderTourRestart').click(function(){
  localStorage.setItem(vidBuilderTourCompletionKey, 'false');
  $('#vidBuilderBtn').click();
});
vidBuilderTour.on('complete', function () {
  localStorage.setItem(vidBuilderTourCompletionKey, 'true');
});
  
//Button builder tour
var btnBuilderTour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    modal: true,
    scrollToHandler: function (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    showCancelLink: true,
    modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
    modalOverlayClosingPadding: 10,
    buttons: []
  },
  useModalOverlay: true,
});
  const btnBuilderSteps = [
    {
      id: 'btnStep0',
      title: 'Welcome to the User Tour',
      text: 'Welcome to the button builder. Click next to take a tour, or done to hide this tour.',
      buttons: firstBtn
    },
    {
      id: 'btnStep1',
      title:'Number of Buttons',
      text: 'Choose your number of buttons. If choosing 1, you can position the button, but choosing 2 or 3 will result in the width and position being pre-defined. If choosing 2 or 3 buttons, additional options will appear for button 2 and 3.',
      attachTo: { element: '#btnStep1', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep2',
      title:'Button Position',
      text: 'If creating only 1 button, you can position it to the left, or centre it.',
      attachTo: { element: '#btnStep2', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep3',
      title:'Button Width',
      text: 'If creating only 1 button, you can choose the width of the button. Either natural (as wide as the text), 25, 50, 75 or 100% the width of the page.',
      attachTo: { element: '#btnStep3', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep4',
      title:'Same or New?',
      text: 'Choose whether the link you place on the button opens in a new window (default) or the same window.',
      attachTo: { element: '#btnStep4', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep5',
      title:'Button Size',
      text: 'Choose your button(s) size. Small, regular (default) or large',
      attachTo: { element: '#btnStep5', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep6',
      title:'Button Text',
      text: 'Write the text that will appear on your button',
      attachTo: { element: '#btnStep6', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep7',
      title:'Button Icon',
      text: 'You can choose to add an icon to your button.',
      attachTo: { element: '#btnStep7', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep8',
      title:'Button Colour',
      text: 'Choose the colour of your button. If creating more than 1 button, you can choose the colour of each individual button.',
      attachTo: { element: '#btnStep8', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep9',
      title:'Button Link',
      text: 'Paste the link for where you want the user to go when they click your button.',
      attachTo: { element: '#btnStep9', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'btnStep10',
      title: 'Title Text',
      text: 'This text relates to accessibility. This should be 3-5 words that describes what the link is, not the link itself. It appears when the user hovers over the button.',
      attachTo: { element: '#btnStep10', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'btnStep11',
      title: 'Element Preview',
      text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
      attachTo: { element: '#btnStep11', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'btnStep12',
      title: 'User Tour Complete',
      text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
      attachTo: { element: '#userTourMenu', on: 'top' },
      buttons: finalBtn,
    }
  ]
  //Add above steps to the button builder user tour
btnBuilderTour.addSteps(btnBuilderSteps);

//Set the local storage key for the video builder tour to false
localStorage.setItem(btnBuilderTourCompletionKey, 'false');

document.getElementById('btnBuilderBtn').addEventListener('click', function() {
  if (localStorage.getItem(btnBuilderTourCompletionKey) !== 'true') {
    btnBuilderTour.start();
  }
  else {
    //do nothing    
  }
});
$('#btnBuilderTourRestart').click(function(){
  localStorage.setItem(btnBuilderTourCompletionKey, 'false');
  $('#btnBuilderBtn').click();
});
btnBuilderTour.on('complete', function () {
  localStorage.setItem(btnBuilderTourCompletionKey, 'true');
});

// Alert builder tour
var alertBuilderTour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    modal: true,
    scrollToHandler: function (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    showCancelLink: true,
    modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
    modalOverlayClosingPadding: 10,
    buttons: []
  },
  useModalOverlay: true,
});
  const alertBuilderSteps = [
    {
      id: 'alertStep0',
      title: 'Welcome to the User Tour',
      text: 'Welcome to the alert/quote builder. Click next to take a tour, or done to hide this tour.',
      buttons: firstBtn
    },
    {
      id: 'alertStep1',
      title:'Width of Alert',
      text: 'Choose the width of your alert/quote. 25, 50, 75 or 100% (default) of the screen width.',
      attachTo: { element: '#alertStep1', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep2',
      title:'Alert or Quote',
      text: 'An alert is more suited to a reminder or important information. A quote is more suited to a direct quotation from a research article or industry professional. Choosing quote will change the options on the page to include appropriate options for a quote.',
      attachTo: { element: '#alertStep2', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep3',
      title:'Alert/Quote colour',
      text: 'Choose the colour of your quote. In MEDI7100 we have tried to stay consistent with using UQ purple for quotes, and warning yellow or info blue for alerts.',
      attachTo: { element: '#alertStep3', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep4',
      title:'Alert Heading',
      text: 'If you want your alert/quote to have a heading, type the text for that heading here..',
      attachTo: { element: '#alertStep4', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep5',
      title:'Heading Size',
      text: 'If you have typed a heading in the option above, choose a heading size; h2 or h4, or it will not display.',
      attachTo: { element: '#alertStep5', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep6',
      title:'Alert Heading Icon',
      text: 'Choose an icon to go with your heading if you have chosen to have one.',
      attachTo: { element: '#alertStep6', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep7',
      title:'Alert/Quote Text',
      text: 'Type or paste the text for your alert/quote.',
      attachTo: { element: '#alertStep7', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep8',
      title:'Quote Text Size',
      text: 'If you have chosen a quote, this option will appear and you can select if the text will be normal (default), medium, large or extra large.',
      beforeShowPromise: function() {
        return new Promise(function(resolve) {
          // Trigger a button click event
          document.getElementById('alertOrQuote2').click();
          resolve();
        });
      },
      attachTo: { element: '#alertStep8', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep9',
      title:'Citation for Quote',
      text: 'If you have chosen quote this option will appea. Input the citation here, preferably in APA 7th remembering the library has a citation tool.',
      attachTo: { element: '#alertStep9', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'alertStep10',
      title: 'Element Preview',
      text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
      attachTo: { element: '#alertStep10', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'alertStep11',
      title: 'User Tour Complete',
      text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
      attachTo: { element: '#userTourMenu', on: 'top' },
      buttons: finalBtn,
    }
  ]
  //Add above steps to the button builder user tour
alertBuilderTour.addSteps(alertBuilderSteps);

//Set the local storage key for the video builder tour to false
localStorage.setItem(alertBuilderTourCompletionKey, 'false');

document.getElementById('alertBuilderBtn').addEventListener('click', function() {
  if (localStorage.getItem(alertBuilderTourCompletionKey) !== 'true') {
    alertBuilderTour.start();
  }
  else {
    //do nothing    
  }
});
$('#alertBuilderTourRestart').click(function(){
  localStorage.setItem(alertBuilderTourCompletionKey, 'false');
  $('#alertBuilderBtn').click();
});
alertBuilderTour.on('complete', function () {
  localStorage.setItem(alertBuilderTourCompletionKey, 'true');
});

// Tooltip builder tour
var tooltipBuilderTour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    modal: true,
    scrollToHandler: function (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    showCancelLink: true,
    modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
    modalOverlayClosingPadding: 10,
    buttons: []
  },
  useModalOverlay: true,
});
  const tooltipBuilderSteps = [
    {
      id: 'tooltipStep0',
      title: 'Welcome to the User Tour',
      text: 'Welcome to the tooltip/quote builder. Click next to take a tour, or done to hide this tour.',
      buttons: firstBtn
    },
    {
      id: 'tooltipStep1',
      title:'Tooltip Position',
      text: 'Choose the position of your tooltip. This is where the tooltip will appear when the user hovers over the word.',
      attachTo: { element: '#tooltipStep1', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tooltipStep2',
      title:'Tooltip Word',
      text: 'This is the term, acronym or words that your tooltip will attach to.',
      attachTo: { element: '#tooltipStep2', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tooltipStep3',
      title:'Tooltip Text',
      text: 'This is the text that will appear when the user hovers over the term, acronym or words you have typed in the previous step.',
      attachTo: { element: '#tooltipStep3', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tooltipStep4',
      title: 'Element Preview',
      text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
      attachTo: { element: '#tooltipStep4', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'tooltipStep5',
      title: 'User Tour Complete',
      text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
      attachTo: { element: '#userTourMenu', on: 'top' },
      buttons: finalBtn,
    }
  ]
  //Add above steps to the button builder user tour
tooltipBuilderTour.addSteps(tooltipBuilderSteps);

//Set the local storage key for the video builder tour to false
localStorage.setItem(tooltipBuilderTourCompletionKey, 'false');

document.getElementById('tooltipBuilderBtn').addEventListener('click', function() {
  if (localStorage.getItem(tooltipBuilderTourCompletionKey) !== 'true') {
    tooltipBuilderTour.start();
  }
  else {
    //do nothing    
  }
});
$('#tooltipBuilderTourRestart').click(function(){
  localStorage.setItem(tooltipBuilderTourCompletionKey, 'false');
  $('#tooltipBuilderBtn').click();
});
tooltipBuilderTour.on('complete', function () {
  localStorage.setItem(tooltipBuilderTourCompletionKey, 'true');
});

// Table builder tour
var tableBuilderTour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    modal: true,
    scrollToHandler: function (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    showCancelLink: true,
    modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
    modalOverlayClosingPadding: 10,
    buttons: []
  },
  useModalOverlay: true,
});
  const tableBuilderSteps = [
    {
      id: 'tableStep0',
      title: 'Welcome to the User Tour',
      text: 'Welcome to the table builder. Click next to take a tour, or done to hide this tour.',
      buttons: firstBtn
    },
    {
      id: 'tableStep1',
      title:'Table Heading',
      text: 'If your table requires a heading, type the text for it here.',
      attachTo: { element: '#tableStep1', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tableStep2',
      title:'Table Heading Size',
      text: 'If you typed a typed a heading in the previous step, choose a heading size or it will not appear.',
      attachTo: { element: '#tableStep2', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tableStep3',
      title:'First Row Colour',
      text: 'Choose the colour of the first row/header row of the table.',
      attachTo: { element: '#tableStep3', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tableStep4',
      title:'Striped Rows or Columns',
      text: 'Choose to have striped rows or columns to make the table easier to read for users.',
      attachTo: { element: '#tableStep4', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tableStep5',
      title:'Table Modifiers',
      text: 'You can type in row/column numbers and click generate table, or add/remove row columns using the controls below. If you want to copy/paste a table, we suggest copy/pasting from Excel, not Word. If you copy/paste from Word, the majority of the table will likely be deleted due to how we have coded the code centre to handle pasting of content.',
      attachTo: { element: '#tableStep5', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'tableStep6',
      title: 'Element Preview',
      text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
      attachTo: { element: '#tableStep6', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'tableStep7',
      title: 'User Tour Complete',
      text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
      attachTo: { element: '#userTourMenu', on: 'top' },
      buttons: finalBtn,
    }
  ]
  //Add above steps to the button builder user tour
tableBuilderTour.addSteps(tableBuilderSteps);

//Set the local storage key for the video builder tour to false
localStorage.setItem(tableBuilderTourCompletionKey, 'false');

document.getElementById('tableBuilderBtn').addEventListener('click', function() {
  if (localStorage.getItem(tableBuilderTourCompletionKey) !== 'true') {
    tableBuilderTour.start();
  }
  else {
    //do nothing    
  }
});
$('#tableBuilderTourRestart').click(function(){
  localStorage.setItem(tableBuilderTourCompletionKey, 'false');
  $('#tableBuilderBtn').click();
});
tableBuilderTour.on('complete', function () {
  localStorage.setItem(tableBuilderTourCompletionKey, 'true');
});

// Accordion builder tour
var accBuilderTour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    modal: true,
    scrollToHandler: function (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    showCancelLink: true,
    modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
    modalOverlayClosingPadding: 10,
    buttons: []
  },
  useModalOverlay: true,
});
  const accBuilderSteps = [
    {
      id: 'accStep0',
      title: 'Welcome to the User Tour',
      text: 'Welcome to the Accordion builder. Click next to take a tour, or done to hide this tour.',
      buttons: firstBtn
    },
    {
      id: 'accStep1',
      title:'Accordion Name',
      text: 'Each accordion requires a unique name. This connects all the drawers as one accordion. Without a name the accordion drawers will not open when clicked.',
      attachTo: { element: '#accStep1', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'accStep2',
      title:'Accordion Heading',
      text: 'If you require a heading for your accordion, type the text for it here.',
      attachTo: { element: '#accStep2', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'accStep3',
      title:'Heading Size',
      text: 'If you typed a heading in the previous step, choose a size for it here (Purple H2 or Blue H4) or it will not appear.',
      attachTo: { element: '#accStep3', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'accStep4',
      title:'First Drawer Open or Closed?',
      text: 'Choose to have the frist accordion drawer open (defaul) or closed.',
      attachTo: { element: '#accStep4', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'accStep5',
      title:'Drawer Headings and Content',
      text: 'The headings here are what appear on each clickable drawer header, and the content is what appears inside each drawer when the header is clicked.',
      attachTo: { element: '#accStep5', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'accStep6',
      title:'Number of Accordion Drawers',
      text: 'This is the number of drawers you can have within 1 accordion. Minimum 3 > Maximum 10. You can use the +/- buttons or type the number you want in the box. The number of Drawer Headings and Content areas in the previous step will then update.',
      attachTo: { element: '#accStep6', on: 'left' },
      buttons: middleBtn
    },
    {
      id: 'accStep7',
      title: 'Element Preview',
      text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
      attachTo: { element: '#accStep7', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'accStep8',
      title: 'User Tour Complete',
      text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
      attachTo: { element: '#userTourMenu', on: 'top' },
      buttons: finalBtn,
    }
  ]
  //Add above steps to the button builder user tour
accBuilderTour.addSteps(accBuilderSteps);

//Set the local storage key for the video builder tour to false
localStorage.setItem(accBuilderTourCompletionKey, 'false');

document.getElementById('accBuilderBtn').addEventListener('click', function() {
  if (localStorage.getItem(accBuilderTourCompletionKey) !== 'true') {
    accBuilderTour.start();
  }
  else {
    //do nothing    
  }
});
$('#accBuilderTourRestart').click(function(){
  localStorage.setItem(accBuilderTourCompletionKey, 'false');
  $('#accBuilderBtn').click();
});
accBuilderTour.on('complete', function () {
  localStorage.setItem(accBuilderTourCompletionKey, 'true');
});

// Read More builder tour
var readmoreBuilderTour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    modal: true,
    scrollToHandler: function (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollToPosition = window.scrollY + elementRect.top - 6.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    showCancelLink: true,
    modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
    modalOverlayClosingPadding: 10,
    buttons: []
  },
  useModalOverlay: true,
});
  const readmoreBuilderSteps = [
    {
      id: 'readmoreStep0',
      title: 'Welcome to the User Tour',
      text: 'Welcome to the Read More builder. Click next to take a tour, or done to hide this tour.',
      buttons: firstBtn
    },
    {
      id: 'readmoreStep1',
      title:'Read More Button Name',
      text: 'Each Read More Button requires a unique name. This connects all the drawers as one readmoreordion. Without a name the readmoreordion drawers will not open when clicked.',
      attachTo: { element: '#readmoreStep1', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'readmoreStep2',
      title:'Read More Heading',
      text: 'If you require a heading for your Read More section, type the text for it here.',
      attachTo: { element: '#readmoreStep2', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'readmoreStep3',
      title:'Heading Size',
      text: 'If you typed a heading in the previous step, choose a size for it here (Purple H2 or Blue H4) or it will not appear.',
      attachTo: { element: '#readmoreStep3', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'readmoreStep4',
      title:'Pre-button Text',
      text: 'The \'teaser\' text/media goes here to entice the reader to click the read more button.',
      attachTo: { element: '#readmoreStep4', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'readmoreStep5',
      title:'Post-button Text',
      text: 'The text/media that will be revealed once the user clicks the read more button.',
      attachTo: { element: '#readmoreStep5', on: 'right' },
      buttons: middleBtn
    },
    {
      id: 'readmoreStep6',
      title: 'Element Preview',
      text: 'A preview of your element will appear on the right as you update the options on the left. Your code will also update. Once complete click the Copy your code </> button to copy the code for the element ready to paste in Extend.',
      attachTo: { element: '#readmoreStep6', on: 'left' },
      buttons: middleBtn,
    },
    {
      id: 'readmoreStep7',
      title: 'User Tour Complete',
      text: 'The tour is complete. Click done to hide this tour and if you need to revisit it at any point, open it again with this menu in the footer.',
      attachTo: { element: '#userTourMenu', on: 'top' },
      buttons: finalBtn,
    }
  ]
  //Add above steps to the button builder user tour
readmoreBuilderTour.addSteps(readmoreBuilderSteps);

//Set the local storage key for the video builder tour to false
localStorage.setItem(readmoreBuilderTourCompletionKey, 'false');

document.getElementById('readmoreBuilderBtn').addEventListener('click', function() {
  if (localStorage.getItem(readmoreBuilderTourCompletionKey) !== 'true') {
    readmoreBuilderTour.start();
  }
  else {
    //do nothing    
  }
});
$('#readmoreBuilderTourRestart').click(function(){
  localStorage.setItem(readmoreBuilderTourCompletionKey, 'false');
  $('#readmoreBuilderBtn').click();
});
readmoreBuilderTour.on('complete', function () {
  localStorage.setItem(readmoreBuilderTourCompletionKey, 'true');
});
})
