## Querys


### Fetch a record by ID
```js
  query($_id: ID!) {
    getRecordById(_id: $_id) {
      title
      documents {
        _id
        source
        url
        documentType {
          _id
          category
          subcategory
        }
        publishedDate
      }
    }
  }
```

### Fetch all of the records and the specified fields

```js
  query {
    getRecords {
      _id
      title
      documentType {
        _id
        category
        subcategory
      }
    }
```

### Fetch the latest document of each record
```js
  query {
    getLatestDocuments {
      documentType {
        _id
        category
        subcategory
      }
      source
      recordId
      url
    }
  }
```