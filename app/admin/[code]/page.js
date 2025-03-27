import Footer from '@/components/Footer'
import HasEntered from '@/components/HasEntered'
import Header from '@/components/Header'
import { redirect } from 'next/navigation'

async function getData(code) {
    const res =  await fetch(`https://davidbackend-gi5p.onrender.com/guest/${code}`)
     if(!res.ok){
        throw new Error("fail to fetch data")
     }

     return res.json()
}

async function getAllUserData() {
    const res =  await fetch(`https://davidbackend-gi5p.onrender.com/guest`)
     if(!res.ok){
        throw new Error("fail to fetch data")
     }

     return res.json()
}


async function page({params}) {
    const code = (await params).code
    const data = await getData(code)
    const allUser = await getAllUserData()

    if(data?.status === 404){
        redirect("/")
    }

    if(data?.link !== "home" || !data?.guest?.name){
        redirect("/")
    }

    if(data?.guest?.name !== "Charles Ayomike"){
        redirect("/")
    }



  return (
    <div>
        <Header code={code}/>

        <main className="flex-1 py-16 px-16">
            <table>
            <tr>
                <th>SN</th>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Entered</th>
            </tr>
          {
            allUser.map((guestList, i) =>(
            <tr key={guestList._id}>
                <td>{i + 1}</td>
                <td>{guestList.code}</td>
                <td>{guestList.name}</td>
                <td>{guestList.email}</td>
                <td>
                    <HasEntered hasEntered={guestList.hasEntered} guestC={guestList.code}/>
                </td>
            </tr>
            ))
          }
            

            </table>
        </main>
        <Footer/>
    </div>
  )
}

export default page