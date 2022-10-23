'use strict';

const tab = document.querySelector('#tab');
const mobileTab = document.querySelector('#mobile-tab');
const githubApi = 'https://api.github.com/users/moefc32/repos';

const links = [
    {
        name: 'CV',
        icon: 'fa-stream',
        link: 'https://cv.mf-chan.com'
    },
    {
        name: 'Design',
        icon: 'fa-folder',
        link: 'https://design.mf-chan.com'
    },
    {
        name: 'Research',
        icon: 'fa-search',
        link: 'https://research.mf-chan.com'
    },
    {
        name: 'Certificate',
        icon: 'fa-file',
        link: 'https://certificate.mf-chan.com'
    }
];

const bodyData = () => {
    return {
        links,
        githubToggle: false,
        githubRepos: {},
        async retrieveRepos() {
            this.githubRepos = await (await fetch(githubApi)).json();
        }
    }
}
