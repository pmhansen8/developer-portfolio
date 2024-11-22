import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Byte Fight AI',
        description: "Building Byte Fight AI, A game where you can build an AI bot to fight against others. Leveraged technologies like Java, Spring Boot, and Gradle to develop a robust backend, with JUnit ensuring reliable testing and functionality. Focused on creating an engaging and scalable environment for AI-driven gameplay.",
        tools: ['Java', 'Spring Boot','Gradle', 'JUNIT'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Guess The Price',
        description: 'Developed an interactive web application using React and Node.js where users guess the price of items, featuring personalized experiences through cookies for user settings and session persistence. Integrated OpenAI’s ChatGPT API to provide gameplay hints, enhancing user engagement and assistance. Collaborated with a team of five students using Git for version control to manage and maintain the shared repository effectively.',
        tools: ['TypeScript','REACT','FireBase','Node.js', 'HTML', 'CSS', 'GIT', 'OpenAI API'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Chow Choice',
        description: 'Developed an intuitive web application that helps users discover nearby restaurants tailored to their preferences. Leveraged technologies like TypeScript, React, and Firebase for a seamless user experience, and Node.js for efficient backend processes. Integrated the OpenAI API for intelligent recommendations and the Google Maps API for location-based services. Designed with a responsive layout using HTML and CSS and ensured smooth collaboration with Git version control.',
        tools: ['TypeScript','React','FireBase','Node.js', 'HTML', 'CSS', 'Git', 'OpenAI API', 'Google Map Api'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Chart App',
        description: "Developed a dynamic chart application using Alpha Charts, Next.js, and Django, integrating Axios for seamless user data input and chart generation. Connected the frontend to a Django backend for efficient data handling and API communication.",
        tools: ['Type Script', 'React','Django', 'Python', 'Axios', 'Alpha Chart'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },