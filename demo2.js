const f = await Deno.readFile('./road.png')
const file = new File(f, 'road.png')
const form = new FormData()
form.append('file', file)

const res = await fetch('http://localhost:3000/upload', {
  method: 'POST',
  body: form
})

const txt = await res.text()
console.log(txt)