export const schema = {
    "models": {
        "Page": {
            "syncable": true,
            "name": "Page",
            "pluralName": "Pages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "page_name": {
                    "name": "page_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "page_mode": {
                    "name": "page_mode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date_created": {
                    "name": "date_created",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "enums": {},
    "version": "e7387611a5612873d77fc24b2ee17a11"
};