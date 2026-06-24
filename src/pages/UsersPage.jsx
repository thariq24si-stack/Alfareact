import { useEffect, useState } from "react";
import { usersAPI } from "../services/usersAPI";
import PageHeader from "../components/PageHeader";

import {
  FaUsers,
  FaUserShield,
  FaUserInjured,
  FaEdit,
  FaTrash,
  FaUserPlus,
} from "react-icons/fa";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "customer",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await usersAPI.getUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await usersAPI.updateUser(editingId, form);
        alert("User berhasil diupdate");
      } else {
        await usersAPI.createUser(form);
        alert("User berhasil ditambahkan");
      }

      setForm({
        fullname: "",
        email: "",
        password: "",
        role: "customer",
      });

      setEditingId(null);
      loadUsers();
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan");
    }
  };

  const handleEdit = (user) => {
    setForm({
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      role: user.role,
    });

    setEditingId(user.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus user?"
    );

    if (!confirmDelete) return;

    try {
      await usersAPI.deleteUser(id);

      alert("User berhasil dihapus");
      loadUsers();
    } catch (error) {
      console.log(error);
      alert("Gagal menghapus user");
    }
  };

  const totalUsers = users.length;

  const totalAdmin = users.filter(
    (u) => u.role === "admin"
  ).length;

  const totalPatients = users.filter(
    (u) => u.role === "customer"
  ).length;

  return (
    <PageHeader
      title="User Management"
      breadcrumb={["Home", "Users"]}
    >
      <div className="p-6">

        {/* STATISTIC */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">

          {/* Total User */}
          <div className="flex items-center space-x-4 bg-white rounded-xl shadow-sm p-6 border-b-4 border-blue-500">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600">
              <FaUsers size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {totalUsers}
              </h3>

              <p className="text-gray-400 text-sm">
                Total Users
              </p>
            </div>
          </div>

          {/* Admin */}
          <div className="flex items-center space-x-4 bg-white rounded-xl shadow-sm p-6 border-b-4 border-cyan-500">
            <div className="bg-cyan-100 p-4 rounded-full text-cyan-600">
              <FaUserShield size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {totalAdmin}
              </h3>

              <p className="text-gray-400 text-sm">
                Administrator
              </p>
            </div>
          </div>

          {/* Pasien */}
          <div className="flex items-center space-x-4 bg-white rounded-xl shadow-sm p-6 border-b-4 border-green-500">
            <div className="bg-green-100 p-4 rounded-full text-green-600">
              <FaUserInjured size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {totalPatients}
              </h3>

              <p className="text-gray-400 text-sm">
                Pasien
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-xl shadow-sm border-t-4 border-blue-500 p-6 mb-8">

          <div className="flex items-center gap-3 mb-5">
            <FaUserPlus className="text-blue-600 text-xl" />

            <h3 className="text-lg font-bold text-gray-800">
              {editingId
                ? "Edit User"
                : "Tambah User"}
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={form.fullname}
              onChange={(e) =>
                setForm({
                  ...form,
                  fullname: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              required
            />

            <select
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            >
              <option value="customer">
                Pasien
              </option>

              <option value="admin">
                Admin
              </option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
            >
              {editingId
                ? "Update User"
                : "Tambah User"}
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm border-t-4 border-blue-500">

          <div className="p-6 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">
              Daftar User
            </h3>

            <span className="text-blue-600 text-sm font-semibold">
              Total {users.length} User
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 text-left">
                    ID
                  </th>

                  <th className="p-4 text-left">
                    Nama
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    Role
                  </th>

                  <th className="p-4 text-left">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">
                      #{user.id}
                    </td>

                    <td className="p-4 font-medium">
                      {user.fullname}
                    </td>

                    <td className="p-4 text-gray-600">
                      {user.email}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          user.role === "admin"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {user.role === "admin"
                          ? "Admin"
                          : "Pasien"}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            handleEdit(user)
                          }
                          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg"
                        >
                          <FaEdit />
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(user.id)
                          }
                          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                        >
                          <FaTrash />
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}

                {users.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-10 text-gray-400"
                    >
                      Belum ada data user
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </PageHeader>
  );
}