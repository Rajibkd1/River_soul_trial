import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://river_soul_api.test/api/navigation-menus";

export default function NavigationManager() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    route: "",
    status: "active",
  });

  // Fetch all navigation menus
  const fetchMenus = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_BASE_URL);
      const data = response.data;

      if (data.success) {
        setMenus(data.data);
      } else {
        setError("Failed to fetch menus");
      }
    } catch (err) {
      setError("Error connecting to API: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create new menu
  const createMenu = async (menuData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_BASE_URL, menuData);
      const data = response.data;

      if (data.success) {
        setMenus([...menus, data.data]);
        resetForm();
        setShowForm(false);
      } else {
        setError("Failed to create menu");
      }
    } catch (err) {
      setError("Error creating menu: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update menu
  const updateMenu = async (id, menuData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, menuData);
      const data = response.data;

      if (data.success) {
        setMenus(menus.map((menu) => (menu.id === id ? data.data : menu)));
        resetForm();
        setShowForm(false);
        setEditingMenu(null);
      } else {
        setError("Failed to update menu");
      }
    } catch (err) {
      setError("Error updating menu: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete menu
  const deleteMenu = async (id) => {
    if (!confirm("Are you sure you want to delete this menu item?")) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      const data = response.data;

      if (data.success) {
        setMenus(menus.filter((menu) => menu.id !== id));
      } else {
        setError("Failed to delete menu");
      }
    } catch (err) {
      setError("Error deleting menu: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingMenu) {
      updateMenu(editingMenu.id, formData);
    } else {
      createMenu(formData);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      route: "",
      status: "active",
    });
    setEditingMenu(null);
  };

  // Start editing
  const startEdit = (menu) => {
    setEditingMenu(menu);
    setFormData({
      name: menu.name,
      slug: menu.slug,
      route: menu.route || "",
      status: menu.status,
    });
    setShowForm(true);
  };

  // Cancel editing
  const cancelEdit = () => {
    resetForm();
    setShowForm(false);
  };

  // Load menus on component mount
  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Navigation Menu Manager
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage your website navigation menus
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">{error}</span>
            <button
              onClick={() => setError(null)}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
        )}

        {/* Add New Button */}
        {!showForm && (
          <div className="mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#0C343D] text-white px-6 py-3 rounded-lg hover:bg-[#0a2a32] transition duration-200 font-medium"
            >
              + Add New Menu
            </button>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {editingMenu ? "Edit Menu" : "Create New Menu"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0C343D] focus:border-transparent"
                  placeholder="e.g., Home"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0C343D] focus:border-transparent"
                  placeholder="Auto-generated if left empty"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Leave empty to auto-generate from name
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Route
                </label>
                <input
                  type="text"
                  name="route"
                  value={formData.route}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0C343D] focus:border-transparent"
                  placeholder="e.g., /home or /about-us"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0C343D] focus:border-transparent"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0C343D] text-white px-6 py-2 rounded-lg hover:bg-[#0a2a32] transition duration-200 font-medium disabled:opacity-50"
                >
                  {loading
                    ? "Saving..."
                    : editingMenu
                    ? "Update Menu"
                    : "Create Menu"}
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Menu List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              All Navigation Menus
            </h2>
          </div>

          {loading && menus.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#0C343D]"></div>
              <p className="mt-2">Loading...</p>
            </div>
          ) : menus.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No navigation menus found. Create your first menu!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Slug
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Route
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {menus.map((menu) => (
                    <tr key={menu.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {menu.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {menu.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {menu.slug}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {menu.route || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            menu.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {menu.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => startEdit(menu)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteMenu(menu.id)}
                          className="text-red-600 hover:text-red-900"
                          disabled={loading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-6 text-center">
          <button
            onClick={fetchMenus}
            disabled={loading}
            className="text-[#0C343D] hover:text-[#0a2a32] font-medium disabled:opacity-50"
          >
            {loading ? "Refreshing..." : "🔄 Refresh Data"}
          </button>
        </div>
      </div>
    </div>
  );
}
