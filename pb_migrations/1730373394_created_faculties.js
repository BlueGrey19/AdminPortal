/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pcmmq3nv3gtuilv",
    "created": "2024-10-31 11:16:34.935Z",
    "updated": "2024-10-31 11:16:34.935Z",
    "name": "faculties",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rdezw7ny",
        "name": "Name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eohbfcfu",
        "name": "Undergrad_Code",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "aekonee2",
        "name": "Postgrad_Code",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("pcmmq3nv3gtuilv");

  return dao.deleteCollection(collection);
})
