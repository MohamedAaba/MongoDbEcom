const thisContent =  Query {
    _mongooseOptions: {},
    _transforms: [],
    _hooks: Kareem { _pres: Map(0) {}, _posts: Map(0) {} },
    _executionStack: Error
        at model.Query.exec (/Users/macbookpro/Desktop/bootcamp MERN ARK-x/mongoDB intro/node_modules/mongoose/lib/query.js:4300:28)
        at Query.then (/Users/macbookpro/Desktop/bootcamp MERN ARK-x/mongoDB intro/node_modules/mongoose/lib/query.js:4427:15)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5),
    mongooseCollection: Collection {
      collection: Collection { s: [Object], client: [MongoClient] },
      Promise: [Function: Promise],
      modelName: 'User',
      _closed: false,
      opts: {
        autoIndex: true,
        autoCreate: true,
        autoSearchIndex: false,
        schemaUserProvidedOptions: [Object],
        capped: false,
        Promise: undefined,
        '$wasForceClosed': undefined
      },
      name: 'Users',
      collectionName: 'Users',
      conn: NativeConnection {
        base: [Mongoose],
        collections: [Object],
        models: [Object],
        config: {},
        replica: false,
        options: null,
        otherDbs: [],
        relatedDbs: {},
        states: [Object: null prototype],
        _readyState: 1,
        _closeCalled: undefined,
        _hasOpened: true,
        plugins: [],
        id: 0,
        _queue: [],
        _listening: false,
        _connectionOptions: [Object],
        _connectionString: 'mongodb://localhost:27017/Arkx',
        client: [MongoClient],
        '$initialConnection': [Promise],
        db: [Db],
        host: 'localhost',
        port: 27017,
        name: 'Arkx'
      },
      queue: [],
      buffer: false,
      emitter: EventEmitter {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false
      }
    },
    model: Model { User },
    schema: Schema {
      obj: {
        username: [Object],
        email: [Object],
        password: [Object],
        age: [Object],
        address: [Schema],
        gender: [Object],
        phoneNumber: [Object],
        userId: [Object],
        isVerified: [Object],
        emailToken: [Object],
        avatar: [Object],
        lastLogin: [Function: Date]
      },
      paths: {
        username: [SchemaString],
        email: [SchemaString],
        password: [SchemaString],
        age: [SchemaNumber],
        address: [SchemaSubdocument],
        gender: [SchemaString],
        phoneNumber: [SchemaString],
        userId: [SchemaString],
        isVerified: [SchemaBoolean],
        emailToken: [SchemaString],
        avatar: [SchemaString],
        lastLogin: [SchemaDate],
        _id: [SchemaObjectId],
        createdAt: [SchemaDate],
        __v: [SchemaNumber]
      },
      aliases: {},
      subpaths: {},
      virtuals: { id: [VirtualType] },
      singleNestedPaths: {
        'address.country': [SchemaString],
        'address.city': [SchemaString],
        'address.postalCode': [SchemaString],
        'address.streetName': [SchemaString],
        'address.houseNumber': [SchemaString],
        'address._id': [SchemaObjectId]
      },
      nested: {},
      inherits: {},
      callQueue: [],
      _indexes: [],
      _searchIndexes: [],
      methods: { initializeTimestamps: [Function (anonymous)] },
      methodOptions: {},
      statics: {},
      tree: {
        username: [Object],
        email: [Object],
        password: [Object],
        age: [Object],
        address: [Schema],
        gender: [Object],
        phoneNumber: [Object],
        userId: [Object],
        isVerified: [Object],
        emailToken: [Object],
        avatar: [Object],
        lastLogin: [Function: Date],
        _id: [Object],
        createdAt: [Object],
        __v: [Function: Number],
        id: [VirtualType]
      },
      query: {},
      childSchemas: [ [Object] ],
      plugins: [ [Object], [Object], [Object], [Object] ],
      '$id': 4,
      mapPaths: [],
      s: { hooks: [Kareem] },
      _userProvidedOptions: { timestamps: [Object], collection: 'Users' },
      options: {
        strict: true,
        strictQuery: false,
        bufferCommands: true,
        capped: false,
        versionKey: '__v',
        optimisticConcurrency: false,
        minimize: true,
        autoIndex: null,
        discriminatorKey: '__t',
        shardKey: null,
        read: null,
        validateBeforeSave: true,
        validateModifiedOnly: false,
        _id: true,
        id: true,
        typeKey: 'type',
        timestamps: [Object],
        collection: 'Users',
        pluralization: true
      },
      '$timestamps': { createdAt: 'createdAt', updatedAt: null },
      '$globalPluginsApplied': true
    },
    op: 'findOneAndUpdate',
    options: { new: true },
    _conditions: { userId: '8150014a-1ee2-4671-bb57-f7fed3d86755' },
    _fields: undefined,
    _updateDoc: undefined,
    _path: undefined,
    _distinctDoc: undefined,
    _collection: NodeCollection {
      collection: Collection {
        collection: [Collection],
        Promise: [Function: Promise],
        modelName: 'User',
        _closed: false,
        opts: [Object],
        name: 'Users',
        collectionName: 'Users',
        conn: [NativeConnection],
        queue: [],
        buffer: false,
        emitter: [EventEmitter]
      },
      collectionName: 'Users'
    },
    _traceFunction: undefined,
    '$useProjection': true,
    _update: {
      phoneNumber: '0742748300',
      password: 'aaba',
      '$setOnInsert': { createdAt: 2024-03-04T17:07:00.677Z }
    }
  }