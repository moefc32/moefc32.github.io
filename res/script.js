'use strict';

const githubApi = 'https://api.github.com/users/moefc32/repos';

const subdomains = [
    {
        name: 'CV',
        icon: 'fas fa-stream fa-fw',
        link: 'https://cv.mf-chan.com'
    },
    {
        name: 'Design',
        icon: 'fas fa-folder fa-fw',
        link: 'https://design.mf-chan.com'
    },
    {
        name: 'Research',
        icon: 'fas fa-search fa-fw',
        link: 'https://research.mf-chan.com'
    },
    {
        name: 'Certificate',
        icon: 'fas fa-file fa-fw',
        link: 'https://certificate.mf-chan.com'
    }
];

const hyperlinks = [
    {
        icon: 'fab fa-linkedin fa-fw',
        link: 'https://www.linkedin.com/in/moefc32/'
    },
    {
        icon: 'fab fa-behance fa-fw',
        link: 'https://behance.net/moefc32'
    },
    {
        icon: 'fab fa-dribbble fa-fw',
        link: 'https://dribbble.com/moefc32'
    },
    {
        icon: 'fab fa-github fa-fw',
        link: 'https://github.com/moefc32'
    },
    {
        icon: 'fab fa-medium fa-fw',
        link: 'https://medium.com/@moefc32'
    },
    {
        icon: 'fas fa-envelope fa-fw',
        link: 'mailto:hai@mf-chan.com'
    },

    
];

const bodyData = () => {
    return {
        subdomains,
        hyperlinks,
        githubToggle: false,
        githubRepos: {},
        async retrieveRepos() {
            this.githubRepos = await (await fetch(githubApi)).json();
        }
    }
}
