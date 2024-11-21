import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupérer la liste des utilisateurs
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/register');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    };

    fetchUsers();
  }, []);

  // Supprimer un utilisateur
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/profile/${id}`);
      setUsers(users.filter(user => user.id !== id)); // Mettre à jour l'état local
    } catch (error) {
      console.error('Erreur lors de la suppression', error);
    }
  };

  if (loading) {
    return <p className="animate-pulse text-gray-400">Chargement des utilisateurs...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Liste des utilisateurs</h2>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Supprimer
                </button>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 ml-2"
                  onClick={() => alert('Modifier fonctionnalité à venir')}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
