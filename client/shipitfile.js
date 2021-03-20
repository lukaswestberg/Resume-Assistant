/** ShipIt Continuous Deployment file for RA Client
 * @author Henry Kon <hakon@ncsu.edu>
 */
module.exports = shipit => {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);

    const appName = 'ra-client';

    shipit.initConfig({
        default: {
            workspace: '/tmp/github-monitor',
            deployTo: `~/apps/${appName}`,
            repositoryUrl: 'https://github.com/lukaswestberg/Resume-Assistant.git',
            keepReleases: 2,
            shared: {
                overwrite: true,
                dirs: ['node_modules']
            },
            branch: 'main',
        },
        production: {
            servers: 'henry@rastaging01.aptlogic.xyz'
        }
    });

    // Our listeners and tasks will go here
    shipit.task('start', function() {
        shipit.log('Installing...');
        let promise1 = shipit.remote(`cd ~/apps/${appName}/client && yarn`);
        let promise2 = promise1.then(function(res) {
            shipit.log('Building...');
            shipit.remote(`cd ~/apps/${appName}/client && react-scripts build`);
        });
        promise2.then(function(res) {
            shipit.log('Cleaning up...');
            shipit.remote(
                `pm2 delete -s ${appName} || :`
            )
            shipit.log('Starting...');
            shipit.remote(
                `~/apps/${appName}/client && pm2 serve build 8082 --spa --name ${appName} --watch true`
            );
        });
    })
};