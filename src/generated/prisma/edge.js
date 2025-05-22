
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  User_ID: 'User_ID',
  User_last_name: 'User_last_name',
  User_first_name: 'User_first_name',
  User_email: 'User_email',
  User_phone: 'User_phone',
  User_password: 'User_password',
  User_role: 'User_role',
  User_create_at: 'User_create_at',
  User_update_at: 'User_update_at'
};

exports.Prisma.CarScalarFieldEnum = {
  Car_ID: 'Car_ID',
  Car_list: 'Car_list'
};

exports.Prisma.ServiceScalarFieldEnum = {
  Service_ID: 'Service_ID',
  Service_name: 'Service_name',
  Service_description: 'Service_description',
  Service_price: 'Service_price',
  Service_duration_min: 'Service_duration_min'
};

exports.Prisma.BonusScalarFieldEnum = {
  Bonus_ID: 'Bonus_ID',
  Bonus_point: 'Bonus_point',
  Bonus_type: 'Bonus_type',
  Bonus_user_ID: 'Bonus_user_ID'
};

exports.Prisma.Multi_branchScalarFieldEnum = {
  Multi_branch_ID: 'Multi_branch_ID',
  Multi_branch_name: 'Multi_branch_name',
  Multi_branch_address: 'Multi_branch_address',
  Multi_branch_phone: 'Multi_branch_phone',
  Multi_branch_email: 'Multi_branch_email',
  Multi_branch_opening_hours: 'Multi_branch_opening_hours',
  Multi_branch_create_at: 'Multi_branch_create_at',
  Multi_branch_update_at: 'Multi_branch_update_at'
};

exports.Prisma.CommitScalarFieldEnum = {
  Commit_ID: 'Commit_ID',
  Commit_text: 'Commit_text',
  Commit_review: 'Commit_review',
  Commit_entity_id: 'Commit_entity_id',
  Commit_entity_name: 'Commit_entity_name',
  Commit_create_at: 'Commit_create_at',
  Commit_user_ID: 'Commit_user_ID'
};

exports.Prisma.NotificationScalarFieldEnum = {
  Notification_ID: 'Notification_ID',
  Notification_text: 'Notification_text',
  Notification_is_read: 'Notification_is_read',
  Notification_create_at: 'Notification_create_at',
  Notification_user_ID: 'Notification_user_ID'
};

exports.Prisma.OTPScalarFieldEnum = {
  OTP_ID: 'OTP_ID',
  OTP_code: 'OTP_code',
  OTP_type: 'OTP_type',
  OTP_status: 'OTP_status',
  OTP_create_at: 'OTP_create_at',
  OTP_expires_at: 'OTP_expires_at',
  OTP_user_ID: 'OTP_user_ID'
};

exports.Prisma.HistoryScalarFieldEnum = {
  History_ID: 'History_ID',
  History_bonus: 'History_bonus',
  History_price: 'History_price',
  History_status: 'History_status',
  History_create_at: 'History_create_at',
  History_multi_branch_ID: 'History_multi_branch_ID',
  History_user_ID: 'History_user_ID',
  History_service_ID: 'History_service_ID',
  History_register_car: 'History_register_car',
  History_register_service_ID: 'History_register_service_ID',
  carCar_ID: 'carCar_ID'
};

exports.Prisma.Register_carScalarFieldEnum = {
  Register_car_ID: 'Register_car_ID',
  Register_car_manufacturer: 'Register_car_manufacturer',
  Register_car_mark: 'Register_car_mark',
  Register_car_year: 'Register_car_year',
  Register_car_vin: 'Register_car_vin',
  Register_car_status: 'Register_car_status',
  Register_car_create_at: 'Register_car_create_at',
  Register_car_update_at: 'Register_car_update_at',
  Register_car_user_ID: 'Register_car_user_ID'
};

