const sum=require('./sum')

test("test case 1",()=>{
    expect(sum(2,3)).toBe(5)//to be is used for exact output
})

test("test case 2",()=>{
    expect(sum(2,1)).not.toBe(5)//to be is used for unexpected output
})