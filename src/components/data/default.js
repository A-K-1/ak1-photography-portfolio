const data = {}

data.links = {
  instagramLogo: require('../../../public/instagramWhite.png'),
  instagramLink: 'https://www.instagram.com/ak1photography/',
}

data.navBar = {
  logo: require('../../../public/whiteLogo.png'),
}

data.hero = {
  leftImage: require('../../../public/portraitHero.jpg'),
  rightImage: require('../../../public/portraitHero2.jpg'),
  mobileImage: require('../../../public/portraitHeroMobile.jpg'),
  mobileImageNarrow: require('../../../public/portraitHeroMobileNarrow.jpg'),
}

data.aboutMe = {
  image: require('../../../public/aboutMe/aboutMe.jpg'),
  body: `Hi, I’m Arron! Welcome to the world of AK1. As a photographer I’m always looking to enhance my style to capture specific moods and emotions in search of the perfect composition. 

  From a young age my love of nature and the outdoors has always transcended. I took my very first shots with a vintage compact camera, handed down to me from my Dad. I began taking pictures of anything and everything that caught my eye- from landscapes to costumed theme park actors. My camera helped me showcase my creative flair and this is where my journey as a photographer began.
  
  On my 20th birthday I got my very own DSLR camera. I began experimenting further with landscape and portrait photography and developing my brand: AK1photography. My journey as a professional  photographer began 4 years ago and I’ve never looked back.
      
  Photography is my passion and I hope to share that with you so feel free to view my portfolio and inquire if you are interested in a shoot. I always go above and beyond to ensure my clients are satisfied.`,
}

data.portfolio = [
  {
    header: 'Landscapes',
    image: require('../../../public/portfolio/landscapePortfolio.jpg'),
  },
  {
    header: 'Portraits',
    image: require('../../../public/portfolio/portraitPortfolio.jpg'),
  },
  {
    header: 'Cityscapes',
    image: require('../../../public/portfolio/cityscapePortfolio.jpg'),
  },
  {
    header: 'Events',
    image: require('../../../public/portfolio/eventsPortfolio.jpg'),
  },
  {
    header: 'Wildlife',
    image: require('../../../public/portfolio/animalsPortfolio.jpg'),
  },
  {
    header: 'Edits',
    image: require('../../../public/portfolio/editsPortfolio.jpg'),
  },
]

data.testimonials = [
  {
    name: 'Kate',
    body: `My name is Kate. I used to work with a model agency, before I realized that I want to collaborate with photographers directly and realize some of the ideas I had on my mind, to work in team with photographer and to take equal part in the shooting process. I worked as a freelance model for one year in Russia and then started to travel just to meet new people,to discover the attitude to photography and to see how this field looks like in different places of the world. 
    
    On my way I was lucky to meet Arron in London. I accidentally came across his page and really liked the style of his works. Then just texted him and suggested collaboration. We discussed the idea of the shooting, the details and location. I am always surprised when I meet such enthusiastic people. It’s a great pleasure to work wIth someone who is as passionate about the photography as I am! With people like that time usually flies during the shooting. And in this case it was exactly like that! Even though we had to do a long way to the chosen location and after even longer way to the second location, I didn’t notice how the time passed by. That’s what I really appreciate! And of course, after I’ve got photos which I absolutely love!`,
    image: require('../../../public/testimonials/kate.jpg'),
  },
  {
    name: 'Norman',
    body: `Three words to sum up working with this photographer:

    Focused, friendly, and Imaginative.

    Prior to the shoot, he had done his due diligence. We had decided to shoot in Canary Wharf, and from the jump, he knew where was best for particular styled pictures.

    He had a keen eye for attention to detail - which locations had the best lighting, or matched the effect of the mood and expressions I was trying to create. In that sense, he is a visionary.

    But above all, he was a really fun person to work with. The time of the shoot flew by: he knew what he was doing, and kept the proceedings fun and engaging at all times.

    I would highly recommend him to anyone out there!`,
    image: require('../../../public/testimonials/norman.jpg'),
  },
  {
    name: 'Saori',
    body: `Arron is a kind friendly guy who you would want to work together again and again, it's simply because his skill is amazing and very professional. He knows what to do, and having many ideas so never have the "wasted" time, always efficient and even after the shooting he always gives me datas on the day or next day... Very respectful. Always great to work with him!!`,
    image: require('../../../public/testimonials/saori.jpg'),
  },
  {
    name: 'Sammie',
    body: `For 2 years now I have been working with a range of photographers building and updating my modeling portfolio, Working with Arron has always been an enjoyable experience. It’s a calm and sociable dynamic and he’s open to ideas, as well as offering delivering his own.
    I’ve never felt uncomfortable or found Arron to be unreliable, he’s a guy with talent and professionalism`,
    image: require('../../../public/testimonials/sammie.jpg'),
  },
  {
    name: 'Elis',
    body: `It was a  pleasure to work together with Arron. He manages to create a very relaxing and fun atmosphere for the model and delivers amazing shots!`,
    image: require('../../../public/testimonials/elis.jpg'),
  },
  {
    name: 'Georgia',
    body: `I really enjoyed working with Arron. He put me at ease straight away, and it's clear he's really passionate about what he does. His work speaks for itself. I'd love to work with him again 🙌✨`,
    image: require('../../../public/testimonials/georgia.jpg'),
  },

  {
    name: 'Mass',
    body: `I’ve worked with Arron a few times now. He’s a great guy to be around, the photos are always of the highest quality and he delivers them fast!`,
    image: require('../../../public/testimonials/mass.jpg'),
  },
]

data.footer = {
  text: `© AK1Photography 2021`,
}
export default data
