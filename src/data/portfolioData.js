export const projects = [
    {
        id: 'ride-share',
        title: 'Ride Sharing Simulation',
        category: 'Major Projects',
        date: 'Apr 2025', // Added date
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop', // Add screenshot URLs here
        description: 'A dynamic ride-sharing platform enabling real-time booking with secure user authentication and an admin dashboard.',
        keyFeatures: [ // Added specific bullet points
            'Engineered a scalable platform using MERN stack with real-time tracking.',
            'Integrated secure JWT user authentication and role-based access.',
            'Designed responsive UI with React-Bootstrap and dynamic state management.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
        github: 'https://github.com/yourusername/ride-share',
        liveUrl: '#',
    },
    {
        id: 'expense-manager',
        title: 'Financial Expense App',
        category: 'Major Projects',
        date: 'Feb 2026',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
        description: 'A comprehensive financial management tool allowing users to track expenses, categorize spending, and visualize data.',
        keyFeatures: [
            'Built custom REST APIs for secure data logging and retrieval.',
            'Implemented data visualization dashboards for user spending habits.',
            'Streamlined deployment using Render and Vercel.'
        ],
        technologies: ['React.js', 'Express.js', 'MongoDB', 'Chart.js'],
        github: 'https://github.com/yourusername/expense-manager',
        liveUrl: '#',
    },
    {
        id: 'ipl-predictor',
        title: 'IPL Score Predictor',
        category: 'Minor Projects',
        date: 'Dec 2025',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop',
        description: 'A machine learning predictive model analyzing historical cricket data to forecast match outcomes with high accuracy.',
        keyFeatures: [
            'Trained a predictive model using Scikit-learn on a massive dataset.',
            'Utilized Pandas for complex data cleaning and feature engineering.',
            'Achieved a high accuracy rate in simulating score outcomes.'
        ],
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
        github: 'https://github.com/yourusername/ipl-predictor',
        liveUrl: '#',
    }
];

