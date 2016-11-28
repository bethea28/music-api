- [ ] `/api/songs` GET all songs
- [ ] `/api/songs/id/:id` GET specific song by id   
  - [Express params docs - Read the 'Route Parameters section'](https://expressjs.com/en/guide/routing.html)
  - [Sequelize 'find' docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#find-search-for-one-specific-element-in-the-database)
  - [Sequelize 'where' docs](http://docs.sequelizejs.com/en/latest/docs/querying/#where)
- [ ] `/api/songs/name/:name` GET specific song by name  
- [ ] `/api/songs/sort/by-date` GET all songs and order by date created
  - [Sequelize Ordering Docs](http://docs.sequelizejs.com/en/latest/docs/querying/#ordering)
- [ ] `api/songs/sort/a-z` GET all songs sorted alphabetically by title
- [ ] `api/songs/count` GET the count of the number of songs in the database
  - [Sequelize count docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#count-count-the-occurrences-of-elements-in-the-database)
- [ ] `api/songs/first-five` GET the first five songs, ordered by date created. You should return exactly five songs.
  - [Sequelize 'limit' docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#manipulating-the-dataset-with-limit-offset-order-and-group)
- [ ] `/api/artists` GET all artists
- [ ] `/api/artists/sort/a-z` GET all artists sorted alphabetically  
- [ ] `/api/artists/id/:id` GET specific artist by id
- [ ] `/api/artists/name/:name` GET specific artist by name
- [ ] `/api/artists/no-jungle` GET all artists except for 'Jungle'
  - [Sequelize complex filtering](http://docs.sequelizejs.com/en/latest/docs/models-usage/#complex-filtering-or-not-queries)
- [ ] `/api/songs-with-artists` GET all songs with artist fully populated (in other words, the full artist information should be displayed, including artist name and id)
  - [Sequelize Relations/Assocations (aka JOIN queries)](http://docs.sequelizejs.com/en/latest/docs/querying/#relations-associations)
  - [How to Make Join Queries in Sequelize](http://stackoverflow.com/questions/20460270/how-to-make-join-querys-using-sequelize-in-nodejs)
- [ ] go back and refactor all of your previous endpoints to include the full artist info
- [ ] `/api/artists/frank-or-chromeo` GET all songs where the artist is either 'Frank Ocean' OR 'Chromeo'
  - [Sequelize complex filtering](http://docs.sequelizejs.com/en/latest/docs/models-usage/#complex-filtering-or-not-queries)
- [ ] `/api/artists` POST (aka create) a new artist
  - [Sequelize 'create' docs](http://docs.sequelizejs.com/en/v3/docs/instances/#creating-persistent-instances)
- [ ] `/api/artists/:id` DELETE an artist
  - [Sequelize 'delete' docs](http://docs.sequelizejs.com/en/v3/docs/instances/#destroying-deleting-persistent-instances)
- [ ] `/api/artists/:id` PUT (update) an artist
  - [Sequelize 'updating' docs](http://docs.sequelizejs.com/en/v3/docs/instances/#updating-saving-persisting-an-instance)
- [ ] `/api/songs` POST a new song. The song should have an id for its artist as the 'artistId' field. In other words, if I created I have a 'Frank Ocean' entry in my 'artists' table that has an id of '1', a new Frank Ocean song would look like `{title: 'Sweet Life', artistId: 1}`. You should use `findOrCreate`to either find or create the artist, then use the id from that artist when you're creating your song:
    - [Sequelize 'findOrCreate' docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#findorcreate-search-for-a-specific-element-or-create-it-if-not-available)