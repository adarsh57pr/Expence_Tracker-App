import React, { useRef, useState } from 'react'


const Home = () => {

  const [Add, setAdd] = useState(false);
  const [Close, setClose] = useState(true);
  const [Close2, setClose2] = useState(false);

  const [Arr, setArr] = useState([
    // {
    //   Id: 1,
    //   Name: 'Himanshu',
    //   Amount: 100
    // },
    // {
    //   Id: 2,
    //   Name: 'Shivam',
    //   Amount: 200
    // },
    // {
    //   Id: 3,
    //   Name: 'Suchi',
    //   Amount: 300
    // },
    // {
    //   Id: 4,
    //   Name: 'Nikhil',
    //   Amount: 400
    // }
  ]);

  let SNoRef = useRef()
  let nameRef = useRef()
  let amountRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      Id: SNoRef.current.value,
      Name: nameRef.current.value,
      Amount: amountRef.current.value
    }
    console.log(obj);
    setArr([...Arr, obj])

    localStorage.setItem('ExpenceData',JSON.stringify(obj))

  }
  const handleDelete = (ele, i) => {
    //  console.log(ele,i)

    //  Arr.splice(i)
    //  console.log(Arr)

    //  let copyArr =[...Arr]
    //  copyArr.splice(i,1)
    //  console.log(copyArr)
    //  setArr(copyArr)  

    //  method ---2
    // let index = Arr.findIndex(x => x.Id === ele.Id)----OR
    let index = Arr.findIndex((e) => e.Id === ele.Id)
    console.log(index)

    let copyArr = [...Arr]
    copyArr.splice(index, 1)
    setArr(copyArr);


  }
  const handleAdd = (() => {
    setAdd(true)
    setClose(false)
    setClose2(true)


  })

  const handleClose = (() => {
    setAdd(false)
    setClose(true)
    setClose2(false)

  })

  return (
    <div>
      <div className='text-center bg-info w-25 app  m-auto mt-5 rounded py-2 px-2'>
        <h1 className='text-center w-100 text-white bg-black m-auto  rounded py-2'>Expence Tracker App</h1>
        </div>

      {/* <p>{Arr}</p> ---wrong */}

      {/* <div>
            <p>{Arr[0].Name}</p>        
            <p>{Arr[0].Amount}</p>
        </div>
        <div>
            <p>{Arr[1].Name}</p>
            <p>{Arr[1].Amount}</p>
        </div> ---right but not dynamic ------*/}

      <div className='text-center mt-5'>
        {Close && <button onClick={handleAdd} className='btn bg-success-subtle fw-bolder '>Add Expence</button>}
        {Close2 && <button onClick={handleClose} className='btn bg-danger-subtle fw-bolder '>Close Expence</button>}
        </div>
      {Add && <form className='row row-cols-lg-auto d-flex justify-content-center mt-3 bg-info w-50 m-auto rounded p-2 '>
        <input ref={SNoRef} className='mx-1 m-1 bg-black text-white rounded ps-2' type="number" placeholder='SNo.' />
        <input ref={nameRef} className='mx-1 m-1 bg-black text-white rounded ps-2' type="text" placeholder='Enter name' />
        <input ref={amountRef} className='mx-1 m-1 bg-black text-white rounded ps-2' type="number" placeholder='Enter Amount' />
        <button onClick={handleSubmit} className='btn btn-success m-1'>Submit</button>
        
      </form>}
      <div className=' row row-cols-lg-auto bg-info w-75 m-auto mt-5  rounded p-3'>
        {Arr.length > 0 ? <table class=" table m-auto w-100  text-center table-dark rounded" style={{ width: "70%" }}>
          <thead>
            <tr>
              <th scope="col">SNo.</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Active</th>
            </tr>
          </thead>
          <tbody>
            {
              Arr.map((ele, i) => {
                return <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{ele.Name}</td>
                  <td>{ele.Amount}</td>
                  <td><button onClick={() => handleDelete(ele, i)} className='btn bg-danger text-white'>Delete</button></td>
                </tr>
              })
            }

          </tbody>
        </table> : <h1 className='text-center text-white bg-black m-auto rounded py-2 px-5'>Add some item..</h1>}
      </div>

    </div>
  )
}

export default Home
