// Sample data
const imageData = [
    { title: "Web Development Berkeley", description: "Web Development @ Berkeley (WDB) is UC Berkeley’s Premier Web Design and Development organization. They are a group of students focusing on building the web development and design community.", imageUrl: "images/WDB.png", linkUrl: "https://www.webatberkeley.org/" },
    { title: "Codebase", description: "Codebase is a community of developers that empowers students to break into the software industry.", imageUrl: "images/Codebase.png", linkUrl: "https://codebase.studentorg.berkeley.edu/" },
    { title: "Formula Electric Berkeley", description: "They are a tight-knit group of students who participate in the yearly FSAE EV Competition which takes place in Michigan. The competition involves building, testing, and racing a formula-style electric vehicle as well as completing a consulting-style analysis on the costs associated with producing the vehicle.", imageUrl: "images/FEB.png", linkUrl: "https://ev.studentorg.berkeley.edu/" },
    { title: "Berkeley Formula Racing", description: "Formula SAE is an international engineering design competition that provides college students with the unique opportunity to enhance their engineering design and project management skills through practical application. They create a formula-style, single-seat race car over the course of a school year in order to participate in Competition every May.", imageUrl: "images/Formula1.png", linkUrl: "https://fsae.studentorg.berkeley.edu/" },
    { title: "BARE", description: "BARE Magazine, UC Berkeley’s premier fashion, arts, and lifestyle publication, is a foundational organization within the UC Berkeley community. Our mission is to foster an inclusive and self-expressed community on the UC Berkeley campus, to effectively offer valuable work experience to students, and to encourage and acknowledge the creative power of UC Berkeley students.", imageUrl: "images/Bare.png", linkUrl: "https://baremagazine.org/" },
    { title: "SUPERB", description: "Founded in 1964, they are dedicated to providing entertainment for the campus and community through the work of our nine departments: General Management, Concerts, Games, Films, Sneak Previews, Comedy, Marketing, Photography, and Art & Design. Our 100-person production team is composed entirely of undergraduate students who are passionate about bringing great entertainment to the UC Berkeley campus and community.", imageUrl: "images/Superb.png", linkUrl: "https://www.superb.berkeley.edu/" },
    { title: "Berkeley Consulting", description: "For over 28 years, Berkeley Consulting has been an advisor to a broad range of organizations, from Fortune 500 companies to start-ups and non-profits. Started in 1996 with the mission of gathering the brightest minds on campus and putting them to use solving pressing real-world issues, Berkeley Consulting has grown to be a trusted partner for some of the biggest names across industry. They have developed an experience that cultivates not only our members’ consulting abilities but a career-agnostic understanding of problem-solving that they carry with them into tech, banking, and public service.", imageUrl: "images/BerkeleyConsulting.png", linkUrl: "https://bc.studentorg.berkeley.edu/" },
    { title: "Voyager Consulting", description: "Voyager Consulting is a student-run, business organization that provides strategy consulting services to growth stage and Fortune 500 companies. Based in UC Berkeley, our consultants hail from diverse backgrounds and go through a rigorous selection and training process in order to deliver the best quality work to our clients.", imageUrl: "images/Voyager.png", linkUrl: "https://www.voyagerconsulting.org/" },

    // Add more image data as needed
];

// Function to dynamically create grid cells
function createGridCells() {
    const gridContainer = document.querySelector('.grid');
    imageData.forEach(data => {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        const image = document.createElement('img');
        image.src = data.imageUrl;
        image.alt = data.title;
        const title = document.createElement('h3');
        title.textContent = data.title;
        const description = document.createElement('p');
        description.textContent = data.description;

        const link = document.createElement('a');
        link.href = data.linkUrl;
        link.appendChild(image);

        cell.appendChild(link);
        cell.appendChild(title);
        cell.appendChild(description);

        gridContainer.appendChild(cell);
    });
}

// Call the function to create grid cells when the page loads
window.onload = createGridCells;
