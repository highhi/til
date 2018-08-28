const { normalize, schema } = require('normalizr')

const data = { todo: [{
  id: 1,
  text: 'hoge'
},{
  id: 2,
  text: 'fuga'
}]}

const todo = new schema.Entity('todo', {
  todo: data
})

console.log(normalize(data, todo))