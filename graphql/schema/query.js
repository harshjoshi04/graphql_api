export const querySchema = `#graphql

    type User{
        _id:ID!,
        name:String,
        age:Int,
        address:String,
    }

    type Book{
        user:User,
        title:String,
        description:String
    }

    type Query{
        user:[User],
        book:[Book],
    }
`;
