'use strict';

const subdomains = [
    {
        name: 'CV',
        icon: 'fa-solid fa-stream fa-fw',
        link: 'https://cv.mf-chan.com'
    },
    {
        name: 'Research',
        icon: 'fa-solid fa-search fa-fw',
        link: 'https://research.mf-chan.com'
    },
    {
        name: 'Design',
        icon: 'fa-solid fa-folder fa-fw',
        link: 'https://design.mf-chan.com'
    },
    {
        name: 'Code',
        icon: 'fa-solid fa-code fa-fw',
        link: 'https://code.mf-chan.com'
    },
    {
        name: 'Certificate',
        icon: 'fa-solid fa-file fa-fw',
        link: 'https://certificate.mf-chan.com'
    },
    {
        name: 'Animanga',
        icon: 'fa-solid fa-cat fa-fw',
        link: 'https://animanga.mf-chan.com'
    },
];

const hyperlinks = [
    {
        icon: 'fa-brands fa-linkedin fa-fw',
        link: 'https://www.linkedin.com/in/moefc32/'
    },
    {
        icon: 'fa-brands fa-behance fa-fw',
        link: 'https://behance.net/moefc32'
    },
    {
        icon: 'fa-brands fa-dribbble fa-fw',
        link: 'https://dribbble.com/moefc32'
    },
    {
        icon: 'fa-brands fa-github fa-fw',
        link: 'https://github.com/moefc32'
    },
    {
        icon: 'fa-brands fa-medium fa-fw',
        link: 'https://medium.com/@moefc32'
    },
    {
        icon: 'fa-solid fa-envelope fa-fw',
        link: 'mailto:hai@mf-chan.com'
    },


];

const alpineData = () => {
    return {
        date: new Date().getFullYear(),
        subdomains,
        hyperlinks,
        alpineInit: function () {
            if (new Date().getFullYear() > 2018) this.date = '2018 - ' + this.date;
        }
    }
}
