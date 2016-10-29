# Scaffolding
You can use yeoman to create new Skill Clusters and Skills in seconds.

First you need to install yeoman and Node.js Bot Platform generator:

```js
npm i -g yeoman
npm i -g generator-nbp
````

Then just go to the folder where you want to create a new Cluster (for example `cd ./src/bot/clusters/`) and run

```js
yo nbp:cluster

--> ? Enter you new Cluster name: testCluster
--> create testCluster/index.js
--> create testCluster/skills.js
--> create testCluster/decision-tree.js
```

After you should go to created `testCluster` (it would be `src/bot/clusters/testCluster`) and to create a new skill in that cluster run

```js
yo nbp:skill

--> ? Enter you new Skill name testSkill
--> ? Would you like to update skills.js file for current cluster? Yes
-->  conflict skills.js
--> ? Overwrite skills.js? overwrite
-->  force skills.js
--> create skills/testSkill.js
```

Cluster `testCluster` will already include new created with yeoman skills, but still you should edit `decision-tree.js` manually.

### Important
Yeoman will generate `.yo-rc.json` files in generated cluster folders. If you will add them to `.gitignore`, then other members of your team will not be able to use yeoman correctly.