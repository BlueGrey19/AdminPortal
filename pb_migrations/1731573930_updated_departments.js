/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n5djmeng2e09g15")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vc4lwit4",
    "name": "Courses",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n5djmeng2e09g15")

  // remove
  collection.schema.removeField("vc4lwit4")

  return dao.saveCollection(collection)
})
