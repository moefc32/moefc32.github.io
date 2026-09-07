import { metadata, subsites } from '../lib/config';

export async function GET() {
    const content = [
        `# ${metadata.title}`,
        '',
        `> ${metadata.description}`,
        '',
        '## Subsites',
        '',
        ...subsites.map(item => [
            `- [${item.name}](${item.link})`,
        ].join('\n')),
    ].join('\n');

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
