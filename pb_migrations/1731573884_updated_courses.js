/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3towljh2lqrlko6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jmbaosde",
    "name": "Department",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n5djmeng2e09g15",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3towljh2lqrlko6")

  // remove
  collection.schema.removeField("jmbaosde")

  return dao.saveCollection(collection)
})
