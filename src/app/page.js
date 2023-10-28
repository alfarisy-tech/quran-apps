
'use client';
import React from 'react'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import { Link as NextLink } from 'next/link'
import { Link as ReactScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
export default function Home() {
  return (
    <>
      {/* <Banner /> */ }
      <div>
        <ul>
          <li><ReactScrollLink className='btn ' to="section-1" spy={ true } smooth={ true } offset={ -50 } duration={ 500 }>Section 1</ReactScrollLink></li>
          <li><ReactScrollLink className='btn ' to="section-2" spy={ true } smooth={ true } offset={ -50 } duration={ 500 }>Section 2</ReactScrollLink></li>
          <li><ReactScrollLink className='btn ' to="section-3" spy={ true } smooth={ true } offset={ -50 } duration={ 500 }>Section 3</ReactScrollLink></li>
        </ul>

        <Element name="section-1" className="element">
          <h2>Section 1</h2>
          is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.
        </Element>

        <Element name="section-2" className="element">
          <h2>Section 2</h2>
          is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.        </Element>

        <Element name="section-3" className="element">
          <h2>Section 3</h2>
          is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.is a modern Tailwind CSS component library that provides a rich set of 150+ components for building apps and products. Each component comes with several variations to choose from depending on your needs.

          To start using it, you need to install and configure a Tailwind CSS project. The steps for doing so are explained clearly in the documentation. Like Kutty, Sailboat UI uses Alpine.js by default for dynamic components, but you can use whichever frontend framework you prefer.

          To use Sailboat UI components in your project, you just need to copy, paste, and customize the code for the components you want. The library is great as a foundation of well-styled components, but if you need something more customized and modern-looking, then I recommend picking some other option from this list.
        </Element>
      </div>
    </>
  )
}
