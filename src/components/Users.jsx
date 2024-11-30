import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {
  const user = useLoaderData();
  const [users, serUsers] = useState(user);

  const handealDelete = id => {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: 'delete',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount)
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            const reming = users.filter(user => user._id !== id)
            serUsers(reming)
          });
      }
    });
  };

  return (
    <div>
      <h2> New User{users.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>create At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

               {users.map(item => (
                <tr key={item._id}>
                  <th>1</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.time}</td>
                  <td>
                    <button
                      onClick={() => handealDelete(item._id)}
                      className="btn"
                    >
                      X
                    </button>
                    <button className="btn">E</button>
                  </td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
