//https://blog.hyper.io/uploading-files-with-deno/

const file = new File(['hello world'], 'hello.txt')
const form = new FormData()
form.append('file', file)

const res = await fetch('http://localhost:3000/upload', {
  method: 'POST',
  body: form
})

const txt = await res.text()
console.log(txt)