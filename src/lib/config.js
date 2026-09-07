import { UserRound, Search, Brush, Code, MessageSquareQuote, FileBadge } from '@lucide/svelte';
const siteName = `Faizal Chan's Website`;

export const metadata = {
    siteName,
    title: siteName,
    description: 'A multidisciplinary problem solver working across disciplines to identify root causes and shape practical, well-structured solutions.',
    type: 'website',
};

export const subsites = [
    {
        name: 'Research',
        tooltip: 'Problem framing',
        icon: Search,
        link: 'https://research.mf-chan.com',
    },
    {
        name: 'Design',
        tooltip: 'Solution shaping',
        icon: Brush,
        link: 'https://design.mf-chan.com',
    },
    {
        name: 'Code',
        tooltip: 'Implementation',
        icon: Code,
        link: 'https://code.mf-chan.com',
    },
    {
        name: 'Mentor',
        tooltip: 'Mentorship activities',
        icon: MessageSquareQuote,
        link: 'https://mentor.mf-chan.com',
    },
    {
        name: 'Certificate',
        tooltip: 'Verified achievements',
        icon: FileBadge,
        link: 'https://certificate.mf-chan.com',
    },
];

export const tabs = [
    {
        name: 'Intro',
        icon: UserRound,
    },
    ...subsites,
];
