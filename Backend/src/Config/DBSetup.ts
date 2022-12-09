export const getDbConnectionString = () => {
    return "mongodb+srv://Oskar:mdXMayN05XfjctXf@mydb.hy6ay3o.mongodb.net/?retryWrites=true&w=majority"
    return process.env.MONGO_DB_CONNECTION_STRING!;
}