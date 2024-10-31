/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nabwttoqjulsj15")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3vrvitrc",
    "name": "Module",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "21zjr782h7iok53",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xngxa3ne",
    "name": "Grade",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 101,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nabwttoqjulsj15")

  // remove
  collection.schema.removeField("3vrvitrc")

  // remove
  collection.schema.removeField("xngxa3ne")

  return dao.saveCollection(collection)
})
