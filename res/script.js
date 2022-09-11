'use strict';

const tab = document.querySelector('#tab');
const mobileTab = document.querySelector('#mobile-tab');

const links = {
    'CV': [
        'fa-stream',
        'https://cv.mf-chan.com'
    ],
    'Design': [
        'fa-folder',
        'https://design.mf-chan.com'
    ],
    'Research': [
        'fa-search',
        'https://research.mf-chan.com'
    ],
    'Certificate': [
        'fa-file',
        'https://certificate.mf-chan.com'
    ],
};

function tabInject(title, icon, url) {
    let item = '<li><a href="' + url + '" target="_blank">\n';
    item += '<i class="fas ' + icon + ' fa-fw"></i> ' + title + '\n';
    item += '</a></li>\n';

    tab.innerHTML += item;
}

function mobileTabInject(title, url) {
    let item = '<a href="' + url + '" target="_blank">\n';
    item += '<span>' + title + '</span>\n';
    item += '</a>\n';

    mobileTab.innerHTML += item;
}

for (let link in links) {
    tabInject(link, links[link][0], links[link][1]);
    mobileTabInject(link, links[link][1]);
}
