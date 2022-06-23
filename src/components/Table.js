import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddUser from './AddUser';

function Table() {

    const [users, setUsers] = useState([]);
    const [addUserVisible, setAddUserVisible] = useState(false);

    const getAllUsers = async () => {
        const response = await fetch("http://localhost:3001/table/getalluser", {
            method: "GET"
        });
        const json = await response.json();
        if (Object.keys(json).includes('errors')) {
            toast.warn(json.errors, { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined, });
        }
        else {
            setUsers(json);
        }

    }

    useEffect(() => {
        getAllUsers();
    }, [addUserVisible])

    return (
        <>
            {addUserVisible ? <AddUser setAddUserVisible={setAddUserVisible} /> :
                <section className="text-gray-600 body-font">
                    <div style={{ display: `${addUserVisible ? "block" : "none"}` }}>
                        <AddUser setAddUserVisible={setAddUserVisible} />
                    </div>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">User Table</h1>
                        </div>
                        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                            <table className="table-auto w-full text-left whitespace-no-wrap">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Identification Number</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Room ID</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Number of Days</th>
                                        <th onClick={() => { setAddUserVisible(true) }} className="w-10 title-font cursor-pointer tracking-wider text-xl text-gray-900 bg-gray-100 rounded-tr rounded-br">+</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user) => {

                                            return <tr key={user.userid}>
                                                <td className="px-4 py-3">{user.name}</td>
                                                <td className="px-4 py-3">{user.userid}</td>
                                                <td className="px-4 py-3">{user.roomid}</td>
                                                <td className="px-4 py-3">{user.days}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <ToastContainer />
                </section>
            }
        </>
    )
}

export default Table;

