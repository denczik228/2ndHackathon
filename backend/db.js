import knex from 'knex'

export const db = knex({
    client: 'pg',
    connection: {
        host: 'surus.db.elephantsql.com',
        port: '5432',
        user: 'btigvhlt',
        password: 'B7HPjOySSkIv0qeQbmoZ-DSiHuvjHh18',
        database: 'btigvhlt'
    }
})

db('users')
    .select('id', 'username', 'email', 'password')
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e);
    })
