/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3towljh2lqrlko6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aohhnikq",
    "name": "Prerequisite_Ave",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3towljh2lqrlko6")

  // remove
  collection.schema.removeField("aohhnikq")

  return dao.saveCollection(collection)
})