exports.Prisma.Register_serviceScalarFieldEnum = {
  Register_service_ID: 'Register_service_ID',
  Register_service_scheduled: 'Register_service_scheduled',
  Register_service_time_list: 'Register_service_time_list',
  Register_service_status: 'Register_service_status',
  Register_service_create_at: 'Register_service_create_at',
  Register_service_update_at: 'Register_service_update_at',
  Register_service_user_ID: 'Register_service_user_ID',
  Register_service_car: 'Register_service_car',
  Register_service_service_ID: 'Register_service_service_ID',
  Register_service_multi_branch_ID: 'Register_service_multi_branch_ID'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.User_role_enum = exports.$Enums.User_role_enum = {
  ADMIN: 'ADMIN',
  MECHANIC: 'MECHANIC',
  CUSTOMER: 'CUSTOMER'
};

exports.Bonus_type_enum = exports.$Enums.Bonus_type_enum = {
  REFERRAL: 'REFERRAL',
  LOYALTY: 'LOYALTY',
  PROMO: 'PROMO'
};

exports.OTP_status_enum = exports.$Enums.OTP_status_enum = {
  PENDING: 'PENDING',
  USED: 'USED',
  EXPIRED: 'EXPIRED'
};

exports.OTP_type_enum = exports.$Enums.OTP_type_enum = {
  VERIFICATION: 'VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

exports.History_status_enum = exports.$Enums.History_status_enum = {
  OPEN: 'OPEN',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.Register_car_status_enum = exports.$Enums.Register_car_status_enum = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  STOLEN: 'STOLEN'
};

exports.Register_service_status_enum = exports.$Enums.Register_service_status_enum = {
  SCHEDULED: 'SCHEDULED',
  DONE: 'DONE',
  NO_SHOW: 'NO_SHOW'
};

exports.Prisma.ModelName = {
  User: 'User',
  Car: 'Car',
  Service: 'Service',
  Bonus: 'Bonus',
  Multi_branch: 'Multi_branch',
  Commit: 'Commit',
  Notification: 'Notification',
  OTP: 'OTP',
  History: 'History',
  Register_car: 'Register_car',
  Register_service: 'Register_service'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\Auto-Service_API\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "E:\\Auto-Service_API\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://postgres:0403@localhost:5432/Auto-Service_DB?schema=public"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// ─── ENUMS ────────────────────────────────────────────────────────────────\n\nenum User_role_enum {\n  ADMIN\n  MECHANIC\n  CUSTOMER\n}\n\nenum Bonus_type_enum {\n  REFERRAL\n  LOYALTY\n  PROMO\n}\n\nenum OTP_status_enum {\n  PENDING\n  USED\n  EXPIRED\n}\n\nenum OTP_type_enum {\n  VERIFICATION\n  PASSWORD_RESET\n}\n\nenum History_status_enum {\n  OPEN\n  COMPLETED\n  CANCELLED\n}\n\nenum Register_car_status_enum {\n  ACTIVE\n  INACTIVE\n  STOLEN\n}\n\nenum Register_service_status_enum {\n  SCHEDULED\n  DONE\n  NO_SHOW\n}\n\n// ─── MODELS ───────────────────────────────────────────────────────────────\n\nmodel User {\n  User_ID         Int            @id @default(autoincrement()) @map(\"User_ID\")\n  User_last_name  String         @map(\"User_last_name\")\n  User_first_name String         @map(\"User_first_name\")\n  User_email      String         @unique @map(\"User_email\")\n  User_phone      String?        @map(\"User_phone\")\n  User_password   String         @map(\"User_password\")\n  User_role       User_role_enum @default(CUSTOMER) @map(\"User_role\")\n  User_create_at  DateTime       @default(now()) @map(\"User_create_at\")\n  User_update_at  DateTime       @updatedAt @map(\"User_update_at\")\n\n  Bonus            Bonus[]            @relation(\"UserBonuses\")\n  Notification     Notification[]     @relation(\"UserNotifications\")\n  Commit           Commit[]           @relation(\"UserCommits\")\n  OTP              OTP[]              @relation(\"UserOTPs\")\n  Register_car     Register_car[]     @relation(\"UserRegisterCars\")\n  Register_service Register_service[] @relation(\"UserRegisterServices\")\n  History          History[]          @relation(\"UserHistories\")\n}\n\nmodel Car {\n  Car_ID   Int     @id @default(autoincrement()) @map(\"Car_ID\")\n  Car_list String? @map(\"Car_list\")\n\n  Register_service Register_service[] @relation(\"CarServices\")\n  History          History[]\n}\n\nmodel Service {\n  Service_ID           Int     @id @default(autoincrement()) @map(\"Service_ID\")\n  Service_name         String  @map(\"Service_name\")\n  Service_description  String? @map(\"Service_description\")\n  Service_price        Float   @map(\"Service_price\")\n  Service_duration_min Int     @map(\"Service_duration_min\")\n\n  Register_service Register_service[] @relation(\"ServiceBookings\")\n  History          History[]          @relation(\"ServiceHistories\")\n}\n\nmodel Bonus {\n  Bonus_ID      Int             @id @default(autoincrement()) @map(\"Bonus_ID\")\n  Bonus_point   Int             @map(\"Bonus_point\")\n  Bonus_type    Bonus_type_enum @map(\"Bonus_type\")\n  Bonus_user_ID Int             @map(\"Bonus_user_ID\")\n  User          User            @relation(fields: [Bonus_user_ID], references: [User_ID], name: \"UserBonuses\")\n}\n\nmodel Multi_branch {\n  Multi_branch_ID            Int      @id @default(autoincrement()) @map(\"Multi_branch_ID\")\n  Multi_branch_name          String   @map(\"Multi_branch_name\")\n  Multi_branch_address       String?  @map(\"Multi_branch_address\")\n  Multi_branch_phone         String?  @map(\"Multi_branch_phone\")\n  Multi_branch_email         String?  @map(\"Multi_branch_email\")\n  Multi_branch_opening_hours String?  @map(\"Multi_branch_opening_hours\")\n  Multi_branch_create_at     DateTime @default(now()) @map(\"Multi_branch_create_at\")\n  Multi_branch_update_at     DateTime @updatedAt @map(\"Multi_branch_update_at\")\n\n  Register_service Register_service[] @relation(\"BranchServices\")\n  History          History[]          @relation(\"BranchHistories\")\n}\n\nmodel Commit {\n  Commit_ID          Int      @id @default(autoincrement()) @map(\"Commit_ID\")\n  Commit_text        String   @map(\"Commit_text\")\n  Commit_review      String?  @map(\"Commit_review\")\n  Commit_entity_id   Int?     @map(\"Commit_entity_id\")\n  Commit_entity_name String?  @map(\"Commit_entity_name\")\n  Commit_create_at   DateTime @default(now()) @map(\"Commit_create_at\")\n  Commit_user_ID     Int      @map(\"Commit_user_ID\")\n  User               User     @relation(fields: [Commit_user_ID], references: [User_ID], name: \"UserCommits\")\n}\n\nmodel Notification {\n  Notification_ID        Int      @id @default(autoincrement()) @map(\"Notification_ID\")\n  Notification_text      String   @map(\"Notification_text\")\n  Notification_is_read   Boolean  @default(false) @map(\"Notification_is_read\")\n  Notification_create_at DateTime @default(now()) @map(\"Notification_create_at\")\n  Notification_user_ID   Int      @map(\"Notification_user_ID\")\n  User                   User     @relation(fields: [Notification_user_ID], references: [User_ID], name: \"UserNotifications\")\n}\n\nmodel OTP {\n  OTP_ID         Int             @id @default(autoincrement()) @map(\"OTP_ID\")\n  OTP_code       String          @map(\"OTP_code\")\n  OTP_type       OTP_type_enum   @map(\"OTP_type\")\n  OTP_status     OTP_status_enum @map(\"OTP_status\")\n  OTP_create_at  DateTime        @default(now()) @map(\"OTP_create_at\")\n  OTP_expires_at DateTime        @map(\"OTP_expires_at\")\n  OTP_user_ID    Int             @map(\"OTP_user_ID\")\n  User           User            @relation(fields: [OTP_user_ID], references: [User_ID], name: \"UserOTPs\")\n}\n\nmodel History {\n  History_ID        Int                 @id @default(autoincrement()) @map(\"History_ID\")\n  History_bonus     Int?                @map(\"History_bonus\")\n  History_price     Float?              @map(\"History_price\")\n  History_status    History_status_enum @map(\"History_status\")\n  History_create_at DateTime            @default(now()) @map(\"History_create_at\")\n\n  History_multi_branch_ID Int          @map(\"History_multi_branch_ID\")\n  Multi_branch            Multi_branch @relation(fields: [History_multi_branch_ID], references: [Multi_branch_ID], name: \"BranchHistories\")\n\n  History_user_ID Int  @map(\"History_user_ID\")\n  User            User @relation(fields: [History_user_ID], references: [User_ID], name: \"UserHistories\")\n\n  History_service_ID Int     @map(\"History_service_ID\")\n  Service            Service @relation(fields: [History_service_ID], references: [Service_ID], name: \"ServiceHistories\")\n\n  History_register_car Int?          @map(\"History_register_car\")\n  Register_car         Register_car? @relation(fields: [History_register_car], references: [Register_car_ID], name: \"CarHistories\")\n\n  History_register_service_ID Int?              @map(\"History_register_service_ID\")\n  Register_service            Register_service? @relation(fields: [History_register_service_ID], references: [Register_service_ID], name: \"ServiceBookings\")\n  Car                         Car?              @relation(fields: [carCar_ID], references: [Car_ID])\n  carCar_ID                   Int?\n}\n\nmodel Register_car {\n  Register_car_ID           Int                      @id @default(autoincrement()) @map(\"Register_car_ID\")\n  Register_car_manufacturer String?                  @map(\"Register_car_manufacturer\")\n  Register_car_mark         String?                  @map(\"Register_car_mark\")\n  Register_car_year         Int?                     @map(\"Register_car_year\")\n  Register_car_vin          String?                  @unique @map(\"Register_car_vin\")\n  Register_car_status       Register_car_status_enum @map(\"Register_car_status\")\n  Register_car_create_at    DateTime                 @default(now()) @map(\"Register_car_create_at\")\n  Register_car_update_at    DateTime                 @updatedAt @map(\"Register_car_update_at\")\n  Register_car_user_ID      Int                      @map(\"Register_car_user_ID\")\n  User                      User                     @relation(fields: [Register_car_user_ID], references: [User_ID], name: \"UserRegisterCars\")\n\n  History History[] @relation(\"CarHistories\")\n}\n\nmodel Register_service {\n  Register_service_ID              Int                          @id @default(autoincrement()) @map(\"Register_service_ID\")\n  Register_service_scheduled       DateTime?                    @map(\"Register_service_scheduled\")\n  Register_service_time_list       String?                      @map(\"Register_service_time_list\")\n  Register_service_status          Register_service_status_enum @map(\"Register_service_status\")\n  Register_service_create_at       DateTime                     @default(now()) @map(\"Register_service_create_at\")\n  Register_service_update_at       DateTime                     @updatedAt @map(\"Register_service_update_at\")\n  Register_service_user_ID         Int                          @map(\"Register_service_user_ID\")\n  User                             User                         @relation(fields: [Register_service_user_ID], references: [User_ID], name: \"UserRegisterServices\")\n  Register_service_car             Int                          @map(\"Register_service_car\")\n  Car                              Car                          @relation(fields: [Register_service_car], references: [Car_ID], name: \"CarServices\")\n  Register_service_service_ID      Int                          @map(\"Register_service_service_ID\")\n  Service                          Service                      @relation(fields: [Register_service_service_ID], references: [Service_ID], name: \"ServiceBookings\")\n  Register_service_multi_branch_ID Int                          @map(\"Register_service_multi_branch_ID\")\n  Multi_branch                     Multi_branch                 @relation(fields: [Register_service_multi_branch_ID], references: [Multi_branch_ID], name: \"BranchServices\")\n\n  History History[] @relation(\"ServiceBookings\")\n}\n\n//npx prisma migrate dev --name init\n",
  "inlineSchemaHash": "c613e2307f098c87cd4c655064b2abd3303938b933e815f6bf53b1ab10a1c525",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"User_ID\",\"dbName\":\"User_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_last_name\",\"dbName\":\"User_last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_first_name\",\"dbName\":\"User_first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_email\",\"dbName\":\"User_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_phone\",\"dbName\":\"User_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_password\",\"dbName\":\"User_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_role\",\"dbName\":\"User_role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"User_role_enum\",\"nativeType\":null,\"default\":\"CUSTOMER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_create_at\",\"dbName\":\"User_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_update_at\",\"dbName\":\"User_update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bonus\",\"nativeType\":null,\"relationName\":\"UserBonuses\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"nativeType\":null,\"relationName\":\"UserNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Commit\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commit\",\"nativeType\":null,\"relationName\":\"UserCommits\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTP\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTP\",\"nativeType\":null,\"relationName\":\"UserOTPs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_car\",\"nativeType\":null,\"relationName\":\"UserRegisterCars\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_service\",\"nativeType\":null,\"relationName\":\"UserRegisterServices\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"nativeType\":null,\"relationName\":\"UserHistories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Car\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Car_ID\",\"dbName\":\"Car_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Car_list\",\"dbName\":\"Car_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_service\",\"nativeType\":null,\"relationName\":\"CarServices\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"nativeType\":null,\"relationName\":\"CarToHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Service\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Service_ID\",\"dbName\":\"Service_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service_name\",\"dbName\":\"Service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service_description\",\"dbName\":\"Service_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service_price\",\"dbName\":\"Service_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service_duration_min\",\"dbName\":\"Service_duration_min\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_service\",\"nativeType\":null,\"relationName\":\"ServiceBookings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"nativeType\":null,\"relationName\":\"ServiceHistories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bonus\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Bonus_ID\",\"dbName\":\"Bonus_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bonus_point\",\"dbName\":\"Bonus_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bonus_type\",\"dbName\":\"Bonus_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bonus_type_enum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bonus_user_ID\",\"dbName\":\"Bonus_user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserBonuses\",\"relationFromFields\":[\"Bonus_user_ID\"],\"relationToFields\":[\"User_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Multi_branch\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Multi_branch_ID\",\"dbName\":\"Multi_branch_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch_name\",\"dbName\":\"Multi_branch_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch_address\",\"dbName\":\"Multi_branch_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch_phone\",\"dbName\":\"Multi_branch_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch_email\",\"dbName\":\"Multi_branch_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch_opening_hours\",\"dbName\":\"Multi_branch_opening_hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch_create_at\",\"dbName\":\"Multi_branch_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch_update_at\",\"dbName\":\"Multi_branch_update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Register_service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_service\",\"nativeType\":null,\"relationName\":\"BranchServices\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"nativeType\":null,\"relationName\":\"BranchHistories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Commit\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Commit_ID\",\"dbName\":\"Commit_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Commit_text\",\"dbName\":\"Commit_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Commit_review\",\"dbName\":\"Commit_review\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Commit_entity_id\",\"dbName\":\"Commit_entity_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Commit_entity_name\",\"dbName\":\"Commit_entity_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Commit_create_at\",\"dbName\":\"Commit_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Commit_user_ID\",\"dbName\":\"Commit_user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserCommits\",\"relationFromFields\":[\"Commit_user_ID\"],\"relationToFields\":[\"User_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Notification_ID\",\"dbName\":\"Notification_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification_text\",\"dbName\":\"Notification_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification_is_read\",\"dbName\":\"Notification_is_read\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification_create_at\",\"dbName\":\"Notification_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification_user_ID\",\"dbName\":\"Notification_user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserNotifications\",\"relationFromFields\":[\"Notification_user_ID\"],\"relationToFields\":[\"User_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OTP\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"OTP_ID\",\"dbName\":\"OTP_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTP_code\",\"dbName\":\"OTP_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTP_type\",\"dbName\":\"OTP_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTP_type_enum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTP_status\",\"dbName\":\"OTP_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OTP_status_enum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTP_create_at\",\"dbName\":\"OTP_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTP_expires_at\",\"dbName\":\"OTP_expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTP_user_ID\",\"dbName\":\"OTP_user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserOTPs\",\"relationFromFields\":[\"OTP_user_ID\"],\"relationToFields\":[\"User_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"History\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"History_ID\",\"dbName\":\"History_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_bonus\",\"dbName\":\"History_bonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_price\",\"dbName\":\"History_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_status\",\"dbName\":\"History_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History_status_enum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_create_at\",\"dbName\":\"History_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_multi_branch_ID\",\"dbName\":\"History_multi_branch_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Multi_branch\",\"nativeType\":null,\"relationName\":\"BranchHistories\",\"relationFromFields\":[\"History_multi_branch_ID\"],\"relationToFields\":[\"Multi_branch_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_user_ID\",\"dbName\":\"History_user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserHistories\",\"relationFromFields\":[\"History_user_ID\"],\"relationToFields\":[\"User_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_service_ID\",\"dbName\":\"History_service_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"ServiceHistories\",\"relationFromFields\":[\"History_service_ID\"],\"relationToFields\":[\"Service_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_register_car\",\"dbName\":\"History_register_car\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_car\",\"nativeType\":null,\"relationName\":\"CarHistories\",\"relationFromFields\":[\"History_register_car\"],\"relationToFields\":[\"Register_car_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History_register_service_ID\",\"dbName\":\"History_register_service_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_service\",\"nativeType\":null,\"relationName\":\"ServiceBookings\",\"relationFromFields\":[\"History_register_service_ID\"],\"relationToFields\":[\"Register_service_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarToHistory\",\"relationFromFields\":[\"carCar_ID\"],\"relationToFields\":[\"Car_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carCar_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Register_car\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Register_car_ID\",\"dbName\":\"Register_car_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car_manufacturer\",\"dbName\":\"Register_car_manufacturer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car_mark\",\"dbName\":\"Register_car_mark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car_year\",\"dbName\":\"Register_car_year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car_vin\",\"dbName\":\"Register_car_vin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car_status\",\"dbName\":\"Register_car_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_car_status_enum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car_create_at\",\"dbName\":\"Register_car_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_car_update_at\",\"dbName\":\"Register_car_update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Register_car_user_ID\",\"dbName\":\"Register_car_user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserRegisterCars\",\"relationFromFields\":[\"Register_car_user_ID\"],\"relationToFields\":[\"User_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"nativeType\":null,\"relationName\":\"CarHistories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Register_service\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Register_service_ID\",\"dbName\":\"Register_service_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_scheduled\",\"dbName\":\"Register_service_scheduled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_time_list\",\"dbName\":\"Register_service_time_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_status\",\"dbName\":\"Register_service_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Register_service_status_enum\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_create_at\",\"dbName\":\"Register_service_create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_update_at\",\"dbName\":\"Register_service_update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Register_service_user_ID\",\"dbName\":\"Register_service_user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserRegisterServices\",\"relationFromFields\":[\"Register_service_user_ID\"],\"relationToFields\":[\"User_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_car\",\"dbName\":\"Register_service_car\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarServices\",\"relationFromFields\":[\"Register_service_car\"],\"relationToFields\":[\"Car_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_service_ID\",\"dbName\":\"Register_service_service_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"ServiceBookings\",\"relationFromFields\":[\"Register_service_service_ID\"],\"relationToFields\":[\"Service_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Register_service_multi_branch_ID\",\"dbName\":\"Register_service_multi_branch_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Multi_branch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Multi_branch\",\"nativeType\":null,\"relationName\":\"BranchServices\",\"relationFromFields\":[\"Register_service_multi_branch_ID\"],\"relationToFields\":[\"Multi_branch_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"History\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"nativeType\":null,\"relationName\":\"ServiceBookings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"User_role_enum\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"MECHANIC\",\"dbName\":null},{\"name\":\"CUSTOMER\",\"dbName\":null}],\"dbName\":null},\"Bonus_type_enum\":{\"values\":[{\"name\":\"REFERRAL\",\"dbName\":null},{\"name\":\"LOYALTY\",\"dbName\":null},{\"name\":\"PROMO\",\"dbName\":null}],\"dbName\":null},\"OTP_status_enum\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"USED\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null}],\"dbName\":null},\"OTP_type_enum\":{\"values\":[{\"name\":\"VERIFICATION\",\"dbName\":null},{\"name\":\"PASSWORD_RESET\",\"dbName\":null}],\"dbName\":null},\"History_status_enum\":{\"values\":[{\"name\":\"OPEN\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null}],\"dbName\":null},\"Register_car_status_enum\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"INACTIVE\",\"dbName\":null},{\"name\":\"STOLEN\",\"dbName\":null}],\"dbName\":null},\"Register_service_status_enum\":{\"values\":[{\"name\":\"SCHEDULED\",\"dbName\":null},{\"name\":\"DONE\",\"dbName\":null},{\"name\":\"NO_SHOW\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

