/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3towljh2lqrlko6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "at3tmsqu",
    "name": "Modules",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "21zjr782h7iok53",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3towljh2lqrlko6")

  // remove
  collection.schema.removeField("at3tmsqu")

  return dao.saveCollection(collection)
})
