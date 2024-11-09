// Project data
const projects = [
    {
        id: 'ai-project',
        title: 'AI-Powered Task Manager',
        description: 'A smart task management system using machine learning for task prioritization.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        category: 'ai',
        technologies: ['Python', 'TensorFlow', 'FastAPI'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://demo.com'
    },
    {
        id: 'ecommerce',
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        category: 'web',
        technologies: ['JavaScript', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://demo.com'
    }
    // Add more projects as needed
];

// Load and filter projects
document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'all') {
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);

        projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card" id="${project.id}">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.githubUrl}" target="_blank"><i class="fab fa-github"></i> Code</a>
                        <a href="${project.liveUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Initial render
    renderProjects();

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });
});