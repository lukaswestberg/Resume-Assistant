/** ShipIt Continuous Deployment file for RA Client
 * @author Henry Kon <hakon@ncsu.edu>
 */
module.exports = shipit => {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);

    const appName = 'ra-client';

    shipit.initConfig({
        default: {
            deployTo: '/home/henry/ra-client',
            repositoryUrl: 'https://github.com/lukaswestberg/Resume-Assistant.git',
            keepReleases: 5,
            shared: {
                overwrite: true,
                dirs: ['node_modules']
            }
        },
        production: {
            servers: 'henry@rastaging01.aptlogic.xyz'
        }
    });

    // Our listeners and tasks will go here
    shipit.on('updated', async () => {
        shipit.start('yarn-install', 'copy-config');
    });

    shipit.on('published', async () => {
        shipit.start('pm2-server');
    });

    shipit.blTask('yarn-install', async () => {
        shipit.remote(`cd ${shipit.releasePath} && yarn add --production`);
    });

    shipit.blTask('pm2-server', async () => {
        await shipit.remote(`pm2 delete -s ${appName} || :`);
        await shipit.remote(
            `react-scripts build`
            `pm2 serve build 8082 --spa --name ${appName} --watch true`
        );
    });
};