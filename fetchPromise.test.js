const promise=require('./Promise')

test("Promise testing",()=>{
    return fetchPromise().then((data)=>{
        expect(data).toBe('hello');
    })
})