var generator = require('yeoman-generator');

module.exports = generator.Base.extend({
    prompting: function() {
        console.log('You can run \'yo nbp:cluster\' to create Cluster in current folder. Or \'yo nbp:skill\' to create a new Skill in current folder.');
    }
});
