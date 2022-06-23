import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddUser(props) {

    const [userData, setUserData] = useState({ name: "", userID: "", roomID: "", noOfDays: "" })

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }

    const onSubmit = () => {
        createUser();
    }
    const onCancel = () => {
        props.setAddUserVisible(false);
    }
    //api calls
    const createUser = async () => {
        const response = await fetch("http://localhost:3001/table/createuser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": userData.name,
                "roomid": userData.roomID,
                "userid": userData.userID,
                "days": userData.noOfDays
            })
        });
        const json = await response.json();
        if (Object.keys(json).includes('errors')) { toast.warn(json.errors, { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined, }); }
        else{
            onCancel();
        }
    }


    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <div>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add User</h1>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" required={true} onChange={onChange} placeholder="PLease enter Name" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">User ID</label>
                                <input type="text" required={true} id="userID" name="userID" onChange={onChange} placeholder="Please enter User ID" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Room ID</label>
                                <input type="text" required={true} id="roomID" name="roomID" onChange={onChange} placeholder='Please enter Room ID' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Number of Days</label>
                                <input type="number" id="noOfDays" name="noOfDays" onChange={onChange} placeholder='Please enter Number of Days' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className='flex my-5 w-full justify-center '>
                            <div className="p-2 mx-5">
                                <button onClick={onSubmit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            </div>
                            <div className="p-2 mx-5">
                                <button onClick={onCancel} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}
export default AddUser;