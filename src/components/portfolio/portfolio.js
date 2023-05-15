import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//add in the images for the projects
import Fog from './images/fog.jpg'


const projects = [
    {
        name: "Concert Finder",
        description: "This is a concert finder app that allows you to search for concerts by artist, venue, or city. It also allows you to save concerts to your profile.",
        link: "https://ionscion.github.io/miniature-garbanzo",
        repo: "https://github.com/ionscion/miniature-garbanzo",
        // image:
    },
    {
        name: "Image AI",
        description: "This is an Image AI site that allows you to create an account, a new image with your custom search criteria and then save it to your profile.",
        link: "https://imageai.herokuapp.com/",
        repo: "https://github.com/Nmargolis00/image-AI",
    },
    {
        name: "Weather Dashboard",
        description: "This is a weather tracker site that allows you to search for 5-day weather by city and state.",
        link: "https://nmargolis00.github.io/Weather-Tracker/",
        repo: "https://github.com/Nmargolis00/Weather-Tracker",
        image: {Fog}
    },
    {
        name: "PWA App",
        description: "This is a note taking app that allows you to take notes on and offline",
        link: "https://sheltered-lowlands-74185.herokuapp.com/",
        repo: "https://github.com/Nmargolis00/pwa-text-editor",
    },
    {
        name: "Password Generator",
        description: "This is a password generator site, need a new password? I got you covered.",
        link: "https://nmargolis00.github.io/password-generator/",
        repo: "https://github.com/Nmargolis00/password-generator",
    },
    {
        name: "Day Planner",
        description: "This is a day planning site. to help you plan your day and block time on your calendar.",
        link: "https://nmargolis00.github.io/Day-Planner/",
        repo: "https://github.com/Nmargolis00/Day-Planner",
    },
]

const Portfolio = () => {
    return (
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Portfolio
        </h3>
  
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}
        >
          {projects.map((project, index) => (
            <Card key={index} style={{ width: '18rem' }}>
              <img className="w-full h-60 object-cover" src={projects.image} alt={projects.name} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="site-btn"
                >
                  <Button variant="primary">Check out the site</Button>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="site-btn"
                >
                  <Button variant="primary">See the Repo</Button>
                </a>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;
    
