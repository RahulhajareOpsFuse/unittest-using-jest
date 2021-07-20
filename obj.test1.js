const obj=require('./obj')
test1("Object Testing",()=>{
    expect(obj()).toEqual({name:'Rahul'})
})