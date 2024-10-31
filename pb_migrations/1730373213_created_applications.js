/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t374s11fbqx7qkz",
    "created": "2024-10-31 11:13:33.205Z",
    "updated": "2024-10-31 11:13:33.205Z",
    "name": "applications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0msvt8qq",
        "name": "Past_Results",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "5ds3bdud",
        "name": "Status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Pending",
            "Accepted",
            "Rejected"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t374s11fbqx7qkz");

  return dao.deleteCollection(collection);
})
