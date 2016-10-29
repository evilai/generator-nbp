var generator = require('yeoman-generator');
var path = require('path');

module.exports = generator.Base.extend({
    prompting: function() {
        return this.prompt([
            {
                type: 'input',
                name: 'clusterName',
                message: 'Enter you new Cluster name',
                default: this.clusterName
            }])
            .then(function(answers) {
                this.answers = answers;
            }.bind(this));
    },

    copyTemplates: function() {
        const clusterName = this.answers.clusterName;
        this.fs.copyTpl(
            this.templatePath('index.tml'),
            this.destinationPath(path.join(clusterName, 'index.js')),
            this.answers
        );

        this.fs.copyTpl(
            this.templatePath('skills.tml'),
            this.destinationPath(path.join(clusterName, 'skills.js')),
            this.answers
        );

        this.fs.copyTpl(
            this.templatePath('decision-tree.tml'),
            this.destinationPath(path.join(clusterName, 'decision-tree.js')),
            this.answers
        );

        this.fs.copyTpl(
            this.templatePath('yo-rc.tml'),
            this.destinationPath(path.join(clusterName, '.yo-rc.json')),
            this.answers
        );
    }
});