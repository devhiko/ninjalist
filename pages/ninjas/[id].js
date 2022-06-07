import Link from "next/link"

export const getStaticPaths = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const paths = data.map(ninja => { return { params: { id: ninja.id.toString() } } })
  return { paths, fallback: false }
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id
  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  return { props: { ninja: data } }
}

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <Link href='/ninjas'><a style={{ color: 'red' }}>Back to ninja list</a></Link>
    </div>
  );
}

export default Details;