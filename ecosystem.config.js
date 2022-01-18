module.exports = {
    apps: [
        {
            name: 'lab-services',
            script: './bin/www',
            watch: ['bin', 'public', 'routes', 'app.js'],
            ignore_watch: ['node_modules'],
            node_args: '--experimental-specifier-resolution=node --trace-warnings',
        },
    ],
}
