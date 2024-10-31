/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nabwttoqjulsj15",
    "created": "2024-10-31 11:32:02.492Z",
    "updated": "2024-10-31 11:32:02.492Z",
    "name": "marks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "we65oh6w",
        "name": "Student",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5ptr9l34m79z49l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "zarimjxc",
        "name": "Course",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "3towljh2lqrlko6",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nabwttoqjulsj15");

  return dao.deleteCollection(collection);
})
