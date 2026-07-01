import { supabase } from "./supabase";

export const usersAPI = {
  // Ambil semua user
  async getUsers() {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) throw error;

    return data;
  },

  // Login
  async login(email, password) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password);

    if (error) throw error;

    return data;
  },

  // Register
  async createUser(user) {
    const { data, error } = await supabase
      .from("users")
      .insert([user])
      .select();

    if (error) throw error;

    return data;
  },

  // Update User
  async updateUser(id, user) {
    const { data, error } = await supabase
      .from("users")
      .update(user)
      .eq("id", id)
      .select();

    if (error) throw error;

    return data;
  },

  // Delete User
  async deleteUser(id) {
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};