var generator = require('yeoman-generator');
var path = require('path');
var fs = require('fs');
var uniq = require('lodash').uniq;
var camelCase = require('lodash/camelCase');
var snakeCase = require('lodash/snakeCase');
var kebabCase = require('lodash/kebabCase');
var map = require('lodash/map');

module.exports = generator.Base.extend({
    prompting: function() {
        return this.prompt([
            {
                type: 'input',
                name: 'skillName',
                message: 'Enter you new Skill name',
                default: this.skillName
            },
            {
                type: 'confirm',
                name: 'saveSkills',
                message: 'Would you like to update skills.js file for current cluster?'
            }])
            .then(function(answers) {
                this.answers = answers;
            }.bind(this));
    },

    copyTemplates: function() {
        var skillName = this.answers.skillName;
        var saveSkills = this.answers.saveSkills;

        try {
            fs.statSync(this.destinationPath('skills.js'));
        } catch(error) {
            console.error('You are not in the cluster directory. Can\'t find file \'skills.js\'.');
            process.exit();
        }

        if (saveSkills) {
            var config = this.config.getAll() || {};
            var skills = config.skills || [];
            skills.push(skillName);
            skills = uniq(skills);

            var templateSkills = map(skills, function(skill) {
                return {
                    variable: camelCase(skill),
                    constant: snakeCase(skill).toUpperCase(),
                    filename: kebabCase(skill)
                };
            });

            this.config.set('skills', skills);

            this.fs.copyTpl(
                this.templatePath('skills.tml'),
                this.destinationPath('skills.js'),
                { skills: templateSkills }
            );
        }

        this.fs.copyTpl(
            this.templatePath('skill.tml'),
            this.destinationPath(path.join('skills', kebabCase(skillName) + '.js')),
            { skillName: camelCase(this.answers.skillName) }
        );
    }
});