## Record Schema

```js

const Record = {
    _id: ID, 
    title: String,
    thumbnail: String,
    documents: [Document] ,    
    documentType: DocumentType,  

}

const Document = {
    _id: ID,   
    url: String,
    recordId: ID,
    title: String,
    format: String,
    geometry: JSON,
    source: String,
    publisher: Publisher,
    publishedDate: Date,
    documentType : DocumentType  
}

const DocumentType = {
    _id: ID, 
    category: String,
    subcategory: String,
}

const Publisher = {
    _id: ID, 
    user: User,
    records: [Record],
}

 const User = {
    _id: ID, 
    name: String,
    email: String,
    username: String,
    lastname: String,
    organization: String,
}