# Contribution Guidelines
Thank you for wanting to contribute!
Please note that this project is released with a [Contributor Code of Conduct](Code-of-Conduct.md). By participating in this project you agree to abide by its terms.

You'll need a [GitHub account](https://github.com/join)!


## Documentation
If you have something awesome to contribute, then

1. Fork the repository
2. Make the required changes by editing the README.md .

## Application
- Fork the repository on GitHub
- Clone the repo
  - `git clone https://github.com/{Github-UserName}/Teams-clone.git` 
- Install the Project Dependencies
  - `npm install`
- Run 
  - `npm run dev` 
- Local Host
  - `http://localhost:3000/`
- Before that you have to make a keys.js file in config folder which contain your database details like this:
  `module.exports = { MongoURI : 'mongodb+srv://<user>:password@cluster08451.am7f4.mongodb.net/<name of database>?retryWrites=true&w=majority' }`


## Make all the changes based on the issue

## Commit message

Please follow the below format while writing commit messages

```bash
  title: One line description about your change
  <Blank Line>
  description: An optional description of your changes.
```

## NOTE
 1. **Include only one commit in each of your pull requests.**
 
 2. Attach screenshots whenever any changes are made to the design, stylesheets, layout etc. of the website.
 
 3. All PRs to be made in the main branch only.
 
 
## Creating and Addressing Issues
 If you have an issue, please go through the existing issues/PRs and see if it has already been/is being addressed. If not, you may create a new issue. Please make sure to describe your issue properly. 
 
 
You can also contribute by addressing and commenting on issues, providing your suggestions on them. :)
