# Vote-forum (Reddit Clone w/ Redux)

## By Daniel Ware & Joseph Jack

### Description
Reddit style forum site. Created for practice and utilizing redux to handle local and shared state. Users can add a new posts, edit, and delete. Users can see the full list of posts and after selecting one can choose to upvote or downvote that post.

### Diagram

<div style="display: flex; justify-content: center"><img src="/diagram.png"></div>



## Behavior / Logistics

| | |
|--------|--------|
| :ballot_box_with_check: | Basic static site build with necessary components|
| :ballot_box_with_check: | User can enter content into a form and submit to create a new post |
| :ballot_box_with_check: | User can see all other posts in a list |
| :ballot_box_with_check: | User can downvote / upvote posts |
| :ballot_box_with_check: | New posts will include a timestamp |
|  | Posts with the most upvotes will appear higher on the page |

----------
## Goals

|  |  |
|----|----|
| :ballot_box_with_check: | A user can only upvote or downvote a post once |
| :ballot_box_with_check: | Add action types and constants |
| :ballot_box_with_check: | Style page / card or grid - centered |
|  | Reducer added for selectedpost|


## Technologies Used

- React
- Redux


## Known Bugs

- Issue with typography import from MUI Material. Still work in progress.
- Edit form does not autopopulate with previous data.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



